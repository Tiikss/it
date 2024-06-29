import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/verticalmenu.css";
import { LessonContext } from "../context/lessonContext";
import { useContext } from "react";

const VerticalMenu = ({ lessonName, courseName, lessID }) => {
    const { lessons, course } = useContext(LessonContext);
    const navigate=useNavigate();

    useEffect(() => {
        course(courseName);
    }, []);

    if(lessons===null){
        return <h1>Loading...</h1>
    }

    return (
        <div id="vertical-menu-outer">
            <div className="vertical-menu">
                <ul id="ver-ul">
                    {lessons.map(less => (
                        <li key={less.idlesson} className={`page-item ${less.idlesson === lessID ? 'active' : ''}`}>
                            <a href={`/course/${courseName}/lesson/${less.idlesson}`}>
                                {lessons.idlesson === lessID ? <b>{less.name}</b> : less.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default VerticalMenu;