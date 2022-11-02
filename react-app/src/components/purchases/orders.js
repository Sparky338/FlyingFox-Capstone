const Orders = () => {
    return (
        <div className="orders-outer">
            <div className="orders-header">My Orders</div>
            <div className="orders-container">
                <table className="full-cart-table" border="0" cellspacing="0">
                    <thead className="table-header">
                        <tr>
                            <th className="table-header-order" width="10%">Order #</th>
                            <th className="table-header-item-summary">Item Summary</th>
                            <th className="table-header-status" width="15%">Status</th>
                            <th width="10%">&nbsp;</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Orders;
