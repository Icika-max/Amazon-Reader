import { useEffect, useState } from "react";
import PurchaseHistory from "./PurchaseHistory";
import LendingHistory from "./LendingHistory";
import { Link } from 'react-router-dom';
import Nav from "../Nav";

function Account() {
    
    const [purchases, setPurchases] = useState([])
    const [lendings, setLendings] = useState([])
    const userString = localStorage.getItem('user');
    const [role, id] = userString.split('|');
    const uid = parseInt(id)

    // const uid = parseInt(localStorage.getItem('uid'));

    useEffect(() =>{
        fetch(`http://localhost:3000/user_orders/${uid}`)
        .then(res=>res.json())
        .then(data=>setPurchases(data))


        fetch(`http://localhost:3000/user_lendings/${uid}`)
        .then(res=>res.json())
        .then(data=>setLendings(data))
    },[])
    
    return (
        <div>
            <Nav/>
            <div>
                <h2>My Account</h2>
                <PurchaseHistory purchases={purchases}/>
                <LendingHistory lendings={lendings}/>
            </div>
        </div>
    )
}

export default Account;


