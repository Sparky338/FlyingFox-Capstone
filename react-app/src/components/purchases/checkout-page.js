import { Link } from "react-router-dom"
import "./checkout.css"

const CheckoutPage = () => {

    return (
        <div className="checkout-outer">
            <div className="successful-checkout">Your purchase has been completed!</div>
            <div className="redirection-options">Would you like to keep
                <Link to="/" className="home-link" > browsing</Link>?
                Or maybe you'd like to see your
                <Link to="/orders" className="order-link" > Orders</Link>?
            </div>
        </div>
    )
}

export default CheckoutPage;
