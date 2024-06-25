import React from "react"
import { Link } from "react-router-dom"
import home_slika1 from "../images/sportsman.png"
import home_slika2 from "../images/adult.png"
import home_slika3 from "../images/scholar.png"
import "../styles/home.css"

const Home = () => {
    return (
        <div className="conteiner-home">
            <header>
                <nav>
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
                        <h1>Lingua Franca</h1>
                    </div>
                </div>

                <div id="firstdiv-home" className="cards-home">
                    <img src={home_slika1} alt="Ilustracija" className="ilusimg" />
                    <h1>Početni nivo</h1>
                    <p>Dobrodošli na kurs engleskog jezika za početnike! Ovaj kurs je dizajniran da polaznicima pruži
                        temeljno razumevanje engleskog jezika, fokusirajući se na ključne jezičke veštine koje su potrebne
                        za svakodnevnu komunikaciju. Kroz interaktivne lekcije, zanimljive aktivnosti i praktične zadatke,
                        polaznici će postepeno graditi svoje znanje i samopouzdanje u korišćenju engleskog jezika.</p>
                    <p>Oblasti koje pokriva kurs:</p>
                    <ol>
                        <li>Osnove gramatike: Upoznavanje sa osnovnim gramatičkim strukturama, uključujući imenice, glagole,
                            prideve, članove i prepozicije. Učenici će naučiti kako da pravilno formiraju rečenice i
                            postavljaju pitanja.</li>
                        <li>Vokabular: Razvijanje osnovnog vokabulara koji obuhvata svakodnevne teme poput brojeva, boja,
                            hrane, porodice, hobija i uobičajenih izraza. Cilj je omogućiti polaznicima da se udobno
                            izražavaju u svakodnevnim situacijama.</li>
                        <li>Čitanje i pisanje: Uvođenje u osnove čitanja i pisanja na engleskom jeziku. Fokus na razumevanju
                            jednostavnih tekstova i pisanju kratkih odgovora i opisa.</li>
                    </ol>
                    <p>Kurs je namenjen potpunim početnicima ili onima koji žele da osveže svoje osnovno znanje engleskog
                        jezika. Na kraju kursa, polaznici će biti sposobni da se sporazumevaju u osnovnim svakodnevnim
                        situacijama i da sa većom sigurnošću koriste engleski jezik. Pridružite nam se da zajedno krenemo na
                        ovu jezičku avanturu!</p>
                    <button>Počni! 📚</button>
                </div>

                <div id="seconddiv-home" className="cards-home">
                    <img src={home_slika2} alt="Ilustracija" className="ilusimg" />
                    <h1>Srednji nivo</h1>
                    <p>Dobrodošli na kurs engleskog jezika srednjeg nivoa! Ovaj kurs je osmišljen da dalje razvija jezičke
                        veštine stečene na početnom nivou, proširujući znanje i veštine neophodne za komunikaciju u širem
                        spektru situacija. Kroz kombinaciju teoretskih lekcija, praktičnih vežbi, i interaktivnih zadataka,
                        polaznici će unaprediti svoje razumevanje engleskog jezika i sposobnost da ga efikasno koriste u
                        svakodnevnom i profesionalnom okruženju.</p>
                    <p>Oblasti koje pokriva kurs:</p>
                    <ol>
                        <li>Proširena gramatika: Detaljno izučavanje složenijih gramatičkih struktura poput vremena glagola,
                            pasiva, modalnih glagola i indirektnog govora, sa posebnim naglaskom na njihovu praktičnu
                            upotrebu.</li>
                        <li>Proširen vokabular: Obogaćivanje vokabulara relevantnim temama kao što su tehnologija, umetnost,
                            nauka, politika i poslovanje. Cilj je da se polaznici osećaju komforno pri razgovoru, čitanju i
                            pisanju o različitim temama.</li>
                        <li>Čitanje i pisanje: Analiza tekstova različitih žanrova, uključujući novinske članke, eseje i
                            književnost. Vežbe pisanja koje obuhvataju sastavljanje izvještaja, formalnih pisama i eseja.
                        </li>
                    </ol>
                    <p>Kurs je idealan za one koji već imaju osnovno znanje engleskog jezika i žele da unaprede svoju
                        kompetenciju za neometanu upotrebu jezika u različitim kontekstima. Polaznici će na kraju kursa
                        steći veću sigurnost u svoje jezičke sposobnosti, što će im pomoći u daljem obrazovanju i
                        profesionalnom napredovanju.</p>
                    <button>Počni! 📚</button>
                </div>

                <div id="thirddiv-home" className="cards-home">
                    <img src={home_slika3} alt="Ilustracija" className="ilusimg" />
                    <h1>Napredni nivo</h1>
                    <p>Dobrodošli na kurs engleskog jezika naprednog nivoa! Ovaj kurs je namenjen polaznicima koji već dobro
                        vladaju engleskim jezikom i žele da svoje znanje dovedu do nivoa izvornog govornika. Kroz izazovne
                        aktivnosti, detaljne analize i napredne komunikacijske vežbe, polaznici će finiširati svoje jezičke
                        veštine i sposobnost da efektivno i precizno koriste engleski jezik u svim aspektima.</p>
                    <p>Oblasti koje pokriva kurs:</p>
                    <ol>
                        <li>Majstorstvo u gramatici: Perfekcionisanje znanja o kompleksnim gramatičkim strukturama i njihova
                            upotreba u sofisticiranoj pisanoj i usmenoj komunikaciji.</li>
                        <li>Napredni vokabular: Razvijanje izuzetno bogatog vokabulara koji omogućava detaljno izražavanje
                            misli i ideja, kao i razumevanje suptilnih razlika u značenju.</li>
                        <li>Akademske veštine čitanja i pisanja: Analiza i sinteza akademskih tekstova, kritičko
                            razmišljanje i pisanje istraživačkih radova i stručnih članaka.</li>
                    </ol>
                    <p>Ovaj kurs je posebno pogodan za one koji teže akademskoj karijeri ili profesionalnom radu na
                        engleskom jeziku u međunarodnom okruženju. Na kraju kursa, polaznici će biti u mogućnosti da sa
                        lakoćom koriste engleski jezik u najzahtevnijim kontekstima, što će im otvoriti vrata globalnih
                        mogućnosti.</p>
                    <button>Počni! 📚</button>
                </div>
            </div>

            <footer>
                <div className="footer-content">
                    <p>Prati nas:</p>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <p>&copy; 2024 Lingua Franca | Sva prava zadržana | Tix</p>
        </footer>
        </div>
    )
}

export default Home