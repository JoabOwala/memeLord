import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar-container">
            <NavLink
            to="/"
            className="navbar-link"
            >
                Home
            </NavLink>
            <NavLink
            to="/trending"
            className="navbar-link"
            >
                Trending
            </NavLink>
            <NavLink
            to="/creatememe"
            className="navbar-link"
            >
                CreateMeme
            </NavLink>
            <NavLink
            to="/about"
            className="navbar-link"
            >
                About
            </NavLink>

        </div>

    )
}

export default Navbar;