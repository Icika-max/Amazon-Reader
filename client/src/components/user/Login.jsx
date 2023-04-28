import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"
export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState('');
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate()
  // const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(res=>{
      if (res.ok) {
        navigate('/home');
        setIsLoggedIn(true);
        // setMessage(res.json());
      }
      return res.json();
    })
    .then(data=> localStorage.setItem('uid', data.id.toString()))
    .catch(error=>{
      setMessage("");
      setError(error);
      setIsLoggingIn(false);
    })
  };
  return (
      <div className="auth-form-container">
        <h2>Login</h2>
     
        <form className="login-forrm" onSubmit={handleLogin}>
        
            <label htmlFor="usernameOrEmail">Username</label>
                
                <input
                  type="text"
                  placeholder="ENTER YOUR USERNAME OR EMAIL"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="ENTER PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
              
                <button type="submit" disabled={isLoggingIn}>
                  {isLoggingIn ? "LoggingIn..." : "LOGIN"}
                </button>
                
                <div>
                  {message && <p>{message}</p>}
                  {error && <p>{error}</p>}
                </div>
                
                <p>
                  Not a member?{" "}
                  <NavLink
                    to="/register"
                    className="link"
                    style={{ color: "red" }}
                  >
                    Register
                  </NavLink>
                </p>
            
           
        </form>
      </div>
 
  
  );
}