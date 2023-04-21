function ViewPayment({orders, onCompletePurchase}) {
    console.log(orders);
    let totalSum = 0;

    orders.forEach((order) => {
        totalSum += parseFloat(order.price);
    });
    
    return (
        <div className="payments-main" >
            <div className="order-image-container" >
                {orders.map((order)=>
                    <div key={order.id}>
                        <img src={order.book.image_url} alt="Image Loading..."/>
                        <p>{order.book.title}</p>
                        <p>{order.price}</p>
                        
                    </div>                
                )}
            </div>
            <div className="payment-details">
                <h2>PAYMENT DETAILS</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="number" placeholder="Card Number" />
                    <input type="text" placeholder="Address"/>
                    <p>Total Payable {totalSum.toFixed(2)}</p>
                    
                </form>
                <button onClick={()=>onCompletePurchase()}>Complete Purchase</button>
            </div>
        </div>

    )
}

export default ViewPayment;