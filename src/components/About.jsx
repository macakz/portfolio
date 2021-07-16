import profile from '../data/images/profile.jpg'
import resume from '../data/Resume.pdf'
import instagramFeedConfig from "../config/instaConfig"
import InstagramFeed from "./Instagram/InstagramFeed";

function About () {
    return (
        <>
            <div className="about" >
                <div className="profilePic">
                    <img src={profile} alt="profilepicture" />
                </div>
                <div className="flexbox">
                    <div className="content">
                        <h1>hi</h1>
                        <p></p>
                    </div>
                    <div className="resume">
                        <a href={resume} download>Download my resumé</a>
                    </div>
                </div>
                <div className="instaContainer">
                    <h1>what I've been up to...</h1>
                    <InstagramFeed token={instagramFeedConfig.accessToken} limit={6} />
                </div>
            </div>
        </>
    )
}

export default About
