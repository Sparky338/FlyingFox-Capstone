import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { createReview, editReview } from '../../store/reviews';

import "./reviews.css";

const ReviewForm = ({ storedReview, formType }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [first_name, setFirstName] = useState(storedReview.first_name || "");
    const [last_name, setLastName] = useState(storedReview.last_name || "");
    const [review, setReviewBody] = useState(storedReview.review || "");
    const [imageUrl, setImageUrl] = useState(/*storedReview.imageURL ||*/ ""); // REMOVE URL AFTER REVIEW.IMAGE TO GRAB THE CORRECT INFO
    const [image, setImage] = useState(null);
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);

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
        setImageLoading(true);
        setHasSubmitted(true);
        if (validationErrors.length) return alert(`Can't submit, please correct the errors.`)

        const formData = new FormData();
        formData.append("image", image)
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea

        const res = await fetch('/api/images', {
            method: "POST",
            body: formData,
        });

        console.log("image res", res)
        if (res.ok) {
            // URL from S3 bucket {url: "http:// etc..."}
            await res.json().then(async (awaitedImage) => {
                // console.log(awaitedImage)
                // setImageUrl(awaitedImage.url)
                setImageLoading(false)
                // console.log("image", imageUrl)

                const image_url = awaitedImage.url
                const newReview = { ...storedReview, first_name, last_name, review, image_url };

                if (formType === "Leave a review" && imageLoading === false) {
                    const awaitedReview = await dispatch(createReview(newReview))
                    console.log("awaited review", awaitedReview)
                    history.push(`/items/${awaitedReview.item_id}`)
                    if (awaitedReview) alert("Your review was successfully posted!")
                } else if (formType === "Edit Review" && imageLoading === false) {
                    const awaitedReview = await dispatch(editReview(storedReview.id, newReview))
                    history.push(`/items/${awaitedReview.item_id}`)
                    if (awaitedReview) alert("Your review was successfully edited!")
                }
            })

            // setImageUrl(awaitedImageUrl.url)
            // setImageLoading(false);
// console.log(imageUrl)
            // const awaitedUrl = awaitedImageUrl.url
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            window.alert("An image is required for a review")
            console.log("error");
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
                        Image*
                        <input
                            className="review-form-review"
                            type="file"
                            accept='image/*'
                            // value={imageUrl}
                            onChange={e => setImage(e.target.files[0])}
                            placeholder="Upload an image"
                        />
                    </label>
                    <input type="submit" className='main-button review-submit-button' value="Post Review" />
                </form>
            </div>
        </div >
    )
}

export default ReviewForm;
