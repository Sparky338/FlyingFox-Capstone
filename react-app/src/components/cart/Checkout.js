import { useEffect, useState } from "react";
import "./cart.css"

const Checkout = ({ cartState, setCartState, itemQty, setQtyState }) => {
    // const cart = JSON.parse(localStorage.getItem('cart'))
    // const itemQuantity = JSON.parse(localStorage.getItem('itemQuantity'))
    // const cartItemPrice = Object.entries(cartState).map((item, i) => {
    //     return item[1][0].price});
    // const itemQtyValue = Object.values(itemQty);
    const [sum, setSum] = useState(0)

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

    // const getTotalSum = () => {
    //     return cartItemPrice.reduce(
    //         function (acc, price, index) {
    //             return acc + price * itemQtyValue[index]
    //         }, 0,
    //     )
    // }


    // window.addEventListener('storage', e => setSum(e))
    // useEffect(() => {

    //         setSum(itemQuantity)

    // }, [itemQuantity])

    return (
        <div className="checkout-outer">
            <div className="order-summary-header">ORDER SUMMARY</div>
            <div className="checkout-horizontal-line"></div>
            <div className="checkout-total-container">
                <div className="checkout-total-text">Item Total</div>
                <div className="checkout-total">${sum}</div>
            </div>
            <div className="checkout-horizontal-line"></div>
            <button className="checkout-button">CHECKOUT</button> Add onClick

        </div>
    )
}

export default Checkout;
