// import React from "react";
// import { Link } from 'react-router-dom';

// const Nav = () => {
//     return (
//         <div className="nav">
//              <ul className="list">
//             <li>
//                 <Link to = '/home'>Home</Link>
//                 <Link to = '/admin'>Admin</Link> 
//                 <Link to = '/cart'>Cart</Link>
//                 <Link to = '/store'>Store</Link>
//                 <Link to = '/library'>Library</Link>
//                 <Link id='home' to='/LandingPage'>Logout</Link>

//                 {/* <Link to = '/myaccount'>My account</Link> */}
//             </li>
//         </ul>

//         </div>
//       );
// }
 
// export default Nav;
import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <ul className="list">
                <li>
                    <Link to='/home'>Home</Link>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/store'>Store</Link>
                    <Link to='/library'>Library</Link>
                    <Link to='/myaccount'>Myaccount</Link>
                    <Link  className="right" to='/LandingPage'>Logout</Link>
                    
                </li>
            </ul>
        </div>
    );
}

export default Nav;
