import React from "react";
import logo from "../images/logo-test.png";
import "../header/StyleHeader.css"

function Header() {
    return (
        <>
            <div className="header">
                <img className="logo" src={logo} alt="Logo" />
                <button className="sign-in">Sign in</button>
            </div>
        </>
    )
}

export default Header;