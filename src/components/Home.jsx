import React from "react"
import './CSS/Main.css'
import testphoto from '../data/images/test.jpeg'
import posts from '../data/posts.json'
import { Link, } from "react-router-dom";

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
                        <p>to read more about this project and this one click below</p>
                        <br />
                        <div>
                            <Link className="readMore" to="/blog">Read more...</Link>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
