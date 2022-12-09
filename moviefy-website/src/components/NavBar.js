import React from "react";
import logo from "./images/moviefy-01.png";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import "../styles/Navbar.css"


export const Navbar = (/*props*/) => {
    const navigate = useNavigate()
  /*  const contextData = useAppContext() */

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
                                <Link to="/user">Usertest</Link>
                            </li>
                          {/*   { contextData.user && */}
                           <li>
                                <Link to="/user"> {/*{contextData.user.name}'s*/} Page</Link>
                            </li> {/*} */}
                        </ul>
                    </nav>
                 {/*   {!contextData.user && */}<button className="sign-in" /* onClick={() => {
                        props.setShowSignIn(true) 
                    }} */ >Sign in</button> {/*}*/}
                    {/*
                    {contextData.user && <button className="sign-in" onClick={()=>{
                    localStorage.removeItem("token")
                    contextData.setUser(null)
                    navigate("/")
                    }}>Log Out</button>}  */}

                </div>
            </div>
        </div>
    )
}

export default Navbar;