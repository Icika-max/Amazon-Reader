import { useEffect, useState } from "react";
import PurchaseHistory from "./PurchaseHistory";
import LendingHistory from "./LendingHistory";
import { Link } from 'react-router-dom';
import Nav from "../Nav";

function Account() {
    
    const [purchases, setPurchases] = useState([])
    const [lendings, setLendings] = useState([])
    const uid = parseInt(localStorage.getItem('uid'));

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


// import { useEffect, useState } from "react";
// import PurchaseHistory from "./PurchaseHistory";
// import LendingHistory from "./LendingHistory";
// import { Link } from 'react-router-dom';

// function Account() {
//   const [purchases, setPurchases] = useState([]);
//   const [lendings, setLendings] = useState([]);
//   const [historyType, setHistoryType] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     Promise.all([
// //       fetch('http://localhost:3000/orders').then(res => res.json()),
// //       fetch('http://localhost:3000/lendings').then(res => res.json())
// //     ])
// //       .then(([purchasesData, lendingsData]) => {
// //         setPurchases(purchasesData);
// //         setLendings(lendingsData);
// //       })
// //       .catch(error => {
// //         setError(error);
// //       })
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   }, []);

//     useEffect(() =>{
//         fetch('http://localhost:3000/orders')
//         .then(res=>res.json())
//         .then(data=>setPurchases(data))


//         fetch('http://localhost:3000/lendings')
//         .then(res=>res.json())
//         .then(data=>setLendings(data))
//     },[])

//   const handlePurchasesClick = () => {
//     setHistoryType('purchases');
//   };

//   const handleLendingsClick = () => {
//     setHistoryType('lendings');
//   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

//   return (
//     <div>
//       <h2>My Account</h2>
//       <Link to="/purchases">
//         <button onClick={handlePurchasesClick()}>View Purchases</button>
//       </Link>
//       <Link to="/lendings">
//         <button onClick={handleLendingsClick()}>View Lendings</button>
//       </Link>
//       {historyType === 'purchases' && (
//         <PurchaseHistory purchases={purchases} />
//       )}
//       {historyType === 'lendings' && (
//         <LendingHistory lendings={lendings} />
//       )}
//     </div>
//   );
// }

// export default Account;
