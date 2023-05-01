import React from "react";
import Admin from './Admin';
// import Nav from './Nav';
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookTable from "../feature/books/BooksTable";
import OrderTable from "../feature/orders/ordersTable";
import LendingTable from "../feature/lendings/lendingTable";
import StoreBooks from "../feature/books/StoreBooks";
import LibraryBooks from "../feature/books/LibraryBooks";
import Cart from "./cart/Cart";
import Payment from "./payment/Payment";
import LandingPage from "./landingpage/Landingpage";
import Register from "./user/Register";
import Login from "./user/Login";
import Account from "./profile/Account";
import PurchaseHistory from "./profile/PurchaseHistory";
import LendingHistory from "./profile/LendingHistory";

const Home = () => {
    return ( 
        
      <BrowserRouter>
        {/* <Nav></Nav> */}
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
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login'element={<Login/>}></Route>
          <Route path='/my-account' element={<Account />}></Route>
          <Route path='/purchases' element={<PurchaseHistory/>}></Route>
          <Route path='/lendings' element={<LendingHistory/>}></Route>
          <Route path='/' element={<LandingPage/>}></Route>
        </Routes>
      
      </BrowserRouter>
        
     );
}
 
export default Home;