import React, { useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "../styles/admin.css"; 
import { MainLessonContext } from "../context/mainLessonContext";
import { AdminContext } from "../context/adminContext";

const handleShowAdd = (e) => {
    const add = document.querySelector(".admin-add");
    const update = document.querySelector(".admin-update");
    add.classList.remove('hidden');
    update.classList.add('hidden');
}

const handleShowUpdate = (e) => {
    const add = document.querySelector(".admin-add");
    const update = document.querySelector(".admin-update");
    add.classList.add('hidden');
    update.classList.remove('hidden');
}

const Admin = () => {
    const [lessonText, setValue] = useState("");
    const { less, allLessons } = useContext(MainLessonContext);
    const [lesscurr, setLesson] = useState("");
    const { updateLesson } = useContext(AdminContext);

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
    },[]);

    if(less===null){
        return <h1>Loading...</h1>;
    }

    return (
        <main id="admin-body">

            <div id="admin-action">
                <h1 className="admin-h1">Izaberite akciju</h1>
                
                <div id="admin-btns">
                    <button className="admin-btn" onClick={handleShowAdd}>Dodaj lekciju</button>
                    <button className="admin-btn" onClick={handleShowUpdate}>Izmijeni lekciju</button>
                    <button className="admin-btn">Izbriši lekciju</button>
                    <button className="admin-btn">Ukloni korisnika</button>
                </div>

            </div>

            <div className="admin-add hidden">
                <h1 className="admin-h1">Dodaj lekciju</h1>
                <input
                    type="text"
                    placeholder="Naslov lekcije"
                    className="admin-title"
                />
                <div className="editorContainer">
                    {/* <ReactQuill
                        className="editor"
                        theme="snow"
                        value={lessonText}
                        onChange={setValue}
                    /> */}
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

        </main>
    )
}

export default Admin;