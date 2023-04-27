import React from "react";
// import BookTable from "../feature/books/BooksTable";
// import OrderTable from "../feature/orders/ordersTable";
// import LendingTable from "../feature/lendings/lendingTable";
import Navbar from "./Navbar";
import Nav from './Nav';




const Admin = () => {
    return (
        <>
        <Nav></Nav>
        <div>
            <h1 className='admin-header'>Admin Dashboard</h1>
            
           

            <Navbar></Navbar>

            
    {/* <BookTable></BookTable>
    <OrderTable></OrderTable>
    <LendingTable></LendingTable> */}
      
    

        </div>
        </>
      );
}
 
export default Admin;