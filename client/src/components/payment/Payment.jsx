import { useEffect, useState } from "react";
import './Payment.css'
import ViewPayment from "./ViewPayment";

function Payment() {
    const [orders, setOrders] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/carts')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    }, [])
    
    const handlePurchase = () => {
        orders.map((order) => {
            if (order.price > 0) {
                fetch('http://localhost:3000/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        book_id: order.book_id,
                        user_id: order.user_id,
                        status: 'pending'
                    })

                })
                .then(res=>{
                    if (res.ok) {
                        alert('Order Posted for approval')
                    }
                    return res.json();
                })
                .then(data=>console.log(data))
                .catch(error=>console.log(error))
            } else {
                fetch('http://localhost:3000/lendings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        book_id: order.book_id,
                        user_id: order.user_id,
                        status: 'pending'
                    })
                })
                .then(res=>{
                    if (res.ok) {
                        alert('Order Posted for approval');
                    }
                    return res.json();
                })
                .then(data=>console.log(data))
                .catch(error=>console.log(error))
            }
           
        fetch(`http://localhost:3000/carts/${order.id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to delete item from the backend.')
            }
        })
        .catch(err => {
            console.error(err)
        })
        })
        
    }
    
    return (
        <ViewPayment orders={orders} onCompletePurchase={handlePurchase} />
    )
}

export default Payment;