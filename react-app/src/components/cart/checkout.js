import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { createPurchase } from "../../store/purchases";
import ShippingInfo from "./shippingInfo";

import "./cart.css"

const Checkout = ({ cartState, setCartState, itemQty, setQtyState }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [sum, setSum] = useState(0);
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemQuantity = JSON.parse(localStorage.getItem('itemQty'));
    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };
    const dollarFormatter = new Intl.NumberFormat("en-US", formatting_options);

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");

    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];

        if (!first_name) errors.push("First name is required");
        if (first_name.length > 50) errors.push("First name must be less than 50 characters");
        if (!last_name) errors.push("Last name is required");
        if (last_name.length > 50) errors.push("Last name must be less than 50 characters");
        if (!address) errors.push("An address is required");
        if (address.length < 5) errors.push("An address must be longer than 5 characters");
        if (!city) errors.push("A city is required");
        if (!state) errors.push("A state is required");
        if (!zipCode) errors.push("A zip code is required");
        if (zipCode.length !== 5) errors.push("Zip code must be exacly 5 numbers")
        if (isNaN(zipCode)) errors.push("Zip code must be a number.")

        setValidationErrors(errors);
    }, [first_name, last_name, address, city, state, zipCode])



    useEffect(() => {
        if (itemQty && cartState) {
            const itemQtyValue = Object.values(itemQty);
            const cartItemPrice = Object.entries(cartState).map((item, i) => {
                return item[1][0].price
            });

            setSum(
                cartItemPrice.reduce(
                    function (acc, price, index) {
                        return acc + price * itemQtyValue[index]
                    }, 0)
            )
        }
    }, [cartState, itemQty])

    const handleCheckout = async (e) => {
        e.preventDefault();
        if (sum === 0) return alert("You can't checkout with nothing in your cart. Please select something to buy!")

        const cartItemsId = Object.entries(cart).map((item) => {
            return item[1][0].id
        }); // Array of ids lining up with quantities below
        const cartQuantities = Object.values(itemQuantity) // Array of values lining up with items above

        dispatch(createPurchase(cartItemsId, cartQuantities, sum))
        localStorage.clear()
        history.push("/checkout")
    }

    return (
        <div className="checkout-outer">
            <div className="order-summary-header">ORDER SUMMARY</div>
            <div className="checkout-horizontal-line"></div>
            <div className="checkout-total-container">
                <div className="checkout-total-text">Item Total</div>
                <div className="checkout-total">{dollarFormatter.format(sum)}</div>
            </div>
            <div className="checkout-horizontal-line"></div>
            <div className="shipping-info-container">
                        <ShippingInfo
                            first_name={first_name}
                            setFirstName={setFirstName}
                            last_name={last_name}
                            setlastName={setLastName}
                            address={address}
                            setAddress={setAddress}
                            address2={address2}
                            setAddress2={setAddress2}
                            city={city}
                            setCity={setCity}
                            state={state}
                            setState={setState}
                            zipCode={zipCode}
                            setZipCode={setZipCode}
                            validationErrors={validationErrors}
                            setValidationErrors={setValidationErrors}
                            hasSubmitted={hasSubmitted}
                            setHasSubmitted={setHasSubmitted}
                        />
                    </div>
            <button className="checkout-button" onClick={handleCheckout}>CHECKOUT</button>

        </div>
    )
}

export default Checkout;
