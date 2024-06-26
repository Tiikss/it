import React from "react";
import { Link } from "react-router-dom";
import "../styles/lesson.css";
import lesson_slika1 from "../images/logo3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import slika_like from "../images/like_icon.png";
import slika_dislike from "../images/dislike_icon.png";

const Lesson = () => {
    return (
        <div className="lesson-container">
            <header id="lesson-header">
                <nav className="lesson-nav lesson-padding-nav">
                    <img src={lesson_slika1} alt="Logo" id="lesson-logo-img" />
                    <ul>
                        <li><Link to="/">Početna</Link></li>
                        <li><Link to="/about">O nama</Link></li>
                        <li><Link to="/profile">Nalog</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="lesson-main">
                <div id="vertical-menu-outer">
                    <div className="vertical-menu">
                        <Link to="./" className="active les-link">Neki naziv lekcije</Link>
                        <Link to="./" className="les-link">Link 1</Link>
                        <Link to="./" className="les-link">Link 2</Link>
                        <Link to="./" className="les-link">Link 3</Link>
                        <Link to="./" className="les-link">Link 4</Link>
                        <Link to="./" className="les-link">Link 5</Link>
                        <Link to="./" className="les-link">Link 6</Link>
                        <Link to="./" className="les-link">Link 7</Link>
                        <Link to="./" className="les-link">Link 8</Link>
                        <Link to="./" className="les-link">Link 9</Link>
                        <Link to="./" className="les-link">Link 10</Link>
                        <Link to="./" className="les-link">Link 11</Link>
                        <Link to="./" className="les-link">Link 12</Link>
                        <Link to="./" className="les-link">Link 13</Link>
                        <Link to="./" className="les-link">Link 14</Link>
                        <Link to="./" className="les-link">Link 15</Link>
                        <Link to="./" className="les-link">Link 15</Link>
                        <Link to="./" className="les-link">Link 15</Link>
                        <Link to="./" className="les-link">Link 15</Link>
                        <Link to="./" className="les-link">Link 15</Link>
                        <Link to="./" className="les-link">Link 15</Link>
                        <Link to="./" className="les-link">Link 15</Link>
                        <Link to="./" className="les-link">Link 15</Link>
                    </div>
                </div>

                <div className="lesson-content">
                    <div className="lesson-txt">
                        <h1 className="lesson-h1">🌍 Earth Explorer</h1>
                        <p id="explain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque consequatur
                            mollitia porro
                            ratione
                            eos non fuga officia cumque natus, dolores voluptatem iure sapiente! Soluta facere cupiditate
                            quos.
                            Alias, explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, neque
                            deleniti,
                            reprehenderit explicabo, nostrum culpa debitis harum minus pariatur quibusdam nulla magnam?
                            Sunt,
                            autem.
                            Ullam voluptatem atque nam architecto mollitia?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque consequatur
                            mollitia porro
                            ratione
                            eos non fuga officia cumque natus, dolores voluptatem iure sapiente! Soluta facere cupiditate
                            quos.
                            Alias, explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, neque
                            deleniti,
                            reprehenderit explicabo, nostrum culpa debitis harum minus pariatur quibusdam nulla magnam?
                            Sunt,
                            autem.
                            Ullam voluptatem atque nam architecto mollitia?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque consequatur
                            mollitia porro
                            ratione
                            eos non fuga officia cumque natus, dolores voluptatem iure sapiente! Soluta facere cupiditate
                            quos.
                            Alias, explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, neque
                            deleniti,
                            reprehenderit explicabo, nostrum culpa debitis harum minus pariatur quibusdam nulla magnam?
                            Sunt,
                            autem.
                            Ullam voluptatem atque nam architecto mollitia?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque consequatur
                            mollitia porro
                            ratione
                            eos non fuga officia cumque natus, dolores voluptatem iure sapiente! Soluta facere cupiditate
                            quos.
                            Alias, explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, neque
                            deleniti,
                            reprehenderit explicabo, nostrum culpa debitis harum minus pariatur quibusdam nulla magnam?
                            Sunt,
                            autem.
                            Ullam voluptatem atque nam architecto mollitia?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque consequatur
                            mollitia porro
                            ratione
                            eos non fuga officia cumque natus, dolores voluptatem iure sapiente! Soluta facere cupiditate
                            quos.
                            Alias, explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, neque
                            deleniti,
                            reprehenderit explicabo, nostrum culpa debitis harum minus pariatur quibusdam nulla magnam?
                            Sunt,
                            autem.
                            Ullam voluptatem atque nam architecto mollitia?</p>
                        <form className="test">
                            <label htmlFor="answer1">Ovo je neko pitanje na koje neko treba da da neki odgovor koji treba da
                                bude tacan, hehe...</label>
                            <input type="text" name="answer" id="answer1" required/>
                            <input type="submit" value="Potvrdi" id="subm"/>
                        </form>

                    </div>

                    <div id="comment-div">
                        <p id="less-p">Tvoje mišljenje nam mnogo znači! Reci nam šta misliš o lekciji!</p>
                        <form className="lesson-comment-form">
                            <textarea name="comment" id="lesson-comment" cols="40" rows="5" required></textarea>
                            <div id="like-div">
                                <label id="like-lbl">
                                    <input type="radio" id="like" name="like" value="like" />
                                    <img src={slika_like} alt="Like" id="like-img" />
                                </label>

                                <label id="dislike-lbl">
                                    <input type="radio" id="dislike" name="like" value="dislike" />
                                    <img src={slika_dislike} alt="Dislike" id="dislike-img" />
                                </label>
                            </div>

                            <input type="submit" value="Pošalji" id="lesson-subm"/>
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
