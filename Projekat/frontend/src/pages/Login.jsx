import React from "react"
import logo from "../images/logo3.png"
import login_slika2 from "../images/19197876.jpg"
import "../styles/login.css"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <main id="login-body">
            <div id="content-login">
                <div id="login-div">
                    <div id="login-ttl">
                        <div id="logo-title-login">
                            <img alt="Logo" src={logo} id="login-logo-img" />
                            <h1 id="h1-login">Prijavi se</h1>
                        </div>
                        <p id="login-p-mess">Nemaš nalog? <Link to="/register">Registruj se sada!</Link></p>
                    </div>
                    <form id="form-login">
                        <label className="login-lbl" htmlFor="username">Korisničko ime:</label>
                        <input type="text" name="username" id="username-login" className="login-inp" required />

                        <label className="login-lbl" htmlFor="password">Lozinka:</label>
                        <input type="password" name="password" id="password-login" className="login-inp" required />

                        <input type="submit" value="Prijavi se" id="subm-login" className="login-inp" />
                    </form>
                </div>
                <div id="image-login">
                    <img alt="Početna slika" src={login_slika2} id="login-img" />
                </div>
            </div>
        </main>
    )
}

export default Login