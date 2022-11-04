import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { createReview, editReview } from '../../store/reviews';

import "./reviews.css";


const ReviewForm = ({review, formType}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);

    const [firstName, setFirstName] = useState(reviews.first_name || "");
    const [lastName, setLastName] = useState(reviews.lastName || "");
    const [reviewBody, setReviewBody] = useState(reviews.review || "");
    const [imageUrl, setImageUrl] = useState(reviews.image || "");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];


        if (!firstName) errors.push("First name is required");
        if (firstName.length > 50) errors.push("First name must be less than 50 characters");
        if (!lastName) errors.push("Last name is required");
        if (lastName.length > 50) errors.push("Last name must be less than 50 characters");
        if (!reviewBody) errors.push("Review is required");
        if (reviewBody.length < 10) errors.push("Review must be at least 10 characters");
        if (reviewBody.length > 1000) errors.push("Review must be less than 1,000 characters");
        if (imageUrl && !imageUrl.endsWith('.jpg') && !imageUrl.endsWith('.jpeg') && !imageUrl.endsWith('.png')) {
            errors.push("Image file must be a jpg, jpeg, or png");
        }
        setValidationErrors(errors);
    }, [firstName, lastName, reviewBody, imageUrl])

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
        <div className="review-form-outer-container">
            <div className="review-form-outer">
                <form className="review-form" onSubmit={handleSubmit}>
                    <h2 className="review-form-header">{formType}</h2>
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
                            onChange={e => setLastName(e.target.value)}
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
