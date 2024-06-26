import React from "react"
import "../styles/profile.css"
import slike_profile1 from "../images/profileicon.png"
import slike_profile2 from "../images/statistika.png"
import { useNavigate } from "react-router-dom"



const Profile = () => {
    const navigate = useNavigate();

    return (
        <div id="profile-container">
            <div id="profile-main">
                <div id="profile-info">
                    <img src={slike_profile1} alt="Profile pic" />
                    <p id="profile-username"><span>__tiks</span></p>
                    <p id="profile-name">Ime: <span>Tijana</span></p>
                    <p id="profile-surname">Prezime: <span>Rakočević</span></p>
                    <button id="profile-btn" onClick={() => navigate(`/login`)}>Odjavi se</button>
                </div>

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