import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {

    const userString = localStorage.getItem('user');
    console.log(userString);
    let role = '';
    let username1 = '';
    if (userString !== null) {
        const [tempRole, id, username] = userString.split('|');
        role = tempRole;
        username1= username
    }
    
    const handleLogout = () => {
        localStorage.removeItem('user');
    }
    
    
    return (
        <div className="vertical-nav">
            <ul className="list">
                <li>
                <a>{username1}</a>

                    <Link to='/home'>Home</Link>
                    {role === 'admin' && <Link to='/admin'>Admin</Link>}
                   
                    <Link to='/store'>Store</Link>
                    <Link to='/library'>Library</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/my-account'>Account</Link>
                    <a>{username1}</a>
                    <Link  className="right" to='/' onClick={()=>handleLogout()}>Logout</Link>
                    

                   
                    
                </li>
            </ul>
        </div>
    );
}

export default Nav;
