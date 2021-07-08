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
                        <h3>hi</h3>
                        <p></p>
                    </div>
                    <div>
                        <img src={profile} alt="" />
                    </div>
                    <a href={resume} download>download my resume!</a>
                </div>
            </div>
        </>
    )
}

export default About
