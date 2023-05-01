function PurchaseHistory({purchases}) {
    console.log(purchases);
    return (
        <div className="purchase-history-container">
            <h2 className="purchase-history-header">Purchases History</h2>
            <table className="purchase-history-table">
                <thead>
                    <tr>
                        <td>Book ID</td>
                        <td>Title</td>
                        <td>Status</td>
                    </tr>

                </thead>
                <tbody>
                    {purchases.map((purchase=> 
                        <tr key={purchase.id}>
                            <td>{purchase.book_id}</td>
                            <td>{purchase.book.title}</td>
                            <td>{purchase.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PurchaseHistory;