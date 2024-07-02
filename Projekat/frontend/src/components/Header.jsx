import React from "react"
import { Link } from "react-router-dom"
import "../styles/header.css"
import logo from "../images/logo3.png"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const Header = () => {
    const { currentUser }=useContext(AuthContext);

    return (
        <header>
            <nav className="nav padding-nav">
                <img src={logo} alt="Logo" />
                <ul>
                    <li><Link to="/home">Početna</Link></li>
                    <li><Link to="/about">O nama</Link></li>
                    <li><Link to={currentUser.is_admin ? "/admin" : "/profile"}>✨{currentUser?.username}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header