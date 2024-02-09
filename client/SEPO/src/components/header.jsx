import React from 'react';
import Home from '../Pages/Homepage';
import JoinEvent from '../Pages/JoinEvent';
import MyEvents from '../Pages/Myevents';
import CreateEvent from '../Pages/CreateEvent'
import SignUp from '../Pages/sighnup';
import Login from '../Pages/login';
import Nav from './Navbar';

function Header(){
    const loadPage = () => {
        switch(currentPage) {
            case 'Home':
                return <Home/>
            case 'JoinEvent':
                return <JoinEvent/>
            case 'MyEvent':
                return <MyEvents/>
            case 'CreateEvent':
                return <CreateEvent/>
            case 'SignUp':
                return <SignUp/>
            case 'Login':
                return <Login/>
            default:
                return <Home/>
        }
    };

    return (
        <div className='header'>
            <nav class='headerNav'>
                <img src="./SEPO-logos_black.png" alt="logo-header" id="logoheader"/>
                <div>
                    <a className='header-item' href='/home'>
                        <span className='headerContent'></span>
                    </a>
                </div>
            </nav>
            <div className='nav-bar'>
            <Nav />
            </div>
            <main>
            </main>
        </div>
    )
}

export default Header;