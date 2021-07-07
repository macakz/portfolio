import React from "react";
import { Link, } from "react-router-dom";
import './CSS/Header.css'
function Header () {

    return (
        <div>
            <h1 className="headerTitle">Alexander McKerrow's Portfolio</h1>
            <nav className="navMenu">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/about">About</Link>
                <Link className="navLink" to="/blog">Blog</Link>
                <Link className="navLink" to="/contact">Contact</Link>
                <div className="dot"></div>
            </nav>
        </div>
    )
}

export default Header
