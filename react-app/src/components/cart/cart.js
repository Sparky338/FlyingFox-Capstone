const Cart = () => {

    return (
        <div className="cart-outer">
            <div className="cart-container">
                <div className="cart-and-cart-contents">
                    <div className="cart-header">
                        <div className="your-cart">Your Cart</div>
                        <div className="item-value">(# item)</div>
                    </div>
                    <div className="cart-contents">
                        {/* ternary checking if the cart is empty ?
                        <div className="empty-cart">Your cart is empty!
                        Perhaps we could interest you in some CATEGORIES?</div> :
                        <div className="full-cart">
                            <div className="full-cart-header"> DISPLAY ITEM, QTY, TOTAL</div>
                            <div className="cart-items"> DISPLAY ITEM PICTURE AND NAME, VALUE, TOTAL PRICE. X TO SHOW A REMOVAL OF ITEM </div>
                        </div>*/}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;
