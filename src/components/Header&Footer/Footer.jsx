import React from "react";
import '../../CSS/Footer.css'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Footer () {

    return (
        <div className="footerContainer">
            <div className="wrapper">
                <a href="https://www.linkedin.com/in/alexandermckerrow" target="_blank" rel="noopener noreferrer">
                    <div className="icon linkedin">
                        <div className="tooltip">LinkedIn</div>
                        <span><AiFillLinkedin /></span>
                    </div>
                </a>
                <a href="https://www.github.com/macakz" target="_blank" rel="noopener noreferrer">
                    <div className="icon github">
                        <div className="tooltip">Github</div>
                        <span><AiFillGithub /></span>
                    </div>
                </a>
                <a href="https://www.instagram.com/macakz" target="_blank" rel="noopener noreferrer">
                    <div className="icon instagram">
                        <div className="tooltip">Instagram</div>
                        <span><AiFillInstagram /></span>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Footer
