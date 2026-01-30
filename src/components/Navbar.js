import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <MenuIcon />
                </button>
            </div>
            <div className="links">
                <NavLink to="/" exact activeClassName="active"> Home </NavLink>
                <NavLink to="/experience" activeClassName="active"> Experience </NavLink>
                <NavLink to="/projects" activeClassName="active"> Projects </NavLink>
                <NavLink to="/contact" activeClassName="active"> Contact </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
