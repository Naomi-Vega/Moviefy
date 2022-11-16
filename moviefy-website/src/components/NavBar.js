
import logo from "./images/moviefy-01.png";
import "../components/Navbar.css"
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <>
            <div className="header">
                <div className="logobox">
                <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
                </div>
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
                <button className="sign-in">Sign in</button>
            </div>
        </>
    )
}

export default Navbar;