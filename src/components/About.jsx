import profile from '../data/images/profile.jpg'
import resume from '../data/Resume.pdf'
import instagramFeedConfig from "./instagramFeedConfig"
import InstagramFeed from "./InstagramFeed";

function About () {
    return (
        <>
        <InstagramFeed token={instagramFeedConfig.accessToken} limit={12}/>
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
