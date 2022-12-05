import React from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

import "../components/LandingPage.css"
import home from "./images/home-img.jpg"
import axios from "axios"
import { useState } from "react"
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

function LandingPage() {
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const contextData = useAppContext()
        const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <div className="landing-container">
                <div className="home-page-left">
                    <h1>Track films you’ve watched.</h1>
                    <h1>Save those you want to see.</h1>
                    <h1>Tell your friends what’s good.</h1>

                </div>
                <div className="home-page-right">
                    <div className="register">
                        <p><strong>Get Started</strong> I'ts free!</p>
                    </div>
                    <form className="login-section" onSubmit={async (e) => {
                    e.preventDefault()
                    var user = {
                        name, email, password
                    }
                    const res = await axios.post ("/register", user)
                    console.log(res.data)
                    localStorage.setItem("token", res.data.token)
                    contextData.setUser(res.data.user)
                    navigate("/explore")
                }}>
                        <label for="user-name"><p><FaUserAlt /> Name</p></label>
                        <input type="text" name="username" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} required />

                        <label for="email"><p><FaEnvelope /> Email</p></label>
                        <input type="text" name="user-email" pattern=".+@gmail\.com" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} required />

                        <label for="password"><p><FaLock /> Password</p></label>
                        <input type="password" name="user-password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} required />

                        <label for="confirm-password"><p><FaLock /> Confirm Password</p></label>
                        <input type="password" name="confirm-pword" required />
                        <div className='login-bottom'>
                            <button className="submit" type="submit">Submit</button>

                            <h4>By clicking the Submit button, you agree to our <a href='https://ciccc.ca/policy/prior-learning-assessment-policy/'>Terms & Conditions</a> and <a href='https://ciccc.ca/policy/admission-policy/'>Privacy Policy</a></h4>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LandingPage;