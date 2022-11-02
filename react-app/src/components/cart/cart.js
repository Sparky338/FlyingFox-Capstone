import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import CartTable from "./cartTable";
import "./cart.css"

const Cart = () => {
    // Must be first to render an empty cart
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', "{}");
    }
    if (!localStorage.getItem('itemQty')) {
        localStorage.setItem('itemQty', "{}");
    }

    const [cartState, setCartState] = useState(JSON.parse(localStorage.getItem('cart')) || '')
    const [itemQty, setQtyState] = useState(JSON.parse(localStorage.getItem('itemQty')) || '')
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState))
        localStorage.setItem('itemQty', JSON.stringify(itemQty))
    }, [itemQty, cartState])

    return (
        <div className="cart-outer">
            <div className="cart-container">
                <div className="cart-and-cart-contents-left">
                    <div className="cart-header">
                        <div className="your-cart">Your Cart</div>
                        <div className="item-value">
                            {!cartState ?
                                <div className="item-counter">(0 items) </div> :
                                (Object.values(itemQty)
                                    .reduce((sum, x)=> sum += x, 0) === 1 ?
                                    <div className="item-counter">(1 item)</div> :
                                    <div className="item-counter">({Object.values(itemQty)
                                    .reduce((sum, x)=> sum += x, 0)} items)</div>)}
                        </div>
                    </div>
                    <div className="cart-contents">
                        {(Object.entries(itemQty).length === 0) ?
                            <div className="empty-cart">Your cart is empty!
                                Perhaps we could interest you in some CATEGORIES?</div> :
                            <table className="full-cart-table" border="0" cellspacing="0">
                                <thead className="table-header">
                                    <tr>
                                        <th width="10%">&nbsp;</th>
                                        <th className="table-header-item">ITEM</th>
                                        <th className="table-header-qty" width="10%">QTY</th>
                                        <th className="table-header-total" width="15%">TOTAL</th>
                                        <th width="3%">&nbsp;</th>
                                    </tr>
                                </thead>
                                <CartTable
                                    cartState={cartState}
                                    setCartState={setCartState}
                                    itemQty={itemQty}
                                    setQtyState={setQtyState}
                                />
                            </table>
                        }
                    </div>
                </div>
                <div className="cart-checkout">
                    <Checkout
                        cartState={cartState}
                        setCartState={setCartState}
                        itemQty={itemQty}
                        setQtyState={setQtyState}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart;
