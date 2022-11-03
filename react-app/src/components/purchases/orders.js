import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPurchases } from "../../store/purchases";
import { getAllPurchasesItems } from "../../store/purchasesItems";
import "./orders.css"

const Orders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPurchases())
        dispatch(getAllPurchasesItems())
    }, [dispatch])

    return (
        <div className="orders-outer">
            <div className="orders-header">My Orders</div>
            <div className="orders-container">
                <table className="full-orders-table" border="0" cellspacing="0">
                    <thead className="table-header">
                        <tr>
                            <th className="table-header-order" width="15%">Order #</th>
                            <th className="table-header-item-summary">Item Summary</th>
                            <th className="table-header-status" width="15%">Status</th>
                            <th width="10%">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {/* {cartState&& Object.entries(cartState).map((item, i) => { */}
                        {/* return ( */}
                        <tr className="orders" >
                            <td className="order-number">

                            </td>
                            <td className="order-item-names">

                            </td>
                            <td className="order-status">

                            </td>
                            <td className="order-details">
                                <Link to='/orders/:id' className="order-details-link">Order Details</Link>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders;
