import React from "react";
import { Link, } from "react-router-dom";
import './Main.css';
function Header () {

    return (
        <div>
            <h1>Alexander McKerrow's Blog</h1>
            <nav className="navContainer">
                <div className="homeContainer">
                    <Link to="/">Home</Link>
                </div>
                <div className="linksContainer">
                    <Link to="/Blog">Blog</Link>
                    <Link to="/Contact">Contact</Link>
                </div>

            </nav>

        </div>
    )
}

export default Header
