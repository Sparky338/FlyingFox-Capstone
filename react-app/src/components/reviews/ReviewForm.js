import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useState, useEffect } from 'react';


const ReviewForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();

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

    return (
        <div className="review-form-outer">
            <form className="review-form" onSubmit={handleSubmit}>

                <div className="review-form-review-data">
                    <label className="review-form-label">
                        Review*:
                        <input
                            className="review-form-review"
                            placeholder="Write a review"
                            // onChange={e => }
                        />
                    </label>
                    <label className="review-form-label">
                        Image URL:
                        <input
                            className="review-form-image"
                            placeholder="Input an image URL "
                            // onChange={e => }
                        />
                    </label>


                </div>
            </form>
        </div>
    )
}

export default ReviewForm;
