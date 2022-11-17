import React from "react";
import logo from "../images/moviefy-01.png";
import "../header/StyleHeader.css"
import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";

function HeaderLoggedIn() {
    const contextData = useAppContext()
    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <img className="logo" src={logo} alt="Logo" />
                <p>{contextData?.user?.name}'s movies</p>
                <button className="sign-in" onClick={()=>{
                    localStorage.removeItem("token")
                    contextData.setUser(null)
                    navigate("/")
                }}>Log Out</button>
            </div>
        </>
    )
}

export default HeaderLoggedIn;