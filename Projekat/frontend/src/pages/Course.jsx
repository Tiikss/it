import React, { useState } from "react";
import "../styles/course.css";
import { Link } from "react-router-dom";
import slika_course1 from "../images/lesson1.png";
import PageNumbers from "./PageNumbers";

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

    // Calculate the indices of the cards to be shown on the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="course-main">
                <h1 id="course-title">POČETNI NIVO</h1>

                <section id="course-cards">
                    {currentCards.map((card) => (
                        <Link key={card.id} className="course-link">
                            <div className="lesson-card">
                                <img src={card.image} alt={card.title} />
                                <h3>{card.title}</h3>
                                <h1>{card.subtitle}</h1>
                            </div>
                        </Link>
                    ))}
                </section>
                <PageNumbers
                    cardsPerPage={cardsPerPage}
                    totalCards={cards.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default Course;
