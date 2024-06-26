import React from "react"
import { Link } from "react-router-dom"
import home_slika1 from "../images/sportsman.png"
import home_slika2 from "../images/adult.png"
import home_slika3 from "../images/scholar.png"
import "../styles/home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="conteiner-home">
            <header id="home-header">
                <nav id="home-nav">
                    <ul>
                        <li><Link to="/">Početna</Link></li>
                        <li><Link to="/about">O nama</Link></li>
                        <li><Link to="/profile">Nalog</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="main-home">

                <div id="title-home">
                    <div id="title-div-home">
                        <h1 id="home-ttl-h1">Lingua Franca</h1>
                    </div>
                </div>

                <div id="firstdiv-home" className="cards-home">
                    <img src={home_slika1} alt="Ilustracija" className="ilusimg" />
                    <h1 className="home-h1">Početni nivo</h1>
                    <p className="home-p">Dobrodošli na kurs engleskog jezika za početnike! Ovaj kurs je dizajniran da polaznicima pruži
                        temeljno razumijevanje engleskog jezika, fokusirajući se na ključne jezičke vještine koje su potrebne
                        za svakodnevnu komunikaciju. Kroz interaktivne lekcije, zanimljive aktivnosti i praktične zadatke,
                        polaznici će postepeno graditi svoje znanje i samopouzdanje u korišćenju engleskog jezika.</p>
                    <p className="home-p">Oblasti koje pokriva kurs:</p>
                    <ol>
                        <li>Osnove gramatike: Upoznavanje sa osnovnim gramatičkim strukturama, uključujući imenice, glagole,
                            pridjeve, članove i prepozicije. Učenici će naučiti kako da pravilno formiraju rečenice i
                            postavljaju pitanja.</li>
                        <li>Vokabular: Razvijanje osnovnog vokabulara koji obuhvata svakodnevne teme poput brojeva, boja,
                            hrane, porodice, hobija i uobičajenih izraza. Cilj je omogućiti polaznicima da se udobno
                            izražavaju u svakodnevnim situacijama.</li>
                        <li>Čitanje i pisanje: Uvođenje u osnove čitanja i pisanja na engleskom jeziku. Fokus na razumijevanju
                            jednostavnih tekstova i pisanju kratkih odgovora i opisa.</li>
                    </ol>
                    <p className="home-p">Kurs je namijenjen potpunim početnicima ili onima koji žele da osvježe svoje osnovno znanje engleskog
                        jezika. Na kraju kursa, polaznici će biti sposobni da se sporazumijevaju u osnovnim svakodnevnim
                        situacijama i da sa većom sigurnošću koriste engleski jezik. Pridružite nam se da zajedno krenemo na
                        ovu jezičku avanturu!</p>
                    <button className="home-btn" onClick={() => navigate(`/course/begginer`)}>Počni! 📚</button>
                </div>

                <div id="seconddiv-home" className="cards-home">
                    <img src={home_slika2} alt="Ilustracija" className="ilusimg" />
                    <h1 className="home-h1">Srednji nivo</h1>
                    <p className="home-p">Dobrodošli na kurs engleskog jezika srednjeg nivoa! Ovaj kurs je osmišljen da dalje razvija jezičke
                        vještine stečene na početnom nivou, proširujući znanje i vještine neophodne za komunikaciju u širem
                        spektru situacija. Kroz kombinaciju teoretskih lekcija, praktičnih vježbi, i interaktivnih zadataka,
                        polaznici će unaprijediti svoje razumijevanje engleskog jezika i sposobnost da ga efikasno koriste u
                        svakodnevnom i profesionalnom okruženju.</p>
                    <p className="home-p">Oblasti koje pokriva kurs:</p>
                    <ol>
                        <li>Proširena gramatika: Detaljno izučavanje složenijih gramatičkih struktura poput vremena glagola,
                            pasiva, modalnih glagola i indirektnog govora, sa posebnim naglaskom na njihovu praktičnu
                            upotrebu.</li>
                        <li>Proširen vokabular: Obogaćivanje vokabulara relevantnim temama kao što su tehnologija, umjetnost,
                            nauka, politika i poslovanje. Cilj je da se polaznici osjećaju komforno pri razgovoru, čitanju i
                            pisanju o različitim temama.</li>
                        <li>Čitanje i pisanje: Analiza tekstova različitih žanrova, uključujući novinske članke, eseje i
                            književnost. Vježbe pisanja koje obuhvataju sastavljanje izvještaja, formalnih pisama i eseja.
                        </li>
                    </ol>
                    <p className="home-p">Kurs je idealan za one koji već imaju osnovno znanje engleskog jezika i žele da unaprijede svoju
                        kompetenciju za neometanu upotrebu jezika u različitim kontekstima. Polaznici će na kraju kursa
                        steći veću sigurnost u svoje jezičke sposobnosti, što će im pomoći u daljem obrazovanju i
                        profesionalnom napredovanju.</p>
                    <button className="home-btn" onClick={() => navigate(`/course/intermediate`)}>Počni! 📚</button>
                </div>

                <div id="thirddiv-home" className="cards-home">
                    <img src={home_slika3} alt="Ilustracija" className="ilusimg" />
                    <h1 className="home-h1">Napredni nivo</h1>
                    <p className="home-p">Dobrodošli na kurs engleskog jezika naprednog nivoa! Ovaj kurs je namijenjen polaznicima koji već dobro
                        vladaju engleskim jezikom i žele da svoje znanje dovedu do nivoa izvornog govornika. Kroz izazovne
                        aktivnosti, detaljne analize i napredne komunikacijske vježbe, polaznici će finiširati svoje jezičke
                        vještine i sposobnost da efektivno i precizno koriste engleski jezik u svim aspektima.</p>
                    <p className="home-p">Oblasti koje pokriva kurs:</p>
                    <ol>
                        <li>Majstorstvo u gramatici: Perfekcionisanje znanja o kompleksnim gramatičkim strukturama i njihova
                            upotreba u sofisticiranoj pisanoj i usmenoj komunikaciji.</li>
                        <li>Napredni vokabular: Razvijanje izuzetno bogatog vokabulara koji omogućava detaljno izražavanje
                            misli i ideja, kao i razumijevanje suptilnih razlika u značenju.</li>
                        <li>Akademske vještine čitanja i pisanja: Analiza i sinteza akademskih tekstova, kritičko
                            razmišljanje i pisanje istraživačkih radova i stručnih članaka.</li>
                    </ol>
                    <p className="home-p">Ovaj kurs je posebno pogodan za one koji teže akademskoj karijeri ili profesionalnom radu na
                        engleskom jeziku u međunarodnom okruženju. Na kraju kursa, polaznici će biti u mogućnosti da sa
                        lakoćom koriste engleski jezik u najzahtjevnijim kontekstima, što će im otvoriti vrata globalnih
                        mogućnosti.</p>
                    <button className="home-btn" onClick={() => navigate(`/course/advanced`)}>Počni! 📚</button>
                </div>
            </div>

            <footer id="home-footer">
                <div className="home-footer-content">
                    <p className="home-footer-p">Prati nas:</p>
                    <div id="home-footer-icn-div">
                        <FontAwesomeIcon icon={faInstagram} className="home-footer-icn" />
                        <p className="home-footer-p">@lingua_franca</p>
                        <FontAwesomeIcon icon={faFacebook} className="home-footer-icn" />
                        <p className="home-footer-p">Lingua Franca</p>
                    </div>
                </div>
                <p className="home-footer-p">&copy; 2024 Lingua Franca | Sva prava zadržana | Tix</p>
            </footer>
        </div>
    )
}

export default Home