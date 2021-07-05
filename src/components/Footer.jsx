import React from "react";
import './CSS/Footer.css'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Footer () {

    return (
        <div className="footerContainer">
            <div class="wrapper">
                <a href="https://www.linkedin.com/in/alexandermckerrow">
                    <div class="icon linkedin">
                        <div class="tooltip">LinkedIn</div>
                        <span><AiFillLinkedin /></span>
                    </div>
                </a>
                <a href="https://www.github.com/macakz">
                    <div class="icon github">
                        <div class="tooltip">Github</div>
                        <span><AiFillGithub /></span>
                    </div>
                </a>
                <a href="https://www.instagram.com/macakz">
                    <div class="icon instagram">
                        <div class="tooltip">Instagram</div>
                        <span><AiFillInstagram /></span>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Footer
