import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPurchases } from "../../store/purchases";
import { getAllPurchasesItems } from "../../store/purchasesItems";
import "./orders.css"

const Orders = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchases);
    const purchasesItems = useSelector(state => state.purchasesItems);

    useEffect(() => {
        dispatch(getAllPurchases())
        dispatch(getAllPurchasesItems())
    }, [dispatch])

    return (
        <div className="orders-outer">
            <div className="orders-header">My Orders</div>
            {(Object.entries(purchases).length === 0) ?
                <div className="empty-orders"> You haven't bought anything yet!
                    Please buy something first.</div> :
                <div className="orders-container">
                    <table className="full-orders-table" border="0" cellSpacing="0">
                        <thead className="table-header">
                            <tr>
                                <th className="table-header-order" width="10%">Order #</th>
                                <th className="table-header-item-summary">Item Summary</th>
                                <th width="15%">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {Object.entries(purchases).map((purchase, i) => {
                                return (
                                    <tr className="orders" key={i}>
                                        <td className="order-number">
                                            {purchase[1].id}
                                        </td>
                                        <td className="order-item-names" key={i}>
                                            {/* {console.log(purchItem[1].item_id)} */}
                                            {/* {purchasesItems[3].item_id} */}
                                        </td>
                                        {/* {Object.entries(purchasesItems).filter(
                                        purchaseItem => purchaseItem[1].purchase_id === purchase[1].id).map(
                                            (purchItem, i) => {
                                                <td className="order-item-names" key={i}>
                                                    {console.log(purchItem[1].item_id)}
                                                    {purchItem[1].item_id}test
                                                </td>
                                            }
                                        )} */}
                                        <td className="order-details">
                                            <Link to={`/orders/${purchase[1].id}`} className="order-details-link">Order Details</Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Orders;
