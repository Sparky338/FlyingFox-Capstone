import "./cart.css"

const CartTable = () => {
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
}

export default CartTable;
