import React, { useEffect } from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

import "../components/LandingPage.css"
import home from "./images/avatar.png"
import axios from "axios"
import { useState } from "react"
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

function LandingPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showSignIn, setShowSignIn] = useState(false)
    const contextData = useAppContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (contextData.user) {
            navigate("/explore")
        }
    }, [])

    return (
        <>
            <Navbar setShowSignIn={setShowSignIn} />
            <div className="landing-container">
                <div className="home-page-left">
                    <h1>Track films you've watched.</h1>
                    <h1>Follow those you want to see.</h1>
                    <h1>Save and review your favourite films.</h1>

                    {/*     <img className="home-img" src={home} alt="Home" /> */}
                </div>
                <div className="home-page-right">
                    <div className="fields">
                        {!showSignIn && <form className="login-section" onSubmit={async (e) => {
                            e.preventDefault()
                            var user = {
                                name, email, password
                            }
                            const res = await axios.post("/register", user)
                            console.log(res.data)
                            localStorage.setItem("token", res.data.token)
                            contextData.setUser(res.data.user)
                            navigate("/explore")
                        }}>
                            <div className="register">
                                <div className="register-title">Register to begin your Moviefy experience</div>
                            </div>
                            <div className="name">
                                <label for="user-name"><div><FaUserAlt /> Name</div></label>
                                <input type="text" name="username" value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} required />

                            </div>


                            <div className="name">
                                <label for="email"><div><FaEnvelope /> Email</div></label>
                                <input type="text" name="user-email" pattern=".+@gmail\.com" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} required />
                            </div>



                            <div className="name">
                                <label for="password"><div><FaLock /> Password</div></label>
                                <input type="password" name="user-password" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} required />
                            </div>


                            <div className="name">
                                <label for="confirm-password"><div><FaLock /> Confirm Password</div></label>
                                <input type="password" name="confirm-pword" required />
                            </div>
                            <div className='login-bottom'>
                                <div className="submit-btn">
                                    <button className="submit" type="submit">Submit</button>
                                </div>

                                <h4>By clicking the Submit button, you agree to our <a href='https://ciccc.ca/policy/prior-learning-assessment-policy/'>Terms & Conditions</a> and <a href='https://ciccc.ca/policy/admission-policy/'>Privacy Policy</a></h4>
                            </div>
                        </form>}

                        {showSignIn && <form className="sign-in-section" onSubmit={async (e) => {
                            e.preventDefault()
                            var user = {
                                email, password
                            }
                            const res = await axios.post("/signin", user)
                            console.log(res.data)
                            localStorage.setItem("token", res.data.token)
                            contextData.setUser(res.data.user)
                            navigate("/explore")
                        }}>
                            <div className="register">
                                <div className="register-title">Sign in to begin your Moviefy experience</div>
                            </div>
                            <div className="signin-field">
                                <label for="email"><FaUserAlt /> Email</label>
                                <input type="email" placeholder="" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <div className="signin-field">
                                <label for="password"><FaLock /> Password</label>
                                <input type="password" placeholder="" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            </div>
                            <button className="submit" type="submit">Submit</button>
                            <div className="no-account">
                                <p>Don't have an account? <span className="register-link" onClick={() => setShowSignIn(false)}>Register here</span></p>
                            </div>
                        </form>}
                    </div>

                </div>
            </div>
        </>
    );
}

export default LandingPage;