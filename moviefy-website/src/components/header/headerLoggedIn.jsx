import React from "react";
import logo from "../images/moviefy-01.png";
import "../header/StyleHeader.css"
import { useAppContext } from "../../AppContext";

function HeaderLoggedIn() {
    const contextData = useAppContext()
    return (
        <>
            <div className="header">
                <img className="logo" src={logo} alt="Logo" />
                <p>{contextData?.user?.name}'s movies</p>
                <button className="sign-in" onClick={()=>{
                    localStorage.removeItem("token")
                    contextData.setUser(null)
                }}>Log Out</button>
            </div>
        </>
    )
}

export default HeaderLoggedIn;