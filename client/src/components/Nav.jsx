import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    
    const handleLogout = () => {
        localStorage.removeItem('uid');
    }
    
    
    return (
        <div className="nav">
            <ul className="list">
                <li>
                    <Link to='/home'>Home</Link>
                    <Link to='/admin'>Admin</Link>
                   
                    <Link to='/store'>Store</Link>
                    <Link to='/library'>Library</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/my-account'>Account</Link>
                    {/* <Link to='/login'>Login</Link> */}
                    {/* <Link to='/register'>Register</Link> */}
                    {/* <Link to='/'>LandingPage</Link> */}
                    <Link  className="right" to='/' onClick={()=>handleLogout()}>Logout</Link>
                    

                   
                    
                </li>
            </ul>
        </div>
    );
}

export default Nav;
