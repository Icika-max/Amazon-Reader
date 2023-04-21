import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
             <ul className="list">
            <li>
                <Link id= "home" to = '/home'>Home</Link>
                <Link id= "home" to = '/admin'>Admin</Link> 
                <Link id= "home" to = '/cart'>Cart</Link>
                <Link id= "home" to = '/store'>Store</Link>
                <Link id= "home" to = '/library'>Library</Link>
                <Link id= "home" to='/LandingPage'>Logout</Link>

                {/* <Link to = '/myaccount'>My account</Link> */}
            </li>
        </ul>

        </div>
      );
}
 
export default Nav;