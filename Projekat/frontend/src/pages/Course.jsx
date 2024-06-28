import React, { useEffect, useState } from "react";
import "../styles/course.css";
import { Link, useLocation } from "react-router-dom";
import slika_course1 from "../images/lesson1.png";
import PageNumbers from "./PageNumbers";
import axios from "axios";
import { useContext } from "react";
import { LessonContext } from "../context/lessonContext";

const cards = [
    { id: 1, title: "Lekcija 1", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 2, title: "Lekcija 2", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 3, title: "Lekcija 3", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 4, title: "Lekcija 4", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 5, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 6, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 7, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 8, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 9, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 10, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 11, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 12, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 13, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 14, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 15, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 16, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    { id: 17, title: "Lekcija 5", subtitle: "🌍 Earth Explorer", image: slika_course1 },
    // Add more cards as needed
];

const Course = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;
    // const [lessons, setLessons] = useState(null);    

    const {lessons, course} = useContext(LessonContext);

    const location=useLocation();
    const pathPieces = location.pathname.split("/");
    const courseName = pathPieces[pathPieces.length - 1];
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
    console.log(lessons);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="course-main">
                <h1 id="course-title">{courseTitle}</h1>

                <section id="course-cards">
                    {currentCards.map((card) => (
                        <Link key={card.idlesson} className="course-link">
                            <div className="lesson-card">
                                <img src={card.image} alt={card.name} />
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
