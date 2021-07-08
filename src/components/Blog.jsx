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
                                <p>{post.blurb}View the code for hereView the code for hereView the code for hereView the code for hereView the code for hereView the code for hereView the code for hereView the code for herevView the code for hereView the code for hereView the code for hereView the code for hereView the code for here</p>

                                <a className="code" href={post.code}>View the code for here</a>
                                {post.deploy
                                    ?
                                    <a className="flexbox deploy" href="github.com">View it deployed here!</a>
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
