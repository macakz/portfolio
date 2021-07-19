import React from "react"
import '../CSS/Main.css'
import posts from '../data/posts.json'

function Blog () {
    function sortById (a, b) {
        const idA = a.id
        const idB = b.id

        let comparison = 0;
        if (idA < idB) {
            comparison = 1;
        } else if (idA > idB) {
            comparison = -1;
        }
        return comparison;
    }
    const showLatest = posts.sort(sortById)

    return (
        <>
            {showLatest.map(post => {
                return (
                    <div key={post.id} className="blog">
                        <div className="flexbox">
                            <div className="content">
                                <h1>{post.title}</h1>
                                <h3>{post.date}</h3>
                                <h4>Built with: {post.tech}</h4>
                                <p>{post.content}</p>
                                {post.code
                                    ?
                                    <a className="code" target="_blank" rel="noopener noreferrer" href={post.code}>View the repository here.</a>
                                    : null
                                }
                                {post.deploy
                                    ?
                                    <a className="flexbox deploy" target="_blank" rel="noopener noreferrer" href={post.deploy}>View it deployed here.</a>
                                    : null
                                }
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
