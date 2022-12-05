import React from "react";
import logo from "./images/moviefy.png";
import "../components/Navbar.css"
import { Link, useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="header-header">
            <div className="header">
                <div className="logobox">
                    <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
                </div>
                <div className="right-nav">
                    <nav className="nav">
                        <ul className="nav-nav">
                            <li>
                                <Link to="/explore">Explore</Link>
                            </li>
                            <li>
                                <Link to="/user">User Page</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="sign-in" onClick={() => {
                        navigate("/signin")
                    }}>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;