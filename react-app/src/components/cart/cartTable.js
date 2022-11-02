import "./cart.css"
import { useEffect, useState } from "react"



const CartTable = ({cartState, setCartState, itemQty, setQtyState}) => {
    // const cart = JSON.parse(cartState)
    // const itemQuantity = JSON.parse(qtyState)
    // const cart = JSON.parse(localStorage.getItem('cart'))
    // const itemQuantity = JSON.parse(localStorage.getItem('itemQuantity'))
    // const [qtyState, setQtyState] = useState(localStorage.getItem('itemQuantity') || '')
    // const [cartState, setCartState] = useState(localStorage.getItem('cart') || '')

    const xIcon = <i class="fa-solid fa-x"></i>;

    const handleQty = (qty, itemId) => {
        if (parseInt(qty) <= 0 || isNaN(parseInt(qty))) {
            qty = 1
            alert("Quantity must be at least 1. If you wish to remove this item, click the X at the end of the row.")
        }
        // itemQuantity[itemId] = +qty
        setQtyState({...itemQty, [itemId]:+qty})
        // localStorage.setItem('itemQty', JSON.stringify(itemQty))
    }

    const removeFromCart = itemId => {
        let res = window.confirm('Are you sure you want to remove this?')
        if (res) {

            let newCartState = Object.assign({}, cartState)
            delete newCartState[itemId]
            let newQtyState = Object.assign({}, itemQty)
            delete newQtyState[itemId]
            // console.log(newCartState)
            setCartState(newCartState)
            setQtyState(newQtyState)

            // setQtyState(state => Object.keys(itemQty)
            // .filter(key => key !== itemId)
            // .reduce((obj, key) => {
            //   obj[key] = itemQty[key];
            //   return obj;
            // }, {}))
            // delete cartState[itemId]
            // delete itemQty[itemId]

            // localStorage.setItem('cart', JSON.stringify(cartState))
            // localStorage.setItem('itemQty', JSON.stringify(itemQty))
            // setCartState(localStorage.getItem('cart'))
        }
    }

    useEffect(() =>{
        // console.log("this is the cart state", cartState)
        // console.log(qtyState)
    },[])

    return (
        <tbody className="table-body">
            {cartState&& Object.entries(cartState).map((item, i) => {
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
                                    value={itemQty[item[1][0].id]}
                                    onChange={(e) => handleQty(e.target.value, item[1][0].id)}
                                />
                            </form>
                        </td>
                        <td className="cart-item-total">
                            ${item[1][0].price * itemQty[item[1][0].id]}
                        </td>
                        <td className="remove-cart-item">
                            <button
                                className="remove-item"
                                onClick={() => removeFromCart(item[1][0].id)} >
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
