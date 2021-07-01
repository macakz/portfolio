import React from "react";
import { Switch, Route, Link, } from "react-router-dom";


function Header () {

    return (
        <div>
            <h1>Alexander McKerrow's Blog</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Contact">Contact</Link>
            </nav>

        </div>
    )
}

export default Header
