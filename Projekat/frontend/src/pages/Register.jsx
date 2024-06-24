import React from "react"
import "../styles/register.css"
import { Link } from "react-router-dom"
import logo from "../images/logo3.png"
import register_slike2 from "../images/3339043.jpg"

const Register = () => {
    return (
        <main id="register-body">
            <div className="content-register">
                <div className="reg-title">
                    <div id="logo-title-register">
                        <img alt="Logo" src={logo} id="logo-img-reg" />
                        <h1 id="h1-reg">Registruj se</h1>
                    </div>
                    <p id="reg-p-mess">Već imaš nalog? <Link to="/login">Prijavi se ovdje.</Link></p>
                </div>
                <div className="big-div-register">
                    <img alt="Welcome" src={register_slike2} id="register-img" />
                    <form className="registration">
                        <label className="reg-lbl" htmlFor="name">Ime i prezime:</label>
                        <input id="name-register" name="name" type="text" className="reg-inp" required />

                        <label className="reg-lbl" htmlFor="email">Email:</label>
                        <input id="email-register" name="email" type="email" className="reg-inp" required />

                        <label className="reg-lbl" htmlFor="username">Korisničko ime:</label>
                        <input id="username-register" name="username" type="text" className="reg-inp" required />

                        <label className="reg-lbl" htmlFor="password">Lozinka:</label>
                        <input id="password-register" name="password" type="password" className="reg-inp" required />

                        <label className="reg-lbl" htmlFor="confirme">Potvrdi lozinku:</label>
                        <input id="confirme-register" name="confirme" type="password" className="reg-inp" required />

                        <input type="submit" value="Registruj se" id="sign-in-register" />
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register