import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { Navigate } from "react-router-dom";

import "./Login.css"
// 



export default function Login() {
  const [password, setPassword] = useState("");
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  

  //  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    const res = await fetch("http://127.0.0.1:3000/login_account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usernameOrEmail,
        password,
      }),
    });
    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
      setIsLoggedIn(true);
      history.push("/home");
    } else {
      setMessage("");
      setError(data.errors);
      console.log(data.errors);
      setIsLoggingIn(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // history.push("/home");
      window.location.href = "/home";
      // window.location.reload();
    }
  },[isLoggedIn, history]);

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
        
        {/* <div className="login-img">
        <img src="background-2.jpg"/>
        </div> */}

      {/* <div className="lg-sign_in"> */}
        <form className="login-form"  onSubmit={handleLogin}>
            <label htmlFor="usernameOrEmail">Username or Email</label>
                
                <input
                  type="text"
                  placeholder="ENTER YOUR USERNAME OR EMAIL"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="ENTER PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
              
                <button className="link-btn" type="submit" disabled={isLoggingIn}>
                  {isLoggingIn ? "LoggingIn..." : "LOGIN"}
                </button>
                <br />
                <div className="login-error">
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
        
              
        </form>
      
      {/* </div> */}
</div>
  );
}

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import "./Login.css"

// export default function Login() {
//   const [password, setPassword] = useState("");
//   const [usernameOrEmail, setUsernameOrEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoggingIn, setIsLoggingIn] = useState(false);
  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoggingIn(true);
//     const res = await fetch("http://127.0.0.1:3000/login_account", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         usernameOrEmail,
//         password,
//       }),
//     });
//     const data = await res.json();
//     if (data.message) {
//       setMessage(data.message);
//       setIsLoggedIn(true);
//     } else {
//       setMessage("");
//       setError(data.errors);
//       console.log(data.errors);
//       setIsLoggingIn(false);
//     }
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       window.location.href = "/home";
//       window.location.reload();
//     }
//   },[isLoggedIn]);

//   return (
//     <div className="login-container">
//       <div className="img" style={{ float: "left", width: "50%" }}>
//         <img src="background-2.jpg"/>
//       </div>
//       <div className="sign_in" style={{ margin: "0 auto", width: "50%" }}>
//         <form onSubmit={handleLogin}>
//           <div className="card " style={{ width: "10rem", height: "53vh" }}>
//             <div className="card-body ">
//               <label htmlFor="usernameOrEmail">Username or Email</label>
//               <br />
//               <input
//                 type="text"
//                 placeholder="ENTER YOUR USERNAME OR EMAIL"
//                 value={usernameOrEmail}
//                 onChange={(e) => setUsernameOrEmail(e.target.value)}
//               />
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 placeholder="ENTER PASSWORD"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <br />
//               <center>
//                 <button type="submit" disabled={isLoggingIn}>
//                   {isLoggingIn ? "LoggingIn..." : "LOGIN"}
//                 </button>
//                 <br />
//                 <div>
//                   {message && <p>{message}</p>}
//                   {error && <p>{error}</p>}
//                 </div>
//               </center>
//             </div>
//           </div>
//         </form>
//         <div className="register">
//           <p>Don't have an account?</p>
//           <NavLink to="/register" className="nav-link">
//             Register here.
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }



