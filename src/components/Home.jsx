import React from "react"
import './CSS/Main.css'
import testphoto from '../images/test.jpeg'

function Home () {
    return (
        <>
            <div className="banner">
                <div className="flexbox">
                    <div className="imageContainer">
                        <img src={testphoto} alt="" />
                    </div>
                    <div className="content">
                        <h1>title</h1>
                        <h3>date</h3>
                        <p>content</p>
                        <button>Readmore</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
