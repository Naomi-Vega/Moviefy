import React from "react";
import logo from "../images/moviefy-01.png";
import "../header/StyleHeader.css"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logobox">
                <img className="logo" src={logo} alt="Logo" />
                </div>
                <nav>
                <Link to="/">Explore</Link>
                <button className="sign-in">Sign in</button>
                </nav>
            </div>
        </>
    )
}

export default Header;