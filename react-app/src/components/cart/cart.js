import { useEffect, useState } from "react";
import "./cart.css"

const Cart = () => {
    // Must be first to render an empty cart
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', "{}");
    }

    const cartLength = JSON.parse(localStorage.getItem('cart')).length
    const cart = JSON.parse(localStorage.getItem('cart'))
    const [cartState, setCartState] = useState(localStorage.getItem('cart') || '')


    const removeFromCart = (e) => {
        let res = window.confirm('Are you sure you want to remove this?')
        if (res) {
            // cart.splice(e.currentTarget.id, 1)
            console.log(cart)
            delete cart.item
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
                                <div>(0 Items) </div> :
                                (cartLength === 1 ?
                                    <div>(1 Item)</div> :
                                    <div>({cartLength} Items)</div>)}
                        </div>
                    </div>
                    <div className="cart-contents">
                        {(cartLength === 0) ?
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
                                                    {/* {console.log(item, i)} */}
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
                                                        id={item} //want the local storage cart arr number
                                                        onClick={removeFromCart} >
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
