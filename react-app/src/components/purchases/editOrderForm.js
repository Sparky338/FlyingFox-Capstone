import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditOrderForm = () => {
    let data = useLocation()
    const [qty, setQty] = useState(data.state.quantity || "")

    useEffect(() => {
        const errors = [];

        setValidationErrors(errors);
    }, [])

    return (
        <div className="edit-order-outer">
            <div className="edit-order-header">Edit Order</div>
            <div className="edit-order-container">
                <form className="edit-order-form" onSubmit={handleSubmit}>
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
                    <label className="edit-order-form-label">
                        Quantity*
                        <input
                            className="edit-order-form-input"
                            type="number"
                            min="1"
                            value={image_url}
                            onChange={e => setImageUrl(e.target.value)}
                        />
                    </label>
                    <input type="submit" className='main-button review-submit-button' value="Post Review" />
                </form>
            </div>

        </div>
    )
}

export default EditOrderForm
