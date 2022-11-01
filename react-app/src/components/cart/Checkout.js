import "./cart.css"

const Checkout = () => {

    return (
        <div className="checkout-outer">
            <div className="order-summary-header">ORDER SUMMARY</div>
            <div className="checkout-horizontal-line"></div>
            <div className="checkout-total-container">
                <div className="checkout-total-text">Item Total</div>
                <div className="checkout-total">$</div>
            </div>
            <div className="checkout-horizontal-line"></div>
            <button className="checkout-button">CHECKOUT</button> Add onClick

        </div>
    )
}

export default Checkout;
