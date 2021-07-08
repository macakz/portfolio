import React from "react"
import './CSS/Main.css'
import testphoto from '../data/images/test.jpeg'
import posts from '../data/blogPosts.json'

function Home () {
    const latestPost = posts.slice(-1)
    return (
        <>

            <div className="banner">
                <div className="flexbox">
                    <div className="imageContainer">
                        <img src={testphoto} alt="" />
                    </div>
                    <div className="content">
                        <h1>{latestPost[0].title}</h1>
                        <h3>{latestPost[0].date}</h3>
                        <p>{latestPost[0].blurb}</p>
                        <a href={latestPost[0].code}>View the code for {latestPost[0].title} here</a>
                        {latestPost[0].deploy
                            ?
                            <a className="flexbox" href={latestPost[0].deploy} target="_blank" rel="noopener noreferrer">View the deployed project!</a>
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
