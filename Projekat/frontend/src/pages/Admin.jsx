import React, { useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "../styles/admin.css"; 
import { MainLessonContext } from "../context/mainLessonContext";

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
    const [value, setValue] = useState("");
    const { less, allLessons } = useContext(MainLessonContext);
    const [lesscurr, setLesson] = useState(null);

    useEffect(() => {
        allLessons();
    }, []);

    const handleSetLesson = (e) => {
        setLesson(e.target.value);
        const test = less.filter((lesson) => lesson.name === e.target.value);
        setValue(test[0].content);
    }

    if(less===null){
        return <h1>Loading...</h1>
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
                    <ReactQuill
                        className="editor"
                        theme="snow"
                        value={value}
                        onChange={setValue}
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
                    <ReactQuill
                        className="editor"
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </div>
                <button className="admin-btn">Izmijeni</button>
            </div>

        </main>
    )
}

export default Admin;