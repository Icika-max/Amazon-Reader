import { useState, useEffect } from "react";
import ViewCart from "./ViewCart";
import './Cart.css'

function Cart() {
    const [carts, setCart] = useState([])

    useEffect(() =>{
        fetch('https://amazon-reader.onrender.com/carts')
        .then(res=>res.json())
        .then(data=>setCart(data))
    }, [])

    const handleRemoveItem = (itemId) => {
        setCart(prevState => prevState.filter(item => item.id !== itemId))
    
        fetch(`https://amazon-reader.onrender.com/carts/${itemId}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to delete item from the backend.')
            }
        })
        .catch(err => {
            console.error(err)
            setCart(prevState => [...prevState, carts.find(item => item.id === itemId)])
        })
    }
    

    return (
        <ViewCart carts={carts} onRemoveItem={handleRemoveItem} />
    )
}

export default Cart;