import "./cart.css"

const ShippingInfo = ({first_name, setFirstName, last_name, setLastName, address, setAddress,address2, setAddress2, city, setCity, state, setState, zipCode, setZipCode, validationErrors, setValidationErrors, hasSubmitted, setHasSubmitted, handleCheckout}) => {

    return (
        <div className="shipping-info-outer">
            <div className="shipping-form-header">Shipping Information</div>
            <div className="shipping-form-container">
                <form className="shipping-form" onSubmit={handleCheckout}>
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
                    <label className="shipping-form-label">
                        First Name*
                        <input
                            className="shipping-form-review"
                            type="text"
                            value={first_name}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First name"
                        />
                    </label>
                    <label className="shipping-form-label">
                        Last Name*
                        <input
                            className="shipping-form-review"
                            type="text"
                            value={last_name}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Last name"
                        />
                    </label>
                    <label className="shipping-form-label">
                        Address*
                        <input
                            className="shipping-form-review"
                            type="text"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Address"
                        />
                    </label>
                    <label className="shipping-form-label">
                        Address 2
                        <input
                            className="shipping-form-review"
                            type="text"
                            value={address2}
                            onChange={e => setAddress2(e.target.value)}
                            placeholder="Address 2"
                        />
                    </label>
                    <label className="shipping-form-label">
                        City*
                        <input
                            className="shipping-form-review"
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="City"
                        />
                    </label>
                    <label className="shipping-form-label">
                        State*
                        <input
                            className="shipping-form-review"
                            type="text"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            placeholder="State"
                        />
                    </label>
                    <label className="shipping-form-label">
                        ZipCode*
                        <input
                            className="shipping-form-review"
                            type="text"
                            value={zipCode}
                            onChange={e => setZipCode(e.target.value)}
                            placeholder="ZipCode"
                        />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default ShippingInfo;
