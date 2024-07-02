import React, { useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "../styles/admin.css"; 
import { MainLessonContext } from "../context/mainLessonContext";
import { AdminContext } from "../context/adminContext";
import { LessonContext } from "../context/lessonContext";
import { Link } from "react-router-dom";

const Admin = () => {
    const [lessonText, setValue] = useState("");
    const { less, allLessons } = useContext(MainLessonContext);
    const [lesscurr, setLesson] = useState("");
    const { updateLesson } = useContext(AdminContext);
    const { courseName, lessons, course } = useContext(LessonContext);

    const handleShowAdd = (e) => {
        const add = document.querySelector(".admin-add");
        const update = document.querySelector(".admin-update");
        const del = document.querySelector(".admin-delete");
        add.classList.remove('hidden');
        update.classList.add('hidden');
        del.classList.add('hidden');
    }
    
    const handleShowUpdate = (e) => {
        const add = document.querySelector(".admin-add");
        const update = document.querySelector(".admin-update");
        const del = document.querySelector(".admin-delete");
        add.classList.add('hidden');
        update.classList.remove('hidden');
        del.classList.add('hidden');
    }

    const handleShowDelete = (e) => {
        const add = document.querySelector(".admin-add");
        const update = document.querySelector(".admin-update");
        const del = document.querySelector(".admin-delete");
        add.classList.add('hidden');
        update.classList.add('hidden');
        del.classList.remove('hidden');
    }

    const handleSetLesson = (e) => {
        setLesson(e.target.value);
        let test;
        if(less) {
            test = less.filter((lesson) => lesson.name === e.target.value);
        }
            
        if (test){
            setValue(test[0].content);
        }
    }

    const handleUpdateLesson = (e) => {
        e.preventDefault();
        updateLesson({lessonName: lesscurr, content: lessonText})
    }

    useEffect(() => {
        allLessons();
        course(courseName);
    },[]);

    console.log(less);

    if(less===null){
        return <h1>Loading...</h1>;
    }

    let cn=''
    if(courseName==='begginer'){
        cn='Početni nivo'
    }
    else if(courseName==='advanced'){
        cn='Napredni nivo'
    }
    else {
        cn='Srednji nivo'
    }

    return (
        <main id="admin-body">

            <div id="admin-action">
                <h1 className="admin-h1">Izaberite akciju</h1>
                
                <div id="admin-btns">
                    <button className="admin-btn" onClick={handleShowAdd}>Dodaj lekciju</button>
                    <button className="admin-btn" onClick={handleShowUpdate}>Izmijeni lekciju</button>
                    <button className="admin-btn" onClick={handleShowDelete}>Izbriši lekciju</button>
                    <button className="admin-btn">Ukloni korisnika</button>
                </div>

            </div>

            <div className="admin-add hidden">
                <h1 className="admin-h1">Dodaj lekciju</h1>
                <div id="radio-div">
                    <input type="radio" id="pocetni" name="pocetni" className="admin-radio" />
                    <label htmlFor="pocetni">Početni nivo</label>

                    <input type="radio" id="srednji" name="srednji" className="admin-radio" />
                    <label htmlFor="srednji">Srednji nivo</label>

                    <input type="radio" id="napredni" name="napredni" className="admin-radio" />
                    <label htmlFor="napredni">Napredni nivo</label>
                </div>
                <input
                    type="text"
                    placeholder="Naslov lekcije"
                    className="admin-title"
                />
                <div className="editorContainer">
                    <textarea
                        className="editor"
                        
                    />
                </div>
                <button className="admin-btn">Dodaj</button>
            </div>

            <div className="admin-update hidden">
                <h1 className="admin-h1">Izmijeni lekciju</h1>
                <select
                    name="lesson"
                    type="text"
                    className="admin-title"
                    onChange={handleSetLesson}
                >
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
                <button className="admin-btn" onClick={handleUpdateLesson}>Izmijeni</button>
            </div>

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
                                        <Link to={`/course/begginer`}>
                                            {lesson.name}
                                        </Link>
                                    </div>
                                ))}
                            </td>
                            <td>
                                {less.filter(lesson => lesson.course_name === 'intermediate').map(lesson => (
                                    <div key={lesson.idlesson}>
                                        <Link to={`/course/intermediate`}>
                                            {lesson.name}
                                        </Link>
                                    </div>
                                ))}
                            </td>
                            <td>
                                {less.filter(lesson => lesson.course_name === 'advanced').map(lesson => (
                                    <div key={lesson.idlesson}>
                                        <Link to={`/course/advanced`}>
                                            {lesson.name}
                                        </Link>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </main>
    )
}

export default Admin;