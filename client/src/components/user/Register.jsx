import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [cachedResponse, setCachedResponse] = useState({});
  const navigate = useNavigate();
  // function Loading() {
  //   return <div>Loading...</div>;
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsRegistering(true);
    if (username in cachedResponse) {
      const data = cachedResponse[username];
      if (data.message) {
        navigate('/login')
        // window.location.href = "/login"; // redirect to login page
        // return;
      } else {
        setError(data.errors);
        setIsRegistering(false);
        // return;
      }
    }
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
    .then(res=>{
      if(res.ok){
        navigate('/login')
      }
    })
    .catch( error =>{
      setError(error);
      setIsRegistering(false);
    })
    setCachedResponse({ ...cachedResponse, [username]: { message, error } });
  };
  return (
    <div className="bckg">
      <div>
        <img src="background-3.jpg" />
      </div>

      <div className="d-flex flex-column mb-3" style={{ width: "20rem", margin: "0 auto" }}>
        <div className="card">
          <form onSubmit={handleSubmit} className="d-flex flex-column mb-3">
            <h1>Register</h1>
            <label>Username</label>
            <input placeholder="Enter full name" type="text" name="username" value={username} onChange={handleInputChange} />
            <label>Email:</label>
            <input placeholder="Enter your email" type="email" name="email" value={email} onChange={handleInputChange} />
            {isRegistering }
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handleInputChange} />
            <button type="submit" onSubmit={()=>handleSubmit(e)}>{isRegistering ? "Registering..." : "Register"}</button>

            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
