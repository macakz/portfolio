import React from "react"
import './CSS/Main.css'
import testphoto from '../images/test.jpeg'
function Blog () {
    return (
        <>
            <div className="blogPost">
                <div className="flexbox">
                    <div className="content">
                        <h1>title</h1>
                        <h3>date</h3>
                        <p>content</p>
                        <button>Read more</button>
                    </div>
                    <div className="imageContainer">
                        <img src={testphoto} alt="" />
                    </div>
                </div>
            </div>
        </>

    )

}

export default Blog
