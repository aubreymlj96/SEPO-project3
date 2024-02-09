import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props){
    const tabs = ['HOME', 'MY EVENTS', 'LOGIN', 'SIGN UP', 'CREATE EVENT'];
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
            </ul>
        </div>
    )
}

export default Nav;