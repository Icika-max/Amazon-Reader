import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"


export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
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
        setMessage(res.json)
      }
    })
    .catch(error=>{
      setMessage("");
      setError(error);
      console.log(error);
      setIsLoggingIn(false);
    })
  };


  return (
    <center className="mt-5 ">
      <div className="bckg">
        
        <div className="img">
        <img src="background-2.jpg"/>
        </div>

      <div className="sign_in">
        <form onSubmit={handleLogin}>
          
          <div className="card " style={{ width: "10rem" ,height:"53vh" }}>
            <div className="card-body ">
            <label htmlFor="usernameOrEmail">Username</label>
                <br />
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
              <br />
              <center>
                <button type="submit" disabled={isLoggingIn}>
                  {isLoggingIn ? "LoggingIn..." : "LOGIN"}
                </button>
                <br />
                <div>
                  {message && <p>{message}</p>}
                  {error && <p>{error}</p>}
                </div>
                <br />

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
        
              </center>
            </div>
          </div>
        </form>
      </div>
      </div>
    </center>
  );
}
