import React from "react"
import './CSS/Main.css'
import testphoto from '../images/test.jpeg'
function Blog () {
    return (
        <>
            <div className="blogPost">
                <div className="flexBox">
                    <div className="bPContent">
                        <h1>title</h1>
                        <h3>date</h3>
                        <p>content</p>
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
