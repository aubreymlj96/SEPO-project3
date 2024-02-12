import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


function Nav(props){
    const tabs = ['HOME', 'MY EVENTS', 'LOGIN', 'SIGN UP', 'CREATE EVENT','Join Event'];
    return (
        
        <div className='tabs center'>
            <ul className='nav' id='nav-tabs'>
                {tabs.map((tab) => (
                    <li id='navOptions'className=
                    {props.currentPage === tab ? "nav-item is-active" : "nav-item"}
                    key={tab}
                    >
                    <Link to =  {tab} className={props.currentPage === tab ? "nav-link is-active" : "nav-link"}>{tab}</Link>
                   
                    </li>
                    
                    
                ))}
                {Auth.loggedIn() ? (
          <li className="nav-item">
            <button onClick={Auth.logout} className="nav-link">Logout</button>
          </li>
        ) : (
          <>
            {/* <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li> */}
          </>
        )}
            </ul>
            
        </div>
        
    )
}

export default Nav;