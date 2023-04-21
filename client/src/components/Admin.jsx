import React from "react";
import BookTable from "../feature/books/BooksTable";
import OrderTable from "../feature/orders/ordersTable";
import LendingTable from "../feature/lendings/lendingTable";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Admin = () => {
    return (
        <div>
            <h1 className='admin-header'>Admin Dashboard</h1>
    <BookTable></BookTable>
    <OrderTable></OrderTable>
    <LendingTable></LendingTable>
      
    

        </div>
      );
}
 
export default Admin;