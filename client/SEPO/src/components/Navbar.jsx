import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props){
    const tabs = ['home', 'my events', 'login', 'sign up', 'event planner'];
    return (
        <div className='tabs center'>
            <ul className='nav' id='nav-tabs'>
                {tabs.map((tab) => (
                    <li className=
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

