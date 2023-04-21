// import './App.css'
import Cart from './cart/Cart'
import Payment from './payment/Payment'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Cart />}></Route>
        <Route path='/payment' element={<Payment />} ></Route>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
