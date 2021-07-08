import React from "react"
import './CSS/Main.css'
import testphoto from '../data/images/test.jpeg'
import posts from '../data/posts.json'

function Blog () {
const showLatest = posts.reverse()

    return (
        <>
            {showLatest.map(post => {
                return (
                    <div className="blog">
                        <div className="flexbox">
                            <div className="content">
                                <h1>{post.title}</h1>
                                <h3>{post.date}</h3>
                                <p>{post.blurb}</p>
                                <a href={post.code}>View the code for {post.title} here</a>
                                {post.deploy
                                    ?
                                    <a className="flexbox" href="github.com">View the deployed project!</a>
                                    : null
                                }
                            </div>
                            <div className="imageContainer">
                                <img src={testphoto} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })}

        </>

    )

}

export default Blog
