import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "../components/SignIn.css"
import { useAppContext } from "../AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const contextData = useAppContext()
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className="sign-in-title">
                <h1>Sign In</h1>
                <form className="sign-in-section" onSubmit={async (e) => {
                    e.preventDefault()
                    var user = {
                        email, password
                    }
                    const res = await axios.post ("/signin", user)
                    console.log(res.data)
                    localStorage.setItem("token", res.data.token)
                    contextData.setUser(res.data.user)
                    navigate("/explore")
                }}>
                    <div className="campo">
                    <label for="email"><FaUserAlt /> Email</label>
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                        </div>
                    <label for="password"><FaLock /> Password</label>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }}/>
                    <button className="submit" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default SignIn;