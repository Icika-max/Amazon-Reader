import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AccountPage from './components/account'
import Payment from './components/payment'

function App() {

  return (
    <div className="App">
      {/* <h2>Welcome</h2> */}
      <Router>
        <Routes>
          <Route exact path="/account" element={<AccountPage />} />
          <Route exact path="/payment" element={<Payment />} />
        </Routes>
      </Router>

      
    </div>
  )
}

export default App
