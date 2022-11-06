import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


const ShippingInfo = () =>{
    const currentUser = useSelector(state => state.session.user)
    const history = useHistory();
    const dispatch = useDispatch();

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [review, setReviewBody] = useState("");
    const [image_url, setImageUrl] = useState(""); // REMOVE URL AFTER REVIEW.IMAGE TO GRAB THE CORRECT INFO
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
        if (image_url && !image_url.endsWith('.jpg') && !image_url.endsWith('.jpeg') && !image_url.endsWith('.png')) {
            errors.push("Image file must be a jpg, jpeg, or png");
        }
        setValidationErrors(errors);
    }, [first_name, last_name, review, image_url])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)

        if (validationErrors.length) return alert(`Can't submit, please correct the errors.`)


    };


    return (
        <div className="shipping-info-outer">
            <div className="review-form-header">Shipping Information</div>
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
                    <label className="review-form-label">
                        Address
                        <input
                            className="review-form-review"
                            type="text"
                            value={image_url}
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="Address"
                        />
                    </label>
                    <label className="review-form-label">
                        City
                        <input
                            className="review-form-review"
                            type="text"
                            value={image_url}
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="City"
                        />
                    </label>
                    <label className="review-form-label">
                        State
                        <input
                            className="review-form-review"
                            type="text"
                            value={image_url}
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="State"
                        />
                    </label>
                    <label className="review-form-label">
                        ZipCode
                        <input
                            className="review-form-review"
                            type="text"
                            value={image_url}
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="ZipCode"
                        />
                    </label>
                    <input type="submit" className='main-button review-submit-button' value="Post Review" />
                </form>
            </div>
        </div>
    )
}

export default ShippingInfo;
