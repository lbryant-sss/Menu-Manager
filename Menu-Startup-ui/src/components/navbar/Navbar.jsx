import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="navbar side_navbar">
            <wrapper className="navbar_container side_nav_container">
                <a href="#" className="navbar_logo" onClick={() => setShowNav(false)}>
                            <img src={Logo} alt="" />
                </a>
                <div className={'navbar_menubar $ {showNav ? "bg-color" : ""}'} onClick={() => setShowNav(!showNav)}>
                    <FaBars />
                </div>
                <ul className={'navbar_links $ {showNav ? "show-nav" : ""}'}>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#">Home</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#">Pricing</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#">How to set-up</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                    <a href="" className="button-primary navbar_btn">
                    Sign Up
                </a>
                    </li>
                </ul>
                
            </wrapper>
        </nav>
    )
}

export default Navbar;