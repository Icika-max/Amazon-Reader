import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BookTable from './feature/books/BooksTable';
import OrderTable from './feature/orders/ordersTable';
import LendingTable from './feature/lendings/lendingTable';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className='admin-header'>Admin Dashboard</h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/books' element={<BookTable />} />
          <Route path='/orders' element={<OrderTable />} />
          <Route path='/lendings' element={<LendingTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
