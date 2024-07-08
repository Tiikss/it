import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/lesson.css";
import lesson_slika1 from "../images/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import slika_like from "../images/like_icon.png";
import slika_dislike from "../images/dislike_icon.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useLocation } from "react-router-dom";
import { MainLessonContext } from "../context/mainLessonContext";
import VerticalMenu from "../components/VerticalMenu";
import { QuestionContext } from "../context/questionContext";
import { CommentContext } from "../context/commentContext";

const Lesson = () => {
    const { currentUser }=useContext(AuthContext);
    const { less, lesson } = useContext(MainLessonContext);
    const { question, questions, addLesson } = useContext(QuestionContext);
    const [input, setInput] = useState("");
    const [err, setError]=useState(null);
    const { comment }=useContext(CommentContext);
    const [comments, setComments]=useState("");
    const [like, setLike]=useState("");

    const [errComm, setErrorComm]=useState(null);


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleCommentChange = (e) => {
        setComments(e.target.value);
    }

    const handleLikeChange = (e) => {
        setLike(e.target.value);
    }

    let clear=document.getElementById("lesson-comment");

    const onSubmit = async (e) => {
        e.preventDefault();

        if(comments === "" && like === "") {
            setErrorComm("Morate popuniti polje!");
            return;
        }

        try {
            await comment(lessonName, courseName, [comments, like]);
        }
        catch (error) {
            setErrorComm(error.response.data.message);
        }
        finally {
            setComments("");
            setLike("");
            clear.value="";
            setErrorComm("Komentar je uspešno poslat!")
        }
    }
    
    const location=useLocation();
    const pathPieces = location.pathname.split("/");
    const courseName = pathPieces[2];
    const lessonName = pathPieces[pathPieces.length - 1];
    
    useEffect(() => {
        const fetchData = async () => {
           try{
                await lesson(courseName, lessonName);
                await questions(courseName, lessonName);
           } 
           catch (error) {
                console.log(error);
           }
        };
        fetchData();
    }, []);

    if(less===null || question===null){
        return <h1>Loading...</h1>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(input === "") {
            setError("Morate popuniti polje!");
            return;
        }

        if(input.toLowerCase() !== currQuestion[0].answer.toLowerCase()) {
            setError("Odgovor nije tačan.");
            return;
        }

        setError("Odgovor je tačan!");

        try {
            await questions(input);
            await addLesson(lessonName, currentUser.username);
        }
        catch (error) {
            setError(error.response.data.message);
        }

    };

    const showAnswer = (e) => {
        e.preventDefault();
        setError("Tačan odgovor je: " + currQuestion[0].answer);
        const pom=document.getElementById("btnAnswer");
        pom.style.display="none";
    }

    const currQuestion = question.filter((qus) => qus.idlesson == lessonName);

    return (
        <div className="lesson-container">
            <header id="lesson-header">
                <nav className="lesson-nav lesson-padding-nav">
                    <img src={lesson_slika1} alt="Logo" id="lesson-logo-img" />
                    <ul>
                        <li><Link to="/home">Početna</Link></li>
                        <li><Link to="/about">O nama</Link></li>
                        <li><Link to={currentUser.is_admin ? "/admin" : "/profile"}>✨{currentUser?.username}</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="lesson-main">
                <VerticalMenu
                    lessonName={less[0].name}
                    courseName={courseName}
                    lessID={less[0].idlesson}
                />

                <div className="lesson-content">
                    <div className="lesson-txt">
                        <h1 className="lesson-h1">{less[0].name}</h1>
                        <p id="explain" style={{whiteSpace: 'pre-line'}}>{less[0].content}</p>
                        <form className="test">
                            <label htmlFor="answer1">{currQuestion[0].content}</label>
                            <input type="text" name="answer" id="answer1" required onChange={handleChange}/>
                            {err && <p id="ques-p">{err}<button id="btnAnswer" onClick={(e) => showAnswer(e)}>Vidi tačan odgovor.</button></p>}
                            <input type="submit" value="Potvrdi" id="subm" onClick={handleSubmit}/>
                        </form>

                    </div>

                    <div id="comment-div">
                        <p id="less-p">Tvoje mišljenje nam mnogo znači! Reci nam šta misliš o lekciji!</p>
                        <form className="lesson-comment-form">
                            <textarea name="comment" id="lesson-comment" cols="40" rows="5" required onChange={handleCommentChange}></textarea>
                            <div id="like-div">
                                <label id="like-lbl">
                                    <input className="radio-less" type="radio" id="like" name="like" value="like" onChange={handleLikeChange} />
                                    <img src={slika_like} alt="Like" id="like-img" />
                                </label>

                                <label id="dislike-lbl">
                                    <input className="radio-less" type="radio" id="dislike" name="like" value="dislike" onChange={handleLikeChange}/>
                                    <img src={slika_dislike} alt="Dislike" id="dislike-img" />
                                </label>
                            </div>

                            {errComm && <p id="comm-p">{errComm}</p>}

                            <input type="submit" value="Pošalji" id="lesson-subm" onClick={onSubmit}/>
                        </form>
                    </div>
                </div>

            </div>

            <footer id="lesson-footer">
                <div className="lesson-footer-content">
                    <p className="lesson-footer-p">Prati nas:</p>
                    <div id="lesson-footer-icn-div">
                        <FontAwesomeIcon icon={faInstagram} className="lesson-footer-icn" />
                        <p className="lesson-footer-p">@lingua_franca</p>
                        <FontAwesomeIcon icon={faFacebook} className="lesson-footer-icn" />
                        <p className="lesson-footer-p">Lingua Franca</p>
                    </div>
                </div>
                <p className="lesson-footer-p">&copy; 2024 Lingua Franca | Sva prava zadržana | Tix</p>
            </footer>
        </div>
    );
};

export default Lesson;
