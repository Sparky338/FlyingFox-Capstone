import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import "./cart.css"

const ShippingInfo = ({first_name, setFirstName, last_name, setLastName, address, setAddress,address2, setAddress2, city, setCity, state, setState, zipCode, setZipCode, validationErrors, setValidationErrors, hasSubmitted, setHasSubmitted, handleCheckout}) => {
    const currentUser = useSelector(state => state.session.user)
    const history = useHistory();
    const dispatch = useDispatch();

    // const [first_name, setFirstName] = useState("");
    // const [last_name, setLastName] = useState("");
    // const [address, setAddress] = useState("");
    // const [address2, setAddress2] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [zipCode, setZipCode] = useState("");

    // const [validationErrors, setValidationErrors] = useState([]);
    // const [hasSubmitted, setHasSubmitted] = useState(false);

    // useEffect(() => {
    //     const errors = [];

    //     if (!first_name) errors.push("First name is required");
    //     if (first_name.length > 50) errors.push("First name must be less than 50 characters");
    //     if (!last_name) errors.push("Last name is required");
    //     if (last_name.length > 50) errors.push("Last name must be less than 50 characters");
    //     if (!address) errors.push("An address is required");
    //     if (address.length < 5) errors.push("An address must be longer than 5 characters");
    //     if (!city) errors.push("A city is required");
    //     if (!state) errors.push("A state is required");
    //     if (!zipCode) errors.push("A zip code is required");
    //     if (zipCode.length !== 5) errors.push("Zip code must be exacly 5 numbers")
    //     if (zipCode)

    //     setValidationErrors(errors);
    // }, [first_name, last_name, address, address2, city, state, zipCode])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setHasSubmitted(true)

    //     if (validationErrors.length) return alert(`Can't submit, please correct the errors.`)


    // };


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
