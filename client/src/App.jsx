import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BookTable from './feature/books/BooksTable'
import OrderTable from './feature/orders/ordersTable'
import LendingTable from './feature/lendings/lendingTable'
// import MyAccountTable from './feature/myAccount/myAccountTable'
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='admin-header'>Admin Dashboard</h1>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/books' element={<BookTable></BookTable>}>Books</Route>
          <Route path='/orders' element={<OrderTable></OrderTable>}>Orders</Route>
          <Route path='/lendings' element={<LendingTable></LendingTable>}>Lending</Route>
          {/* <Route path='/myaccount' element={<MyAccountTable></MyAccountTable>}>Books</Route> */}

        </Routes>
      
      </BrowserRouter>
     {/* <BookTable></BookTable> */}
    </div>
  )
}

export default App
