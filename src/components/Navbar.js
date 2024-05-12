import React, { useRef } from 'react'
import '../styles/navbar.css'
import mult from '../images/crosssymbol.png'
const Navbar = () => {
    const navbar = useRef()
    return (
        <>
            <nav id="navbar">
                <img className='hamburger' alt='' src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/64/null/external-hamburger-basic-ui-jumpicon-glyph-jumpicon-glyph-ayub-irawan-2.png" onClick={()=>{
                        navbar.current.style.left = "50%";
                    }}/>
                <ul ref={navbar}>
                    <li className='close-nav'><img src={mult} alt="" onClick={()=>{
                        navbar.cusrrent.style.left = "100%"
                    }}/></li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar