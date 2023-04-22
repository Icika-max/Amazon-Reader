import React from "react";
import { Link } from 'react-router-dom';
// import BookTable from "../feature/books/BooksTable";
// import OrderTable from "../feature/orders/ordersTable";
// import LendingTable from "../feature/lendings/lendingTable";


function Navbar() {

  return (
    <div className="nav">
        <ul className="list">
            <li>
                <Link to = '/books'>Books</Link>
                <Link to = '/orders'>Orders</Link> 
                <Link to = '/lendings'>Lendings</Link>
                {/* <Link to = '/myaccount'>My account</Link> */}
            </li>
        </ul>
    </div>
  )
}

export default Navbar