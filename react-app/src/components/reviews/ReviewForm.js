import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';


const ReviewForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(review.firstName || "");
    const [lastName, setLastName] = useState(review.lastName || "");
    const [reviewBody, setReviewBody] = useState(review.review || "");
    const [imageUrl, setImageUrl] = useState(review.image || "");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];

        if (!reviewBody) errors.push("Review is required");
        if (reviewBody.length < 10) errors.push("Review must be at least 10 characters long");
        if (reviewBody.length > 1000) errors.push("Review must be less than 1,000 characters long");
        if (imageUrl && !imageUrl.endsWith('.jpg') && !imageUrl.endsWith('.jpeg') && !imageUrl.endsWith('.png')) {
            errors.push("Image file must be a jpg, jpeg, or png");
        }
        setValidationErrors(errors);
    }, [reviewBody, imageUrl])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)

        if (validationErrors.length) return alert(`Can't submit, please correct the errors.`)

        const newReview = { ...review, firstName, lastName, reviewBody, imageUrl };

        if (formType === "Leave a review") {
            const awaitedReview = await dispatch(createReview(newReview))
            history.push(`/items/${awaitedReview.item_id}`)
        } else if (formType === "Edit Review") {
            const awaitedReview = await dispatch(editReview(review.id, newReview))
            history.push(`/items/${awaitedReview.item_id}`)
        }

        // dispatch(clearReviewAction())
    };

    return (
        <div className="review-form-outer">
            <div className="review-form-outer">
                <form className="review-form" onSubmit={handleSubmit}>
                    <h2 className="song-form-header">{formType}</h2>
                    {hasSubmitted && validationErrors.length > 0 && (
                        <div className="outer-error">
                            <div className="error-handling">There were errors in your submission:</div>
                            <ul className="errors-handling">
                                {validationErrors.map(error => (
                                    <li className="errors-list" key={error}>{error}</li>
                                ))}
                            </ul>

                        </div>
                    )}
                    <label className="review-form-label">
                        First Name*:
                        <input
                            className="review-form-review"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First name"
                        />
                    </label>
                    <label className="review-form-label">
                        Last Name*:
                        <input
                            className="review-form-review"
                            value={lastName}
                            onChange={e => setlastName(e.target.value)}
                            placeholder="Last name"
                        />
                    </label>
                    <label className="review-form-label">
                        Review*:
                        <input
                            className="review-form-review"
                            value={reviewBody}
                            onChange={e => setReviewBody(e.target.value)}
                            placeholder="Write a review"
                        />
                    </label>
                    <label className="review-form-label">
                        Image URL:
                        <input
                            className="review-form-image"
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="Input an image URL "
                        />
                    </label>
                </form>
            </div>
        </div >
    )
}

export default ReviewForm;
