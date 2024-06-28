import React from "react"
import logo from "../images/logo3.png"
import login_slika2 from "../images/19197876.jpg"
import "../styles/login.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"


const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({username: "", password: ""});
    const [err, setError]=useState(null);

    const { login }=useContext(AuthContext);

    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(input.username === "" || input.password === "") {
            setError("Morate popuniti sva polja!");
            return;
        }

        try {
            await login(input);
            navigate("/home");
        }
        catch (error) {
            setError(error.response.data.message);
        }

    };

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
                        <input type="text" name="username" id="username-login" placeholder="Korisničko ime" className="login-inp" required onChange={handleChange} />

                        <input type="password" name="password" id="password-login" placeholder="Lozinka" className="login-inp" required onChange={handleChange} />

                        {err && <p>{err}</p>}

                        <input type="submit" value="Prijavi se" id="subm-login" className="login-inp" onClick={handleSubmit} />
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