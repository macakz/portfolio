import React from "react";
import { Switch, Route, Link, } from "react-router-dom";


function Header () {

    return (
        <div className="App">
            <h1>Headerpage</h1>
            <Link to="/">Home</Link>
            <Link to="/Blog">Blog</Link>
        </div>
    );
}

export default Header
