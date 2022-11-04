import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CartTable from "../cart/cartTable";
import "./orders.css"

const OrderById = () => {
    const {orderId} = useParams()
    const items = useSelector(state => state.items)
    const purchasesItems = useSelector(state => state.purchasesItems)

    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };
    const dollarFormatter = new Intl.NumberFormat("en-US", formatting_options);

    return (
        <div className="id-order-outer">
            <div className="id-order-header">ORDER NUMBER: #{orderId}</div>
            <div className="id-order-container">
            <tbody className="table-body">
        {Object.entries(purchasesItems).map((purchaseItem, i) => {
            return (
                <tr className="cart-item" key={i}>
                    <td className="cart-item-image">
                        {/* {item[1][0].images[0]} */}
                    </td>
                    <td className="cart-item-name">
                        {items[purchaseItem[1].item_id].item_name}
                    </td>
                    <td className="cart-item-qty">

                    </td>
                    <td className="cart-item-total">
                        {/* {dollarFormatter.format(item[1][0].price * itemQty[item[1][0].id])} */}
                    </td>
                </tr>
            )
        })}
    </tbody>
            </div>
        </div>
    )
}

export default OrderById;
