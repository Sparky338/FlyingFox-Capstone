import "./cart.css"

const CartTable = ({cartState, setCartState, itemQty, setQtyState}) => {

    const xIcon = <i class="fa-solid fa-x"></i>;

    const handleQty = (qty, itemId) => {
        if (parseInt(qty) <= 0 || isNaN(parseInt(qty))) {
            qty = 1
            alert("Quantity must be at least 1. If you wish to remove this item, click the X at the end of the row.")
        }
        setQtyState({...itemQty, [itemId]:+qty})
    }

    const removeFromCart = itemId => {
        let res = window.confirm('Are you sure you want to remove this?')
        if (res) {

            let newCartState = Object.assign({}, cartState)
            delete newCartState[itemId]

            let newQtyState = Object.assign({}, itemQty)
            delete newQtyState[itemId]
            
            setCartState(newCartState)
            setQtyState(newQtyState)
        }
    }

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
                            ${item[1][0].price * itemQty[item[1][0].id]}.00
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
