import React from "react"
import "../styles/profile.css"
import slike_profile1 from "../images/profileicon.png"
import slike_profile2 from "../images/statistika.png"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { useState } from "react"
import axios from "axios"

const Profile = () => {
    const { currentUser, logout, getUser }=useContext(AuthContext);
    const navigate = useNavigate();
    const [file, setFile]=useState(null);

    const upload = async () => {
        try {
            const formData=new FormData();
            formData.append('file', file);
            const res=await axios.post('/profile', formData);
            return res.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl=await upload();

        const valuse={
            img: imgUrl,
            username: currentUser.username
        }

        try{
            await axios.put('/users/profilepic', valuse);
            await getUser(currentUser.username);
            window.location.reload();
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleNewProfilePicClick = () => {
        const picModal = document.getElementById("modal");
        const overlay = document.getElementById("overlay");
        picModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };
    
    const handleModalClose = () => {
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("overlay").classList.add("hidden");
        document.body.style.overflowY = "scroll";
    };

    return (
        <div id="profile-container">
            <div id="profile-main">
                <div id="profile-info">
                    <img src={!currentUser.img ? slike_profile1 : `${process.env.PUBLIC_URL}/upload/${currentUser.img}`} id='profile-img' alt="Profile pic" onClick={handleNewProfilePicClick} />
                    <p id="profile-username">{currentUser.username}</p>
                    <p id="profile-name">Ime: {currentUser.name}</p>
                    <p id="profile-surname">Prezime: {currentUser.surname}</p> 
                    <button id="profile-btn" onClick={() => {logout(); navigate('/')}}>Odjavi se</button>
                </div>

                <div id="modal" className="hidden">
                    <button className="close-modal" onClick={handleModalClose}>&times;</button>

                    <div id="modal-div">
                        <p id="modal-title">Promijeni profilnu sliku: </p>
                        <input style={{display: "none"}} type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} />
                        <label className="file" htmlFor="file">izaberi sliku</label>
                    </div>

                    <button id="modal-btn" onClick={handleClick}>Potvrdi</button>
                    <p id="modal-message"></p>
                </div>

                <div id="overlay" className="hidden" onClick={handleModalClose} ></div>

                <div id="profile-statistic">
                    <div id="profile-statistic-title">
                        <img src={slike_profile2} alt="Statistika" />
                        <h3 id="profile-h3">Statistika</h3>
                    </div>
                    <p id="profile-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias beatae quisquam quo vitae
                        doloremque, dignissimos libero rem quis voluptatum accusamus, aut repellat reiciendis delectus
                        totam.
                        Inventore sint dolorum nam!</p>
                </div>
            </div>
        </div>
    )
}

export default Profile