import React from "react"
import "../styles/register.css"
import { Link } from "react-router-dom"
import logo from "../images/logo3.png"
import register_slike2 from "../images/3339043.jpg"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({username: "", email: "", password: "", name: "", surname: "", confirme: ""});
    const [err, setError]=useState(null);

    const { register }=useContext(AuthContext);

    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (input.password !== input.confirme) {
            setError("Lozinke se ne poklapaju!");
            return;
        }

        if(input.name === "" || input.surname === "" || input.email === "" || input.username === "" || input.password === "" || input.confirme === "") {
            setError("Morate popuniti sva polja!");
            return;
        }

        if(input.password.length < 6) {
            setError("Lozinka mora imati najmanje 6 karaktera!");
            return;
        }

        if(!input.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setError("Email nije validan!");
            return;
        }

        try {
            await register(input);
            navigate("/home");
        }
        catch (error) {
            setError(error.response.data.message);
        }

    };

    return (
        <main id="register-body">
            <div className="content-register">
                <div className="reg-title">
                    <div id="logo-title-register">
                        <img alt="Logo" src={logo} id="logo-img-reg" />
                        <h1 id="h1-reg">Registruj se</h1>
                    </div>
                    <p id="reg-p-mess">Već imaš nalog? <Link to="/">Prijavi se ovdje.</Link></p>
                </div>
                <div className="big-div-register">
                    <img alt="Welcome" src={register_slike2} id="register-img" />
                    <form className="registration">
                        <input id="name-register" name="name" type="text" placeholder="Ime" className="reg-inp" required onChange={handleChange} />

                        <input id="surname-register" name="surname" type="text" placeholder="Prezime" className="reg-inp" required onChange={handleChange} />

                        <input id="email-register" name="email" type="email" placeholder="Email" className="reg-inp" required onChange={handleChange} />

                        <input id="username-register" name="username" type="text" placeholder="Korisničko ime" className="reg-inp" required onChange={handleChange} />

                        <input id="password-register" name="password" type="password" placeholder="Lozinka" className="reg-inp" required onChange={handleChange} />

                        <input id="confirme-register" name="confirme" type="password" placeholder="Potvrdi lozinku" className="reg-inp" required onChange={handleChange} />

                        {err && <p id="reg-err-mess">{err}</p>}

                        <input type="submit" value="Registruj se" id="sign-in-register" onClick={handleSubmit} />

                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register