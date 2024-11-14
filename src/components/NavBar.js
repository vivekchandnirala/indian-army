import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>

                {/* Dropdown for About Us */}
                <li className="dropdown">
                    <span>About Us</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/about/mission-vision">Mission & Vision</Link></li>
                        <li><Link to="/about/organization">Organization</Link></li>
                        <li><Link to="/about/awards">Awards</Link></li>
                    </ul>
                </li>

                {/* Normal links */}
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>

                {/* Dropdown for War */}
                <li className="dropdown">
                    <span>War</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/war/1947">1947</Link></li>
                        <li><Link to="/war/1962">1962</Link></li>
                        <li><Link to="/war/1965">1965</Link></li>
                        <li><Link to="/war/1967">1967</Link></li>
                        <li><Link to="/war/1971">1971</Link></li>
                        <li><Link to="/war/1999">1999</Link></li>
                    </ul>
                </li>

                {/* Normal links for Elite Forces, Regiments, and Entries */}
                {/* <li><Link to="/elite-forces">Elite Forces</Link></li> */}
                {/* <li><Link to="/regiments">Regiments</Link></li> */}
                <li><Link to="/entries">Entries</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
