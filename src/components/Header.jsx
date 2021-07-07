import React from "react";
import { Link, } from "react-router-dom";
import './CSS/Header.css'
function Header () {

    return (
        <div>
            <h1 className="headerTitle">Alexander McKerrow's Portfolio</h1>
            <nav className="navMenu">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/About">About</Link>
                <Link className="navLink" to="/Blog">Blog</Link>
                <Link className="navLink" to="/Contact">Contact</Link>
                <div className="dot"></div>
            </nav>
        </div>
    )
}

export default Header
