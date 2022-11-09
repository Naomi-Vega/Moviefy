import React from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import Header from "./header/header";
import "../components/LandingPage.css"
import home from "./images/home-img.jpg"

/* import { useState } from "react"
import { useNavigate } from "react-router-dom"; */

function LandingPage() {
    /*     const [userName, setUserName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const navigate = useNavigate() */

    return (
        <>
            <Header />
            <div className="landing-container">
                <div className="home-page-left">
                    <h1>Welcome to Moviefy</h1>
                    <h2>Your favorite movie tracker</h2>
                    <img className="home-img" src={home} alt="Home" />
                </div>
                <div className="home-page-right">
                    <div className="register">
                        <p><strong>Register now!</strong> To begin your Moviefy experience</p>
                    </div>
                    <form className="login-section" /* onSubmit={(e) => {
                    e.preventDefault()
                    var user = {
                        firstName, lastName, email, password
                    }
                    let users = localStorage.getItem("users")
                    users = JSON.parse(users)
                    users.push(user)
                    localStorage.setItem("users", JSON.stringify(users))
                    navigate("/users")
                }} */>
                        <label for="user-name"><p><FaUserAlt /> Name</p></label>
                        <input type="text" name="username" /* value={userName} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} */ required />

                        <label for="email"><p><FaEnvelope /> Email</p></label>
                        <input type="text" name="user-email" pattern=".+@gmail\.com" /* value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} */ required />

                        <label for="password"><p><FaLock /> Password</p></label>
                        <input type="password" name="user-password" /* value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} */ required />

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