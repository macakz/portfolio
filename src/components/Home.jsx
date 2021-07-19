import React from "react"
import '../CSS/Main.css'
import posts from '../data/posts.json'
import { Link, } from "react-router-dom";
import sortById from './sortById'

function Home () {
    const latestPost = posts.sort(sortById)
    return (
        <>
            <div className="banner">
                <div className="flexbox">
                    <div className="imageContainer">
                        <img src={require(`../data/images/blogposts/${latestPost[0].image}`).default} alt={latestPost[0].imageAlt} />
                    </div>
                    <div className="content">
                        <h1>{latestPost[0].title}</h1>
                        <h3>{latestPost[0].date}</h3>
                        <p>Click below to check out this and more awesome projects!</p>
                        <br />
                        <Link className="readMore" to="/blog">Read more...</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
