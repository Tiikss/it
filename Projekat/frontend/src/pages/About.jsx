import React from "react"
import "../styles/about.css"
import slike1 from "../images/pic1-about.jpg"
import slike2 from "../images/pic2-about.jpg"
import slike3 from "../images/pic3-about.jpg"
import slike4 from "../images/jeka.jpg"
import slike5 from "../images/anci.jpg"

const About = () => {
    return (
        <div>
            <div id="about-main">
                <div id="us-div">
                    <div id="us-text">
                        <h3>O nama</h3>
                        <p>Dobro došli u "Lingua Franca", vaš pouzdani partner u učenju engleskog jezika! Naša misija je da
                            vam
                            pružimo visokokvalitetno obrazovanje u prijateljskom i motivišućem okruženju. Osnovani s vizijom
                            da
                            premošćujemo jezičke barijere i omogućimo bolju globalnu komunikaciju, "Lingua Franca" se
                            posvećuje
                            tome
                            da vam pomogne da postignete lične i profesionalne ciljeve kroz usavršavanje engleskog jezika.
                        </p>
                    </div>
                    <img src={slike1} alt="Učenje jezika" className="about-img"/>
                </div>

                <div id="access-div">
                    <img src={slike2} alt="Učenje jezika" className="about-img" />
                    <div id="access-text">
                        <h3>Naš pristup</h3>
                        <p>U "Lingua Franca", verujemo da je učenje jezika više od pukog usvajanja gramatike i vokabulara.
                            Naš
                            pristup podrazumeva kombinaciju raznih metoda, tehnološki podržanih resursa i prilagođenih
                            materijala koji su dizajnirani da odgovore na vaše specifične potrebe i stilove učenja. Naši
                            iskusni
                            nastavnici su posvećeni tome da vas inspirišu i vode kroz vaš jezički put, osiguravajući da
                            svaki
                            čas
                            bude produktivan, zanimljiv i zabavan.</p>
                    </div>
                </div>

                <div className="wrapper">
                    <h1>Naše vrijednosti:</h1>
                    <ol role="list">
                        <li>Stručnost – naš tim čine kvalifikovani profesori engleskog jezika koji su strastveni u
                            prenošenju
                            znanja.</li>
                        <li>Inovativnost – uvek tražimo nove i efikasne načine kako bismo unapredili proces učenja i učinili
                            ga
                            što prijatnijim i pristupačnijim za sve.</li>
                        <li>Individualni pristup – razumemo da svaki učenik ima jedinstvene potrebe i ciljeve, te
                            prilagođavamo
                            naš program kako bi maksimalno koristio svakom pojedincu.</li>
                        <li>Zajednica – težimo da stvorimo toplo i podržavajuće okruženje gdje se svi učenici mogu osećati
                            dobrodošlo i motivisano.</li>
                    </ol>
                </div>

                <div id="join-div">
                    <div>
                        <h3>Pridružite nam se!</h3>
                        <p>Bez obzira da li ste početnik koji pravi prve korake u učenju jezika ili napredni student
                            koji
                            želi
                            da
                            usavrši svoje veštine, "Lingua Franca" nudi kurseve koji će zadovoljiti vaše potrebe.</p>
                    </div>
                    <img src={slike3} alt="Učenje jezika" className="about-img" />
                </div>
            </div>

            <div className="metting">
                <div className="title-meet">
                    <h1>Naš tim</h1>
                    <p>Upoznajte strastvene predavače engleskog jezika koji naš kurs čine živim svojom jedinstvenom vizijom
                        i kreativnošću.</p>
                </div>

                <section id="about-cards">
                    <div className="employ" id="first-employ">
                        <img src={slike4} alt="Zaposleni" className="about-emp-img" />
                        <h3>Jelena Rakočević</h3>
                        <p>Tumač za engleski i ruski jezik, usmeni prevodilac</p>
                        <p id="employ-email">✉ jelena.rakocevic94@gmail.com</p>
                    </div>

                    <div className="employ" id="second-employ">
                        <img src={slike5} alt="Zaposleni" className="about-emp-img" />
                        <h3>Ana Radonjić</h3>
                        <p>Profesor engleskog jezika, koordinator za nastavu</p>
                        <p id="employ-email">✉ anaradonjic990@gmail.com</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About