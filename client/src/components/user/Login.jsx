import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    fetch("https://amazon-reader.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/home");
          setIsLoggedIn(true);
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem(
          "user",
          `${data.roles.map((e) => e.name).toString()}|${data.id.toString()}|${data.username.toString()}`
        );
      })
      .catch((error) => {
        setMessage("");
        setError(error);
        setIsLoggingIn(false);
      });
  };

  return (
    <div className="auth-form-container">
  <form className="auth-form" onSubmit={handleLogin}>
    <h2 className="auth-form-heading">Login</h2>
    <div className="auth-form-field">
      <label htmlFor="usernameOrEmail" className="auth-form-label">Username</label>
      <input
        type="text"
        placeholder="ENTER YOUR USERNAME OR EMAIL"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="auth-form-input"
      />
    </div>
    <div className="auth-form-field">
      <label htmlFor="password" className="auth-form-label">Password</label>
      <input
        type="password"
        placeholder="ENTER PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-form-input"
      />
    </div>
    <button type="submit" className="auth-form-button" disabled={isLoggingIn}>
      {isLoggingIn ? "Logging In..." : "LOGIN"}
    </button>
    <div>
      {message && <p className="auth-form-text">{message}</p>}
      {error && <p className="auth-form-error">{error.message}</p>}

    </div>
    <p className="auth-form-text">
      Not a member?{" "}
      <NavLink to="/register" className="link-to-register">
        Register
      </NavLink>
    </p>
  </form>
</div>

  );
}

