import { useEffect, useState } from "react";
import "./cart.css"

const Cart = () => {
    // Must be first to render an empty cart
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', "{}");
    }
    if (!localStorage.getItem('itemQuantity')) {
        localStorage.setItem('itemQuantity', "{}");
    }

    // const cartLength = JSON.parse(localStorage.getItem('cart')).length
    const cart = JSON.parse(localStorage.getItem('cart'))
    const itemQuantity = JSON.parse(localStorage.getItem('itemQuantity'))
    const cartObjLength = Object.keys(cart).length
    const itemQty= JSON.parse(localStorage.getItem('itemQuantity'))

    const [cartState, setCartState] = useState(localStorage.getItem('cart') || '')
    const [qtyState, setQtyState] = useState(localStorage.getItem('itemQuantity') || '')

    const handleQty = (qty, itemId) => {
        if (parseInt(qty) <= 0 || isNaN(parseInt(qty))) {
            qty = 1
            alert("Quantity must be at least 1. If you wish to remove this item, click the X at the end of the row.")
        }
        itemQuantity[itemId] = qty
        localStorage.setItem('itemQuantity', JSON.stringify(itemQuantity))
        setQtyState(qty)
    }

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
                                                <td className="cart-item-qty">
                                                    <form className="qty-form">
                                                        {/* <input
                                                            type="button"
                                                            className="quantity-form-minus"
                                                            value="-"
                                                            // min="0"
                                                            // onChange={(e) => handleQty(e.target.value)}
                                                        /> */}
                                                        <input
                                                            type="number"
                                                            className="quantity-form-value"
                                                            min="1"
                                                            value={qtyState}
                                                            onChange={(e) => handleQty(e.target.value, item[1][0].id)}
                                                        />
                                                        {/* <input
                                                            type="button"
                                                            className="quantity-form-plus"
                                                            value="+"
                                                            // min="0"
                                                            // onChange={(e) => handleQty(e.target.value)}
                                                        /> */}
                                                    </form>
                                                </td>
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
