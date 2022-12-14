import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deletePurchase, getAllPurchases } from "../../store/purchases";
import { clearPurchaseItemsAction } from "../../store/purchasesItems";
import { clearReviewAction, getAllReviews } from "../../store/reviews";
import "./orders.css"

const Orders = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const purchases = useSelector(state => state.purchases);
    const items = useSelector(state => state.items);

    const handleCancel = async (purchaseId) => {
        let res = window.confirm("Are you sure you want to cancel this order?")
        if (res) {
            await dispatch(deletePurchase(purchaseId))
            await dispatch(clearReviewAction())
            await dispatch(clearPurchaseItemsAction())
            await dispatch(getAllReviews())
            history.push("/orders")
        }
    }

    useEffect(() => {
        dispatch(getAllPurchases())
        dispatch(getAllReviews());
    }, [dispatch])

    return (
        <div className="orders-outer">
            <div className="orders-header">MY ORDERS</div>
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
                                        <td className="order-item-summary">
                                            {purchase[1].purchases_items.map((el, r) => <tr>{items[el.item_id].item_name}</tr>)}
                                        </td>
                                        <td className="order-details">
                                            <Link to={`/orders/${purchase[1].id}`} className="order-details-link" >Order Details</Link>
                                        </td>
                                        <td className="cancel-order">
                                            <button className="cancel-order-button" onClick={() => handleCancel(purchase[1].id)} >Cancel Order</button>
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
