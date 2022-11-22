import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { createReview, editReview } from '../../store/reviews';

import "./reviews.css";

const ReviewForm = ({ storedReview, formType}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [first_name, setFirstName] = useState(storedReview.first_name || "");
    const [last_name, setLastName] = useState(storedReview.last_name || "");
    const [review, setReviewBody] = useState(storedReview.review || "");
    // const [image_url, setImageUrl] = useState(storedReview.imageURL || ""); // REMOVE URL AFTER REVIEW.IMAGE TO GRAB THE CORRECT INFO
    const [image, setImage] = useState(storedReview.imageUrl || ""); // REMOVE URL AFTER REVIEW.IMAGE TO GRAB THE CORRECT INFO
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];

        if (!first_name) errors.push("First name is required");
        if (first_name.length > 50) errors.push("First name must be less than 50 characters");
        if (!last_name) errors.push("Last name is required");
        if (last_name.length > 50) errors.push("Last name must be less than 50 characters");
        if (!review) errors.push("Review is required");
        if (review.length < 10) errors.push("Review must be at least 10 characters");
        if (review.length > 1000) errors.push("Review must be less than 1,000 characters");
        // if (imageUrl && !imageUrl.endsWith('.jpg') && !imageUrl.endsWith('.jpeg') && !imageUrl.endsWith('.png')) {
        //     errors.push("Image file must be a jpg, jpeg, or png");
        // }
        setValidationErrors(errors);
    }, [first_name, last_name, review/*, imageUrl*/])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)

        if (validationErrors.length) return alert(`Can't submit, please correct the errors.`)

        const newReview = { ...storedReview, first_name, last_name, review, image };

        if (formType === "Leave a review") {
            const awaitedReview = await dispatch(createReview(newReview))
            console.log("awaited review", awaitedReview)
            history.push(`/items/${awaitedReview.item_id}`)
            if (awaitedReview) alert("Your review was successfully posted!")
        } else if (formType === "Edit Review") {
            const awaitedReview = await dispatch(editReview(storedReview.id, newReview))
            history.push(`/items/${awaitedReview.item_id}`)
            if (awaitedReview) alert("Your review was successfully edited!")
        }
    };

    return (
        <div className="review-form-outer-container">
            <div className="review-form-header">{formType}</div>
            <div className="review-form-container">
                <form className="review-form" onSubmit={handleSubmit}>
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
                        First Name*
                        <input
                            className="review-form-review"
                            type="text"
                            value={first_name}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First name"
                        />
                    </label>
                    <label className="review-form-label">
                        Last Name*
                        <input
                            className="review-form-review"
                            type="text"
                            value={last_name}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Last name"
                        />
                    </label>
                    <label className="review-form-label review-text-label">
                        Review*
                        <textarea
                            className="review-form-review review-text-area"
                            type="text"
                            value={review}
                            onChange={e => setReviewBody(e.target.value)}
                            placeholder="Write a review"
                        ></textarea>
                    </label>
                    <label className="review-form-label">
                        Image
                        <input
                            className="review-form-review"
                            type="file"
                            accept='image/*'
                            // value={imageUrl}
                            onChange={e => setImage(e.target.files[0])}
                            placeholder="Upload an image"
                        />
                    </label>
                    {/* <label className="review-form-label">
                        Image URL
                        <input
                            className="review-form-review"
                            type="text"
                            value={image_url}
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="Input an image URL "
                        />
                    </label> */}
                    <input type="submit" className='main-button review-submit-button' value="Post Review" />
                </form>
            </div>
        </div >
    )
}

export default ReviewForm;
