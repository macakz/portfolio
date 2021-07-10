import { useState } from "react";
import profile from '../data/images/profile.jpg'
import resume from '../data/Resume.pdf'
import instagramFeedConfig from "./instagramFeedConfig"
import axios from 'axios'
function About () {
    const sendQuery = async (query) => {
        let data = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${instagramFeedConfig.accessToken}`) 
        console.log(data)
    }
    
    sendQuery()

    return (
        <>
        
            <div className="about" >
                <img src={profile} alt="profilepicture" />
                <div className="flexbox">
                    <div className="content">
                        <h1>hi</h1>
                        <p></p>
                    </div>

                    <div className="resume">
                        <a href={resume} download>Download my resumé</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
