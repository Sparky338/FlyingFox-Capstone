import { Link } from "react-router-dom";
import "./cart.css"

const CartTable = ({cartState, setCartState, itemQty, setQtyState}) => {
    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };
    const dollarFormatter = new Intl.NumberFormat("en-US", formatting_options);

    const xIcon = <i className="fa-solid fa-x"></i>;

    const handleQty = (qty, itemId) => {
        if (parseInt(qty) <= 0 || isNaN(parseInt(qty))) {
            qty = 1
            alert("Quantity must be at least 1. If you wish to remove this item, click the X at the end of the row.")
        }
        if (parseInt(qty) > 10) {
            qty = 10
            alert("Quantity must be less than 10. After all, they are custom made.")
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
                        <td className="cart-item-image-container">
                            <img
                                className="cart-item-image"
                                src={item[1][0].images[0].image_url}
                                alt={`${item[1][0].item_name}`}
                            />
                        </td>
                        <td className="cart-item-name">
                        <Link to={`/items/${item[1][0].id}`} className="cart-item-name-link" >
                            {item[1][0].item_name}
                        </Link>
                        </td>
                        <td className="cart-item-qty">
                            <form className="qty-form">
                                <input
                                    type="number"
                                    className="quantity-form-value"
                                    min="1"
                                    max="10"
                                    value={itemQty[item[1][0].id]}
                                    onChange={(e) => handleQty(e.target.value, item[1][0].id)}
                                />
                            </form>
                        </td>
                        <td className="cart-item-total">
                            {dollarFormatter.format(item[1][0].price * itemQty[item[1][0].id])}
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
