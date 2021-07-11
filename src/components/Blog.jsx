import React from "react"
import '../CSS/Main.css'
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
                                <h4>Built with: {post.tech}</h4>
                                <p>{post.content}</p>
                                <div className="flexbox">
                                    <a className="code" target="_blank" rel="noopener noreferrer" href={post.code}>View the code for here asdasd  {' '}</a>
                                    {post.deploy
                                        ?
                                        <a className="flexbox deploy" target="_blank" rel="noopener noreferrer" href={post.deploy}>or view it deployed here</a>
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="imageContainer">
                                <img src={require(`../data/images/blogposts/${post.image}`).default} alt={post.imageAlt} />
                            </div>
                        </div>
                    </div>
                )
            })}

        </>

    )

}

export default Blog
