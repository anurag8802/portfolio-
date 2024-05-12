import React from 'react'
import '../styles/home.css'
import satellite from '../images/satellite.png'
const MainSection = () => {
    return (
        <>
            <div className="content" id="home">
                <div className="container">
                    <div className="base">
                        <div className="intro-cont">
                            <div className="position" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
                                <div className="viewbox">

                                </div>
                                <div className="viewbox-2">

                                </div>
                                <div className="gradient"></div>
                            </div>
                            <div className="satellite">
                                <img src={satellite} className="satellite" alt="" />
                            </div>
                            <p id="name">ADITYA MISHRA</p>
                            <p id="intro-para">
                                Hi, I am Aditya Mishra,<br />
                                Full Stack Web Developer and a 3rd yr student majoring in
                                Mathematics and
                                Computer Science</p>
                            {/* <img className="logo-img pballs" data-speed="0.71" src={logo} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection