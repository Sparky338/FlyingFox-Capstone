import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { createPurchase } from "../../store/purchases";

import "./cart.css"

const Checkout = ({ cartState, setCartState, itemQty, setQtyState }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [sum, setSum] = useState(0);
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemQuantity = JSON.parse(localStorage.getItem('itemQty'));



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
                <div className="checkout-total">${sum}.00</div>
            </div>
            <div className="checkout-horizontal-line"></div>
            <button className="checkout-button" onClick={handleCheckout}>CHECKOUT</button>

        </div>
    )
}

export default Checkout;
