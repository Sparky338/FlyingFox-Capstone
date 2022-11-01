import "./cart.css"

const Checkout = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const itemQuantity = JSON.parse(localStorage.getItem('itemQuantity'))
    const cartItemPrice = Object.entries(cart).map((item, i) => {
        return item[1][0].price});
    const itemQtyValue = Object.values(itemQuantity);

    const getTotalSum = () => {
        return cartItemPrice.reduce(
            function(acc, price, index){
                return acc + price * itemQtyValue[index]
            }, 0
        )
    }

    return (
        <div className="checkout-outer">
            <div className="order-summary-header">ORDER SUMMARY</div>
            <div className="checkout-horizontal-line"></div>
            <div className="checkout-total-container">
                <div className="checkout-total-text">Item Total</div>
                <div className="checkout-total">${getTotalSum()}</div>
            </div>
            <div className="checkout-horizontal-line"></div>
            <button className="checkout-button">CHECKOUT</button> Add onClick

        </div>
    )
}

export default Checkout;
