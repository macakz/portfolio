import React from "react"
import './CSS/Main.css'
import testphoto from '../images/test.jpeg'
function Blog () {
    return (
        <div className="sectionContainer">
            <div className="bPContainer">
                <h1>title</h1>
                <h2>subtitle</h2>
                <p></p>
                <div className="bPImageContainer">
                    <img src={testphoto} alt="test" />
                </div>
            </div>
            <div className="bPContainer">
                <div className="bP">
                    <h1>title</h1>
                    <h2>subtitle</h2>
                    <p></p>
                    <div className="bPImageContainer">
                        <img src={testphoto} alt="test" />
                    </div>
                </div>
            </div>
            <div className="bPContainer">
                <h1>title</h1>
                <h2>subtitle</h2>
                <p></p>
                <div className="bPImageContainer">
                    <img src={testphoto} alt="test" />
                </div>
            </div>
            <div className="bPContainer">
                <h1>title</h1>
                <h2>subtitle</h2>
                <p></p>
                <div className="bPImageContainer">
                    <img src={testphoto} alt="test" />
                </div>
            </div>
        </div >
    )

}

export default Blog
