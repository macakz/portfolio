import React from "react"
import './CSS/Main.css'
import testphoto from '../data/images/test.jpeg'
import posts from '../data/blogPosts.json'
function Blog () {

    return (
        <>
            {posts.map(post => {
                return (
                    <div className="blogPost">
                        <div className="flexbox">
                            <div className="content">
                                <h1>{post.title}</h1>
                                <h3>{post.date}</h3>
                                <p>{post.blurb}</p>
                                <button onClick={() => {}}>Read more</button>
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
