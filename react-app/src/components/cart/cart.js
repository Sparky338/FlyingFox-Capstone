import "./cart.css"

const Cart = () => {

    return (
        <div className="cart-outer">
            <div className="cart-container">
                <div className="cart-and-cart-contents-left">
                    <div className="cart-header">
                        <div className="your-cart">Your Cart</div>
                        <div className="item-value">
                            {(!localStorage.getItem('cart').length) ?
                                <div>(0 Items) </div> :
                                ()}
                        </div>
                    </div>
                    <div className="cart-contents">
                        {(!localStorage.getItem('cart')) ?
                            <div className="empty-cart">Your cart is empty!
                                Perhaps we could interest you in some CATEGORIES?</div> :
                            <div className="full-cart">
                                <div className="full-cart-header"> DISPLAY ITEM, QTY, TOTAL</div>
                                <div className="cart-items"> DISPLAY ITEM PICTURE AND NAME, VALUE, TOTAL PRICE. X TO SHOW A REMOVAL OF ITEM </div>
                            </div>}
                    </div>
                </div>
                <div className="cart-checkout">cart checkout</div>
            </div>
        </div>
    )
}

export default Cart;
