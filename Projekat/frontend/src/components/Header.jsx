import React from "react"
import { Link } from "react-router-dom"
import "../styles/header.css"
import logo from "../images/logo3.png"

const Header = () => {
    return (
        <header>
            <nav className="nav padding-nav">
                <img src={logo} alt="Logo" />
                <ul>
                    <li><Link to="/">Početna</Link></li>
                    <li><Link to="/about">O nama</Link></li>
                    <li><Link to="/profile">Nalog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header