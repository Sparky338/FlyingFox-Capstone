import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPurchase } from "../../store/purchases";

const EditOrderForm = () => {
    let data = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const [qty, setQty] = useState(data.state.quantity || "")
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];
        if (parseInt(qty) <= 0 || isNaN(parseInt(qty))) {
            errors.push("Quantity must be a number and at least 1.")
        }
        setValidationErrors(errors);
    }, [qty])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true)

        if (validationErrors.length) return alert(`Can't submit, please correct the errors.`)

        const awaitedEdit = dispatch(editPurchase(data.state.purchase_id, qty))
        history.push(`/orders/${awaitedEdit.purchase_id}`)
    };

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
                            value={qty}
                            onChange={e => setQty(e.target.value)}
                        />
                    </label>
                    <input type="submit" className='main-button edit-order-submit-button' value="Edit Order" />
                </form>
            </div>

        </div>
    )
}

export default EditOrderForm
