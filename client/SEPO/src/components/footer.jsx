import React from "react";

function Footer(){
    return (
        <footer className="footer blue">
            <div className="footerContainer">
            <div className="footer-logo left">
                <a href="/homepage">
                <img className="footlogo" src='/SEPO-logos_transparent.png' alt='SEPO Logo'/>
                </a>
            </div>
            <div className="footerContent text-centered">
                <h3>Get Involved!</h3>
                <ul>
                   <li><a href="/signup">Sign Up</a></li> 
                   <li><a href="/login">Login</a></li> 
                </ul>
            </div>
            <div className="socials text-right">
            <h3>Check Out Our Instagram</h3>
                <a href=''>
                <img className="pp-images1" src="/" alt="insta"/>
                </a>
            </div>
            <p>@2024 SEPO, Inc. All Rights Reserved. Contributors - Garrett Shepherd, Evan Fodemski, Aubrey Johnson</p>
            </div>
        </footer>
    )
}

export default Footer;