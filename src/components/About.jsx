import React from "react";
import profile from '../data/images/profile.jpg'
import resume from '../data/Resume.pdf'

function About () {

    return (
        <>
            <div className="about" >
                <div className="flexbox">
                    <div className="content">
                        <h1>hi</h1>
                        <p></p>
                    </div>
                    <div>
                        <img src={profile} alt="profilepicture" />
                    </div>
                    <div className="resume">
                        <a href={resume} download>Download my resume </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
