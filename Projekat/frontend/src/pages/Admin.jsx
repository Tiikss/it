import React, { useContext, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "../styles/admin.css"; 
import { MainLessonContext } from "../context/mainLessonContext";
import { AdminContext } from "../context/adminContext";
import { LessonContext } from "../context/lessonContext";
import { QuestionContext } from "../context/questionContext";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/authContext";
import { CommentContext } from "../context/commentContext";
import slika_like from "../images/like_icon.png";
import slika_dislike from "../images/dislike_icon.png";

const Admin = () => {
    const [lessonText, setValue] = useState("");
    const [questionText, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [type, setType] = useState("");
    const { less, allLessons } = useContext(MainLessonContext);
    const [lesscurr, setLesson] = useState("");
    const { updateLesson, deleteLesson, addLesson, addQuestion, updateQuestion, deleteUser } = useContext(AdminContext);
    const { courseName, lessons, course } = useContext(LessonContext);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [questionType, setQuestionType] = useState(null);
    const { question, questions } = useContext(QuestionContext);
    const navigate = useNavigate();
    const { logout, allUsers, getAllUsers }=useContext(AuthContext);
    const { comm, getComments } = useContext(CommentContext);
    const [choosenLesson, setChoosenLesson] = useState("");
    const [choosenUser, setChoosenUser] = useState("");
    const [chooseLessonDel, setChooseLessonDel] = useState(false);
    const [chooseCommentDel, setChooseCommentDel] = useState(false);

    const [inputs, setInputs] = useState({
        addLessonTitle: "",
        addLessonContent: "",
        addLessonQuestion: "",
        addLessonAnswer: ""
    });

    const handleRadioChange = (e) => {
        setSelectedCourse(e.target.value);
    }

    useEffect(() => {
        getAllUsers();
    },[allUsers]);

    useEffect(() => {
        if(less){
            const currLesson = less.filter((lesson) => lesson.name === lesscurr);
            if(lesscurr !== ""){
                getComments(currLesson[0].idlesson);
            }
        }
    },[lesscurr]);

    const handleShowAdd = (e) => {
        const add = document.querySelector(".admin-add");
        const update = document.querySelector(".admin-update");
        const del = document.querySelector(".admin-delete");
        const remove = document.querySelector(".delete-user");
        const react = document.querySelector(".admin-reactions");
        add.classList.remove('hidden');
        update.classList.add('hidden');
        del.classList.add('hidden');
        remove.classList.add('hidden');
        react.classList.add('hidden');
    }
    
    const handleShowUpdate = (e) => {
        const add = document.querySelector(".admin-add");
        const update = document.querySelector(".admin-update");
        const del = document.querySelector(".admin-delete");
        const remove = document.querySelector(".delete-user");
        const react = document.querySelector(".admin-reactions");
        add.classList.add('hidden');
        update.classList.remove('hidden');
        del.classList.add('hidden');
        remove.classList.add('hidden');
        react.classList.add('hidden');
    }

    const handleShowDelete = (e) => {
        const add = document.querySelector(".admin-add");
        const update = document.querySelector(".admin-update");
        const del = document.querySelector(".admin-delete");
        const remove = document.querySelector(".delete-user");
        const react = document.querySelector(".admin-reactions");
        add.classList.add('hidden');
        update.classList.add('hidden');
        del.classList.remove('hidden');
        remove.classList.add('hidden');
        react.classList.add('hidden');
    }

    const handleShowRemoveUser = async (e) => {
        const add = document.querySelector(".admin-add");
        const update = document.querySelector(".admin-update");
        const del = document.querySelector(".admin-delete");
        const remove = document.querySelector(".delete-user");
        const react = document.querySelector(".admin-reactions");
        add.classList.add('hidden');
        update.classList.add('hidden');
        del.classList.add('hidden');
        remove.classList.remove('hidden');
        react.classList.add('hidden');
        await getAllUsers();
    }

    const handleShowReactions = (e) => {
        const add = document.querySelector(".admin-add");
        const update = document.querySelector(".admin-update");
        const del = document.querySelector(".admin-delete");
        const remove = document.querySelector(".delete-user");
        const react = document.querySelector(".admin-reactions");
        add.classList.add('hidden');
        update.classList.add('hidden');
        del.classList.add('hidden');
        remove.classList.add('hidden');
        react.classList.remove('hidden');
    }

    const handleSetLesson = async (e) => {
        if(e.target.id==="select-lesson" && chooseLessonDel===false){
            const selectLesson = document.getElementById('select-lesson');
            selectLesson.removeChild(selectLesson.firstChild);
            setChooseLessonDel(true);
        }
        else if (e.target.id==="select-lesson2" && chooseCommentDel===false){
            const selectLesson2 = document.getElementById('select-lesson2');
            selectLesson2.removeChild(selectLesson2.firstChild);
            setChooseCommentDel(true);
        }
        setLesson(e.target.value);
        const currLesson = less.filter((lesson) => lesson.name === e.target.value);
        try{
            const res = await questions(currLesson[0].course_name, e.target.value);
            const currQuestion = res.filter((ques) => ques.idlesson === currLesson[0].idlesson);
            setQuestion(currQuestion[0].content);
            setAnswer(currQuestion[0].answer);
            setType(currQuestion[0].type_name);
            setValue(currLesson[0].content);
        }catch(err){
            console.log(err);
        }            
    }

    const handleUpdateLesson = (e) => {
        e.preventDefault();
        updateLesson({lessonName: lesscurr, content: lessonText})
        const tst = less.filter(lesson => lesson.name === lesscurr);
        updateQuestion({content: questionText, answer: answer, type: type, idlesson: tst[0].idlesson});

        const picModal = document.getElementById("modal");
        const overlay = document.getElementById("overlay");
        picModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    useEffect(() => {
        allLessons();
        course(courseName);
    },[less]);

    if(less===null){
        return <h1>Loading...</h1>;
    }

    const handleDelete = () => {
        const lessDel = less.filter(lesson => lesson.name === choosenLesson);
        deleteLesson(lessDel[0].idlesson);
    }

    const handleDeleteUser = () => {
        const userDel = allUsers.filter(user => user.username === choosenUser);
        deleteUser(userDel[0].username);
    }

    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.id]: e.target.value}));
    }

    const handleAddLesson = async (e) => {
        const res=await addLesson({lessonName: inputs.addLessonTitle, content: inputs.addLessonContent, courseName: selectedCourse, img: `images/${selectedCourse}.png`});
        const { insertId, ...other } = res; 
        await addQuestion({answer: inputs.addLessonAnswer, content: inputs.addLessonQuestion, idlesson: insertId, questionType: questionType})

        const picModal = document.getElementById("modal");
        const overlay = document.getElementById("overlay");
        picModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    const showModal = (e) => {
        const picModal = document.getElementById("modal2");
        const overlay = document.getElementById("overlay2");
        picModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        setChoosenLesson(e.target.textContent);
    }

    const showModal2 = (e) => {
        const picModal = document.getElementById("modal3");
        const overlay = document.getElementById("overlay3");
        picModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        setChoosenUser(e.target.textContent);
    }

    const handleQuestion = (e) => {
        setQuestionType(e.target.value);
    }

    const handleModalClose = () => {
        window.location.reload();
    };

    const closeModal2 = () => {
        const picModal = document.getElementById("modal2");
        const overlay = document.getElementById("overlay2");
        picModal.classList.add("hidden");
        overlay.classList.add("hidden");
        document.body.style.overflowY = "scroll";
    }

    const closeModal3 = () => {
        const picModal = document.getElementById("modal3");
        const overlay = document.getElementById("overlay3");
        picModal.classList.add("hidden");
        overlay.classList.add("hidden");
        document.body.style.overflowY = "scroll";
    }

    return (
        <main id="admin-body">

            <div id="admin-action">
                <h1 className="admin-h1">Izaberi akciju</h1>
                
                <div id="admin-btns">
                    <button className="admin-btn" onClick={handleShowAdd}>Dodaj lekciju</button>
                    <button className="admin-btn" onClick={handleShowUpdate}>Izmijeni lekciju</button>
                    <button className="admin-btn" onClick={handleShowDelete}>Izbriši lekciju</button>
                    <button className="admin-btn" onClick={handleShowRemoveUser}>Ukloni korisnika</button>
                    <button className="admin-btn" onClick={handleShowReactions}>Vidi reakcije</button>
                    <button className="admin-btn" onClick={() => {logout(); navigate('/')}}>Odjavi se</button>
                </div>

            </div>

            <div className="admin-add hidden">
                <h1 className="admin-h1">Dodaj lekciju</h1>
                <div id="radio-div">
                    <input type="radio" id="begginer" value="begginer" name="admin-radio" className="admin-radio" onChange={handleRadioChange} checked={selectedCourse==='begginer'} />
                    <label htmlFor="begginer">Početni nivo</label>

                    <input type="radio" id="intermediate" value="intermediate" name="admin-radio" className="admin-radio" onChange={handleRadioChange} checked={selectedCourse==='intermediate'}/>
                    <label htmlFor="intermediate">Srednji nivo</label>

                    <input type="radio" id="advanced" value="advanced" name="admin-radio" className="admin-radio" onChange={handleRadioChange} checked={selectedCourse==='advanced'}/>
                    <label htmlFor="advanced">Napredni nivo</label>
                </div>
                <input
                    type="text"
                    placeholder="Naslov lekcije"
                    className="admin-title"
                    onChange={handleChange}
                    id="addLessonTitle"
                />
                <div className="editorContainer">
                    <textarea
                        className="editor"
                        id="addLessonContent"
                        onChange={handleChange}
                    />
                </div>

                <input type="text" placeholder="Pitanje" className="admin-title" id="addLessonQuestion" onChange={handleChange}/>
                <input type="text" placeholder="Odgovor" className="admin-title" id="addLessonAnswer" onChange={handleChange}/>
                <div id="type-div">
                    <input type="radio" id="fillinthegap" value="fill in the gap" name="ques-radio" className="admin-radio" onChange={handleQuestion} checked={questionType==='fillinthegap'} />
                    <label htmlFor="fillinthegap">Popuni praznine</label>

                    <input type="radio" id="truefalse" value="true false" name="ques-radio" className="admin-radio" onChange={handleQuestion} checked={questionType==='truefalse'} />
                    <label htmlFor="truefalse">Tačno/Netačno</label>
                </div>

                <button className="admin-btn" onClick={handleAddLesson}>Dodaj</button>
            </div>

            <div id="modal" className="hidden">
                <button className="close-modal" onClick={handleModalClose}>&times;</button>

                <div id="modal-div">
                    <p id="modal-title">Uspješno izvršene promjene!</p>
                </div>
            </div>

            <div id="overlay" className="hidden" onClick={handleModalClose} ></div>

            <div className="admin-update hidden">
                <h1 className="admin-h1">Izmijeni lekciju</h1>
                <select
                    id="select-lesson"
                    name="lesson"
                    type="text"
                    className="admin-title"
                    onChange={handleSetLesson}
                >
                    <option selected='selected' value='default'>Izaberi lekciju</option>
                    {less.map((lesson) => ( 
                        <option key={lesson.idlesson} value={lesson.name}>{lesson.name}</option>
                    ))}
                </select>
                <div className="editorContainer">
                    <textarea 
                        style={{whiteSpace: 'pre-line'}}
                        className="editor"
                        value={lessonText}
                        onChange={(e) => setValue(e.target.value)}
                    />

                </div>

                <input type="text" className="admin-title" id="updateLessonQuestion" value={questionText} onChange={(e) => setQuestion(e.target.value)}/>
                <input type="text" className="admin-title" id="updateLessonAnswer" value={answer} onChange={(e) => setAnswer(e.target.value)}/>

                <div id="type-div">
                    <input type="radio" id="fillinthegap2" value="fill in the gap" name="ques-radio2" className="admin-radio" onChange={(e) => setType(e.target.value)} checked={type==='fillinthegap'} />
                    <label htmlFor="fillinthegap2">Popuni praznine</label>

                    <input type="radio" id="truefalse" value="true false" name="ques-radio2" className="admin-radio" onChange={(e) => setType(e.target.value)} checked={type==='truefalse'}/>
                    <label htmlFor="truefalse2">Tačno/Netačno</label>
                </div>

                <button className="admin-btn" onClick={handleUpdateLesson}>Izmijeni</button>
            </div>

            <div id="modal2" className="hidden">
                <button className="close-modal2" onClick={closeModal2}>&times;</button>

                <div id="modal-div2">
                    <p id="modal-title2">Da li ste sigurni da želite da obrišete?</p>
                    <button id="modal-btn" onClick={handleDelete}>Potvrdi</button>
                </div>
            </div>

            <div id="overlay2" className="hidden" onClick={closeModal2} ></div>

            <div className="admin-delete hidden">
                <h1 className="admin-h1">Izbriši lekciju</h1>
                <table id="delete-table">
                    <thead>
                        <tr>
                            <th>Početni nivo</th>
                            <th>Srednji nivo</th>
                            <th>Napredni nivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {less.filter(lesson => lesson.course_name === 'begginer').map(lesson => (
                                    <div key={lesson.idlesson}>
                                        <button className="delete-lesson-btn" onClick={(e) => showModal(e)}>
                                            {lesson.name}
                                        </button>
                                    </div>
                                ))}
                            </td>
                            <td>
                                {less.filter(lesson => lesson.course_name === 'intermediate').map(lesson => (
                                    <div key={lesson.idlesson}>
                                        <button className="delete-lesson-btn" onClick={(e) => showModal(e)}>
                                            {lesson.name}
                                        </button>
                                    </div>
                                ))}
                            </td>
                            <td>
                                {less.filter(lesson => lesson.course_name === 'advanced').map(lesson => (
                                    <div key={lesson.idlesson}>
                                        <button className="delete-lesson-btn" onClick={(e) => showModal(e)}>
                                            {lesson.name}
                                        </button>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div id="modal3" className="hidden">
                <button className="close-modal3" onClick={closeModal3}>&times;</button>

                <div id="modal-div3">
                    <p id="modal-title3">Da li ste sigurni da želite da obrišete korisnika?</p>
                    <button id="modal-btn" onClick={handleDeleteUser}>Potvrdi</button>
                </div>
            </div>

            <div id="overlay3" className="hidden" onClick={closeModal3} ></div>

            <div className="delete-user hidden">
                <h1 className="admin-h1">Ukloni korisnika</h1>
                <table id="delete-table">
                    <thead>
                        <tr>
                            <th>Korisničko ime</th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user) => (
                            <tr key={user.iduser}>
                                <td>
                                    <button className="delete-lesson-btn" onClick={(e) => showModal2(e)}>
                                        {user.username}
                                    </button>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="admin-reactions hidden">
                <h1 className="admin-h1">Vidi reakcije</h1>
                <select
                    id="select-lesson2"
                    name="lesson"
                    type="text"
                    className="admin-title"
                    onChange={handleSetLesson}
                >
                    <option selected='selected' value='default'>Izaberi lekciju</option>
                    {less.map((lesson) => ( 
                        <option key={lesson.idlesson} value={lesson.name}>{lesson.name}</option>
                    ))}
                </select>
                <div id="comm-div">
                    {lesscurr !== "" && comm !== null ? (comm.map((comment) => (
                        <div key={comment.idcomment}>
                            <div id="one-comm">
                                <p>{comment.desc}</p> <p>{comment.like=='1' ? <img src={slika_like} alt="Like" className="likedislike" /> : <img src={slika_dislike} alt="Dislike" className="likedislike" />}</p>
                            </div>
                        </div>
                    ))) : null}
                </div>
            </div>

        </main>
    )
}

export default Admin;