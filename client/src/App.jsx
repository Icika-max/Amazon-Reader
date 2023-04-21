// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// import "./App.css"

import Login from './components/user/Login'
import Register from "./components/user/Register";
import Landingpage from "./components/landingpage/Landingpage";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/" element={<Landingpage />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
