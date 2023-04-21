import React from "react";
import Admin from './Admin';
import Nav from './Nav';
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
    return ( 
        <div>
             <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/admin' element={<Admin></Admin>}>Admin</Route>
          <Route path='/home' element={<HomePage></HomePage>}>Home</Route>
          {/* <Route path='/lendings' element={<LendingTable></LendingTable>}>Lending</Route> */}
          {/* <Route path='/myaccount' element={<MyAccountTable></MyAccountTable>}>Books</Route> */}

        </Routes>
      
      </BrowserRouter>
        </div>
     );
}
 
export default Home;