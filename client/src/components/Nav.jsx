import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStore, faBook, faShoppingCart, faUser, faSignOutAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';


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
        <nav className="navbar">
            <div className="navbar-menu">
                <div className="navbar-start">
                <Link className="navbar-item" to='/my-account'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>{username1}</span>
                    </Link>
                    <Link className="navbar-item" to='/home'>
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </Link>
                    {role === 'admin' && 
  <Link className="navbar-item" to='/admin'>
    <FontAwesomeIcon icon={faUserShield} />
    <span>Admin</span>
  </Link>
}
                    <Link className="navbar-item" to='/store'>
                        <FontAwesomeIcon icon={faStore} />
                        <span>Store</span>
                    </Link>
                    <Link className="navbar-item" to='/library'>
                        <FontAwesomeIcon icon={faBook} />
                        <span>Library</span>
                    </Link>
                    <Link className="navbar-item" to='/cart'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>Cart</span>
                    </Link>
                    {/* <Link className="navbar-item" to='/my-account'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>Account</span>
                    </Link> */}
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-danger" to='/' onClick={()=>handleLogout()}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                <span>Logout</span>
                            </Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        </nav>
    );
}

export default Nav;
