import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/Images/logo.svg"
import './Header.css'


const Header = () => (
    <header className="bg-dark">
        <div id="logo">
            <img src={logo} alt="logo"></img>
        </div>
        <nav>
            <Link className="link-nav" to="/home">Home</Link>
            <Link className="link-nav" to="/advance-search">Advance Search</Link>
            <Link className="link-nav" to="/about">About</Link>
        </nav>
        <div id="register">
            <Link className="auth-btn" to="/auth/login">login</Link>
            <Link className="auth-btn" to="/auth/signup">signup</Link>
        </div>
    </header>
);
export default Header;