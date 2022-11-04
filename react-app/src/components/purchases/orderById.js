import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import "./orders.css"

const OrderById = () => {
    const { orderId } = useParams()
    const items = useSelector(state => state.items)
    const purchases = useSelector(state => state.purchases)
    const purchasesItems = useSelector(state => state.purchasesItems)

    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };
    const dollarFormatter = new Intl.NumberFormat("en-US", formatting_options);

    const filterdPurchasesItems = Object.entries(purchasesItems).filter(pi => pi[1].purchase_id === +orderId)
    const reviewIcon = <i class="fa-regular fa-message"></i>

    return (
        <div className="id-order-outer">
            <div className="id-order-header">ORDER NUMBER: #{orderId}</div>
            <div className="id-order-container">
                <table className="full-id-order-table" border="0" cellSpacing="0">
                    <thead className="table-header">
                        <tr>
                            <th width="10%">&nbsp;</th>
                            <th className="table-header-item">ITEM</th>
                            <th className="table-header-qty" width="10%">QTY</th>
                            <th className="table-header-total" width="15%">TOTAL</th>
                            <th width="5%">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                    {filterdPurchasesItems.map(
                        (purchaseItem, i) => {
                            return (
                                <tr className="id-order-item" key={i}>
                                    <td className="id-order-item-image">
                                        {items[purchaseItem[1].item_id].images[0]}

                                    </td>
                                    <td className="id-order-item-name">
                                        {items[purchaseItem[1].item_id].item_name}
                                    </td>
                                    <td className="id-order-item-qty">
                                        {purchaseItem[1].quantity}
                                    </td>
                                    <td className="id-order-item-total">
                                        {dollarFormatter.format(items[purchaseItem[1].id].price * purchaseItem[1].quantity)}
                                    </td>
                                    <td className="id-order-item-review">
                                        <Link to={`items/${purchaseItem[1].item_id}/review`}>{reviewIcon}</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot className="id-order-table-footer">
                        <tr className="id-order-table-footer-row">
                            <td></td>
                            <td></td>
                            <td className="id-order-total">ORDER TOTAL:</td>
                            <td className="id-order-total-price">{dollarFormatter.format(purchases[orderId].price)}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default OrderById;
