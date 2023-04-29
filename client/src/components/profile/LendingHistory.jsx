function LendingHistory({lendings}) {
    // console.log(lendings);
    return (
        <div className="lending-history-container">
            <h2 className="lending-history-header">Lendings History</h2>
            <table className="lending-history-table">
                <thead>
                    <tr>
                        <td>Book ID</td>
                        <td>Title</td>
                        <td>Status</td>
                    </tr>

                </thead>
                <tbody>
                    {lendings.map((lending=> 
                        <tr key={lending.id}>
                            <td>{lending.book_id}</td>
                            <td>{lending.book.title}</td>
                            <td>{lending.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LendingHistory;