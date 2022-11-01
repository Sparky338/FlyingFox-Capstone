import "./cart.css"
import { useState } from "react"


const CartTable = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const [qtyState, setQtyState] = useState(localStorage.getItem('itemQuantity') || '')
    const [cartState, setCartState] = useState(localStorage.getItem('cart') || '')
    const itemQuantity = JSON.parse(localStorage.getItem('itemQuantity'))

    const xIcon = <i class="fa-solid fa-x"></i>;

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

    return (
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
                                <input
                                    type="number"
                                    className="quantity-form-value"
                                    min="1"
                                    value={qtyState}
                                    onChange={(e) => handleQty(e.target.value, item[1][0].id)}
                                />
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
    )
}

export default CartTable;