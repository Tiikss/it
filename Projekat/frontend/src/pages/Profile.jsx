import React, { useEffect } from "react"
import "../styles/profile.css"
import slike_profile1 from "../images/profileicon.png"
import slike_profile2 from "../images/statistika.png"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { QuestionContext } from "../context/questionContext"
import PageNumbers from "../components/PageNumbers"

const Profile = () => {
    const { currentUser, logout, getUser }=useContext(AuthContext);
    const navigate = useNavigate();
    const [file, setFile]=useState(null);
    const { done, getDoneLessons }=useContext(QuestionContext);  

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = done.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

    useEffect(() => {
        getDoneLessons(currentUser.username);
    }, []);

    if(done===null){
        return <h1>Loading...</h1>
    }

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
                    <ul id="profile-p">
                        {currentCards.map((card) => (
                            <li key={card.id}>
                                <Link to={`/course/${card.course_name}/lesson/${card.idlesson}`}>
                                    <p>{card.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <PageNumbers>
                        cardsPerPage={cardsPerPage}
                        totalCards={done.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    </PageNumbers>
                </div>
            </div>
        </div>
    )
}

export default Profile