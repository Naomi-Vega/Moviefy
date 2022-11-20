import React from "react";
import logo from "./images/moviefy-01.png";
import "../components/Navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";


export const NavbarLogged = () => {
    const contextData = useAppContext()
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
                                <Link to="/user"><p>{contextData?.user?.name}'s Page</p></Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="sign-in" onClick={() => {
                        localStorage.removeItem("token")
                        contextData.setUser(null)
                        navigate("/")
                    }}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default NavbarLogged;