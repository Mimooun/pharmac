import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/logo.png'
import '../styles/footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="max-width">
                <div className="container">
                    <div className="footer-content">
                        <img src={logo} alt="" />
                        <div className="social-media">
                            <FontAwesomeIcon icon={faGithub} className="github"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter} className="twitter"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faFacebook} className="facebook"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faYoutube} className="youtube"></FontAwesomeIcon>
                        </div>
                        <div className="text">Copyright © 2021-2022 All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;