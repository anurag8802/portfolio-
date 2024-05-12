import React, { useRef } from 'react'
import '../styles/about.css'
import photo from '../images/profile.png'
import icons from '../images/index'
const About = () => {
    const aboutWindow = useRef();
    return (
        <>
            <div className="about" id="about">
                <div className="application" onDoubleClick={() => {
                    if (aboutWindow.current.style.opacity === "0") {
                        let element = document.querySelector('.profile-in-dock');
                        aboutWindow.current.style.width = "90%";
                        aboutWindow.current.style.height = "70%";
                        aboutWindow.current.style.left = "0%";
                        aboutWindow.current.style.top = "0%";
                        aboutWindow.current.style.opacity = "1";
                        element.style.display = "none";
                    }
                }}>
                    <img src={photo} alt="" width={"100%"} />
                    <span style={{ fontWeight: "600", fontSize: "small", textShadow: ".15em .15em .5em black" }}>About</span>
                </div>
                <div className="about-main" ref={aboutWindow}>
                    <div className="macOs-header">
                        <div className="header-btns">
                            <span className="close" onClick={() => {
                                aboutWindow.current.style.opacity = "0";
                                aboutWindow.current.style.width = "10%";
                                aboutWindow.current.style.height = "20%";
                                aboutWindow.current.style.left = "-33%";
                                aboutWindow.current.style.top = "-5%";
                            }}></span>
                            <span className="minimise" onClick={() => {
                                let element = document.querySelector('.profile-in-dock');
                                if (aboutWindow.current.style.opacity !== "0") {
                                    aboutWindow.current.style.width = "20%";
                                    aboutWindow.current.style.height = "20%";
                                    aboutWindow.current.style.left = "clamp(10%,20%,30%)";
                                    aboutWindow.current.style.top = "30%";
                                    aboutWindow.current.style.opacity = "0";
                                    element.style.display = "flex";
                                }
                            }}></span>
                            <span className="expand">
                            </span>
                        </div>
                        <div className="about-title">
                            <span>About</span>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="about-navigation">
                            <h2 className="navigation-heading">About Me</h2>
                            <div className="profile">
                                <img src={photo} alt="aditya mishra" className="profile-pic" width={"25%"}/>
                                <h4>Aditya Mishra</h4>
                            </div>
                            <hr style={{ borderColor: "#b9b3aa4a" }} />
                            <ul className='about-elements'>
                                <li><a href="#overview" className='active' onClick={(e) => {
                                    let eles = document.querySelectorAll('.about-elements li a');
                                    for (let n of eles) {
                                        if (e.target !== n) {
                                            n.classList.remove('active');
                                        }
                                        else {
                                            n.classList.add('active');
                                        }
                                    }
                                }}>Overview</a></li>
                                <li><a href="#hobbies" onClick={(e) => {
                                    let eles = document.querySelectorAll('.about-elements li a');
                                    for (let n of eles) {
                                        if (e.target !== n) {
                                            n.classList.remove('active');
                                        }
                                        else {
                                            n.classList.add('active');
                                        }
                                    }
                                }}>Hobbies</a></li>
                                <li><a href="#achievements" onClick={(e) => {
                                    let eles = document.querySelectorAll('.about-elements li a');
                                    for (let n of eles) {
                                        if (e.target !== n) {
                                            n.classList.remove('active');
                                        }
                                        else {
                                            n.classList.add('active');
                                        }
                                    }
                                }}>Achievements</a></li>
                            </ul>
                        </div>
                        <div className="my-text">
                            <div className="frame">
                                <div id="overview" className='about-overviews'>
                                    <h3 style={{ textAlign: 'center', margin: ".3em 0" }}>Overview</h3>
                                    <hr style={{ borderColor: "#b9b3aa4a" }} />
                                    <p>
                                        Hello, I am Aditya Mishra , 🙋‍♂️. I am a sophomore at Delhi Technological University, Delhi. Right now I am pursuing a 🎓 degree of bachelor's of technology in Mathematics and Computing Engineering.
                                    </p>
                                </div>
                                <div id="hobbies" className='about-overviews'>
                                    <h3 style={{ textAlign: 'center', margin: ".3em 0" }}>Hobbies</h3>
                                    <hr/>
                                    <ul>
                                        <li><span>I love to play Football <span>⚽️</span></span>
                                        </li>
                                        <hr/>
                                        <li><span>Sometimes I play chess as well <span> ♔♚</span></span></li>
                                        <hr />
                                        <li><span>I watch memes in my free time <span className='memes'>🤣</span></span></li>
                                        <hr/>
                                        <li><span>I watch movies as well,RRR,my favourite <span className='movies'>🐎 🏍️</span></span></li>

                                    </ul>
                                </div>
                                <div id="achievements" className='about-overviews'>
                                    <h3 style={{ textAlign: 'center', margin: ".3em 0" }}>Achievements</h3>
                                    <hr style={{ borderColor: "#b9b6b236" ,marginBottom:".75em"}} />
                                    <ul>
                                        <li><span className='timestamp'>Feb - 2023</span> || I was selected as a webdev intern in the Univerity Students Internship Program (USIP) DTU</li>
                                        <hr />
                                        <li><span className='timestamp'>Jan - 2023</span> || I got an opportunity to become a technical head at Mathematics and Computing Society-DTU</li>
                                        <hr />
                                        <li><span className='timestamp'>Dec - 2021</span> || I was among the top 10% students to qualify for the IIT Entrance Exam (JEE Adv)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-footer">
                    <div className="footer-content">
                        <div className="main-dock-icons">
                            <span className="about-footer-icons"><img src={icons.icons.terminal} alt=""/></span>
                            <span className="about-footer-icons"><img src={icons.icons.vscode} alt=""/></span>
                            <span className="about-footer-icons chrome-dotted"><img src={icons.icons.chrome} alt="" /></span>
                            <span className="about-footer-icons"><img src={icons.icons.safari} alt="" /></span>
                            <span className="about-footer-icons"><img src={icons.icons.mail} alt="" /></span>
                            <span className="about-footer-icons" style={{boxShadow:".1em 0 0 0 black"}}><img src={icons.icons.settings} alt="" /></span>
                            <span className="about-footer-icons profile-in-dock" onClick={() => {
                                let element = document.querySelector(".profile-in-dock")
                                aboutWindow.current.style.width = "90%";
                                aboutWindow.current.style.height = "70%";
                                aboutWindow.current.style.left = "0%";
                                aboutWindow.current.style.top = "0%";
                                aboutWindow.current.style.opacity = "1";
                                element.style.display = "none";
                            }}><img src={icons.icons.profile} alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About