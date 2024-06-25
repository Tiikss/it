import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import "../styles/footer.css"

const Footer = () => {
    return (
        <div id="footer-container">
            <footer>
                <div id="footer-icn-div">
                    <p className="footer-p">Prati nas:</p>
                    <FontAwesomeIcon icon={faInstagram} className="footer-icn" />
                    <p className="footer-p">@lingua_franca</p>
                    <FontAwesomeIcon icon={faFacebook} className="footer-icn" />
                    <p className="footer-p">Lingua Franca</p>
                </div>
                <p className="footer-p">&copy; 2024 Lingua Franca | Sva prava zadržana | Tix</p>
            </footer>
        </div>
    )
}

export default Footer