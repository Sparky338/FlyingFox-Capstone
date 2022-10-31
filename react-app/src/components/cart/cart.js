import { useEffect, useState } from "react";
import "./cart.css"

const Cart = () => {
    // Must be first to render an empty cart
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', "{}");
    }

    // const cartLength = JSON.parse(localStorage.getItem('cart')).length
    const cart = JSON.parse(localStorage.getItem('cart'))
    const cartObjLength = Object.keys(cart).length
    const [cartState, setCartState] = useState(localStorage.getItem('cart') || '')


    const removeFromCart = itemId => (e) => {
        let res = window.confirm('Are you sure you want to remove this?')
        if (res) {
            delete cart[itemId]
            localStorage.setItem('cart', JSON.stringify(cart))
            setCartState(localStorage.getItem('cart'))
        }
    }

    const xIcon = <i class="fa-solid fa-x"></i>;



    return (
        <div className="cart-outer">
            <div className="cart-container">
                <div className="cart-and-cart-contents-left">
                    <div className="cart-header">
                        <div className="your-cart">Your Cart</div>
                        <div className="item-value">
                            {!localStorage.getItem('cart') ?
                                <div className="item-counter">(0 items) </div> :
                                (cartObjLength === 1 ?
                                    <div className="item-counter">(1 item)</div> :
                                    <div className="item-counter">({cartObjLength} items)</div>)}
                        </div>
                    </div>
                    <div className="cart-contents">
                        {(cartObjLength === 0) ?
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
                                <tbody className="table-body">
                                    {Object.entries(cart).map((item, i) => {
                                        return (
                                            <tr className="cart-item" key={i}>
                                                <td className="cart-item-image">
                                                    {item[1][0].images[0]}
                                                </td>
                                                <td className="cart-item-name">
                                                    {item[1][0].item_name}
                                                </td>
                                                <td className="cart-item-qty"></td>
                                                <td className="cart-item-total">
                                                    ${item[1][0].price} {/*times qty*/}
                                                </td>
                                                <td className="remove-cart-item">
                                                    <button
                                                        className="remove-item"
                                                        // id={item}
                                                        // itemId={item[1][0].id}
                                                        onClick={removeFromCart(item[1][0].id)} >
                                                        {xIcon}
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
                <div className="cart-checkout">cart checkout</div>
            </div>
        </div>
    )
}

export default Cart;
