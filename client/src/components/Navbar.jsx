import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
        <ul>
            <li>
                <Link to = '/books'>Books</Link>
                <Link to = '/orders'>Orders</Link> 
                <Link to = '/lendings'>Lendings</Link>
                <Link to = '/myaccount'>My account</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar