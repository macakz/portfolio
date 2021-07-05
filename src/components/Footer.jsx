import React from "react";
import { Link, } from "react-router-dom";
import './CSS/Footer.css'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Footer () {

    return (
        <div className="footerContainer">
            <div class="wrapper">
                <div class="icon linkedin">
                    <div class="tooltip">LinkedIn</div>
                    <span><AiFillLinkedin /></span>
                </div>
                <div class="icon github">
                    <div class="tooltip">Github</div>
                    <span><AiFillGithub /></span>
                </div>
                <div class="icon instagram">
                    <div class="tooltip">Instagram</div>
                    <span><AiFillInstagram /></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
