import React from "react";
import Admin from './Admin';
import Nav from './Nav';
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookTable from "../feature/books/BooksTable";
import OrderTable from "../feature/orders/ordersTable";
import LendingTable from "../feature/lendings/lendingTable";
import StoreBooks from "../feature/books/StoreBooks";
import LibraryBooks from "../feature/books/LibraryBooks";
import Cart from "./cart/Cart";
import Payment from "./payment/Payment";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// import "./App.css"

import Login from "./user/Login";
// import Register from "./components/user/Register";
import Register from "./user/Register"
import Landingpage from "./landingpage/Landingpage";

const Home = () => {
    return ( 
        
             <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/admin' element={<Admin></Admin>}>Admin</Route>
          <Route path='/home' element={<HomePage></HomePage>}>Home</Route>
          <Route path='/books' element={<BookTable></BookTable>}>Books</Route>
          <Route path='/store' element={<StoreBooks></StoreBooks>}>Books</Route>
          <Route path='/library' element={<LibraryBooks></LibraryBooks>}>Books</Route>
          <Route path='/books' element={<BookTable></BookTable>}>Books</Route>
          <Route path='/orders' element={<OrderTable></OrderTable>}>Orders</Route>
          <Route path='/lendings' element={<LendingTable></LendingTable>}>Lendings</Route>
          <Route path='/cart' element={<Cart></Cart>}>Admin</Route>
          <Route path='/payment' element={<Payment></Payment>}>Admin</Route>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/" element={<Landingpage />} />     
          
       



          {/* <Route path='/lendings' element={<LendingTable></LendingTable>}>Lending</Route> */}
          {/* <Route path='/myaccount' element={<MyAccountTable></MyAccountTable>}>Books</Route> */}

        </Routes>
      
      </BrowserRouter>
        
     );
}
 
export default Home;