import React, { useEffect, useState } from "react";
import "../styles/course.css";
import { Link, useLocation } from "react-router-dom";
import PageNumbers from "../components/PageNumbers";
import axios from "axios";
import { useContext } from "react";
import { LessonContext } from "../context/lessonContext";

const Course = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;

    const location=useLocation();
    const pathPieces = location.pathname.split("/");
    const courseName = pathPieces[pathPieces.length - 1];
    const {lessons, course} = useContext(LessonContext);

    let courseTitle = "";
    if(courseName === "begginer") {
        courseTitle = "POČETNI NIVO";
    } else if(courseName === "intermediate") {
        courseTitle = "SREDNJI NIVO";
    } else if(courseName === "advanced") {
        courseTitle = "NAPREDNI NIVO";
    }

    useEffect(() => {
        course(courseName);
    }, []);

    if(lessons===null){
        return <h1>Loading...</h1>
    }

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = lessons.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="course-main">
                <h1 id="course-title">{courseTitle}</h1>

                <section id="course-cards">
                    {currentCards.map((card) => (
                        <Link key={card.idlesson} className="course-link" to={`/course/${courseName}/lesson/${card.idlesson}`}>
                            <div className="lesson-card">
                                <img src={`${process.env.PUBLIC_URL}/${card.image}`} alt={card.name} />
                                <h3>{card.name}</h3>
                            </div>
                        </Link>
                    ))}
                </section>
                <PageNumbers
                    cardsPerPage={cardsPerPage}
                    totalCards={lessons.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default Course;
