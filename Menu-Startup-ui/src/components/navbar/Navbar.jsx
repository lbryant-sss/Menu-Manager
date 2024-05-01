import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    function showSidebar(){
        const sidebar = document.querySelector('.navbar_links')
        sidebar.style.display = 'flex'
    }

    function hideSidebar() {
        const hidebar = document.querySelector('.navbar_links')
        hidebar.style.display = 'none'
    }

    return (
        <nav className="navbar side_navbar">
            <wrapper className="navbar_container side_nav_container">
                <a href="#" className="navbar_logo">
                            <img src={Logo} alt="" />
                </a>
                
                <ul className={'navbar_links $ {showNav ? "show-nav" : ""}'}>
                     <li onClick={hideSidebar} className="closebar">
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </a>
                     </li>
                    <li>
                        <a href="#">Homer</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">How to set-up</a>
                    </li>
                    <li>
                    <a href="" className="button-primary navbar_btn">
                    Sign Up
                </a>
                    </li>
                </ul>
                <div onClick={showSidebar} className={'navbar_menubar $ {showNav ? "bg-color" : ""}'}>
                    <FaBars />
                </div>
            </wrapper>
        </nav>
    )
}

export default Navbar;