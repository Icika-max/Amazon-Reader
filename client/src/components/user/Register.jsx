import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [cachedResponse, setCachedResponse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (username in cachedResponse) {
      const data = cachedResponse[username];
      if (data.message) {
        navigate("/login");
      } else {
        setError(data.errors);
        setIsRegistering(false);
      }
    }
  }, [username, cachedResponse, navigate]);

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
    fetch("https://amazon-reader.onrender.com/users", {
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
      .then((res) => {
        if (res.ok) {
          navigate("/login");
        } else {
          throw new Error(res.statusText);
        }
      })
      .then(() => {
        setCachedResponse({ ...cachedResponse, [username]: { message: "success" } });
      })
      .catch((error) => {
        setError(error.message);
        setIsRegistering(false);
      });
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-form-heading">Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-form-field">
          <label htmlFor="username" className="auth-form-label">
            Username
          </label>
          <input
            placeholder="Enter Username"
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            className="auth-form-input"
          />
        </div>
        <div className="auth-form-field">
          <label htmlFor="email" className="auth-form-label">
            Email
          </label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="auth-form-input"
          />
        </div>
        <div className="auth-form-field">
          <label htmlFor="password" className="auth-form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="auth-form-input"
          />
        </div>
        <button
          type="submit"
          className="auth-form-button"
        >
          {isRegistering ? "Registering..." : "Register"}
        </button>
        <p className="auth-form-text">
          Already a member? <Link to="/login">Login</Link>
        </p>
        {error && <p className="auth-form-error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
