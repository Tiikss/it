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
                        <input id="name-register" name="name" type="text" placeholder="Ime" className="reg-inp" required />

                        <input id="surname-register" name="surname" type="text" placeholder="Prezime" className="reg-inp" required />

                        <input id="email-register" name="email" type="email" placeholder="Email" className="reg-inp" required />

                        <input id="username-register" name="username" type="text" placeholder="Korisničko ime" className="reg-inp" required />

                        <input id="password-register" name="password" type="password" placeholder="Lozinka" className="reg-inp" required />

                        <input id="confirme-register" name="confirme" type="password" placeholder="Potvrdi lozinku" className="reg-inp" required />

                        <input type="submit" value="Registruj se" id="sign-in-register" />
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register