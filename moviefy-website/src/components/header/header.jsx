import React from "react";
import logo from "../images/moviefy-01.png";
import "../header/StyleHeader.css"
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <img className="logo" src={logo} alt="Logo" />
                <button className="sign-in" onClick={()=>{
                    navigate("/signin")
                }}>Sign in</button>
            </div>
        </>
    )
}

export default Header;