import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="admin-nav">
      <ul className="admin-list">
        <li>
          <Link to='/books' className="admin-link">Books</Link>
          <Link to='/orders' className="admin-link">Orders</Link> 
          <Link to='/lendings' className="admin-link">Lendings</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
