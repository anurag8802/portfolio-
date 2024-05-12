import React, { useRef } from 'react'
import '../styles/skills.css'
const Skills = () => {
    const maskpos = useRef();
    const changePos = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        // let xline = maskpos.current.offsetWidth;
        // let yline = maskpos.current.offsetHeight;
        maskpos.current.style.maskPosition = `${x-120}px ${y-140}px`
        maskpos.current.style.WebkitMaskPosition = `${x-120}px ${y-140}px`
    }
    const changePosOnPhone = (e) => {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        // let xline = maskpos.current.offsetWidth;
        // let yline = maskpos.current.offsetHeight;
        maskpos.current.style.maskPosition = `${x-120}px ${y-140}px`
        maskpos.current.style.WebkitMaskPosition = `${x-120}px ${y-140}px`
    }
    return (
        <>
            <div className="skills" id="skills">
                <div className="main-skills">
                    <div className="webdev">
                        <div className="webd-card">
                            <div className="webd-title">
                                <strong>WEB DEVELOPMENT</strong>
                            </div>
                            <p className="webd-item">HTML <span className='skill-icon'><i className="fa-brands fa-html5"></i></span></p>
                            <p className="webd-item">CSS <span className='skill-icon'><i className="fa-brands fa-css3-alt"></i></span></p>
                            <p className="webd-item">JAVASCRIPT <span className='skill-icon'><i className="fa-brands fa-js"></i></span></p>
                            <p className="webd-item">MONGODB <span className='skill-icon'><img width={"16px"} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt='mongodb'/></span></p>
                            <p className="webd-item">REACTJS <span className='skill-icon'><i className="fa-brands fa-react"></i></span></p>
                            <p className="webd-item">EXPRESSJS <span className='skill-icon'><img width={"16px"} src="https://img.icons8.com/color/48/null/express-js.png" alt='expressjs'/></span></p>
                            <p className="webd-item">NODEJS <span className='skill-icon'><i className="fa-brands fa-node-js"></i></span></p>
                        </div>
                    </div>
                    <div className="skills-title">
                        <p style={{ fontSize:'large',fontWeight:'600' }}>Skills And Tools <br /><span style={{ color: "grey", fontSize: 'small' }}>Hover around to see!!</span></p>
                    </div>
                    <div className="tools">
                        <div className="tools-card">
                            <div className="tools-title">
                                <strong>TOOLS</strong>
                            </div>
                            <p className="tools-item">VSCODE <span className='skill-icon'><img width={"16px"} src="https://img.icons8.com/ios-filled/50/null/visual-studio.png" alt='vscode'/></span></p>
                            <p className="tools-item">GIT <span className='skill-icon'><i className="fa-brands fa-git-alt"></i></span></p>
                            <p className="tools-item">GITHUB <span className='skill-icon'><i className="fa-brands fa-github"></i></span></p>
                        </div>
                    </div>
                    <div className="languages">
                        <div className="lang-card">
                            <div className="lang-title">
                                <strong>LANGUAGES</strong>
                            </div>
                            <p className="lang-item">C++</p>
                            <p className="lang-item">C</p>
                            <p className="lang-item">PYTHON <span className='skill-icon'><i className="fa-brands fa-python"></i></span></p>
                        </div>
                    </div>

                </div>
                <div className="skills-front" ref={maskpos} onTouchStart={(e)=>{
                    e.preventDefault();
                    changePosOnPhone(e)
                }} onTouchMove={(e)=>{
                    e.preventDefault()
                    changePosOnPhone(e);
                }} onMouseMove={(e) => {
                    changePos(e);
                }}>
                </div>
            </div>
        </>
    )
}

export default Skills