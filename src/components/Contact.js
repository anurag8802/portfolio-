import React, { useRef } from 'react'
import '../styles/contact.css'
import images from '../images/mymaploc.png'
const Contact = () => {
    const movePalette = useRef()
    const rotatePlate = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        let xlength = window.innerWidth / 2;
        let ylength = window.innerHeight / 2;
        x = x - xlength;
        movePalette.current.style.transform = `perspective(1000px) rotateX(${-((y - (ylength / 2)) / (ylength)) * 40}deg) rotateY(${(-(xlength / 2 - x) / xlength) * 40}deg)`
    }
    const rotatePlateOnPhone = (e) => {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        let xlength = window.innerWidth / 2;
        let ylength = window.innerHeight / 2;
        x = x - xlength;
        movePalette.current.style.transform = `perspective(1000px) rotateX(${-((y - (ylength / 2)) / (ylength)) * 40}deg) rotateY(${(-(xlength / 2 - x) / xlength) * 40}deg)`
    }
    return (
        <>
            <div className="Contact" id="contact">
                {/* <div className="contact-form-area">
                    <form action="#" method="post">
                        <div className="main-form">
                            <div className="name">
                                <label htmlFor="name" className="name-label">
                                    <h2>Name</h2>
                                </label>
                                <input type="text" id="name" className='name-input' required />
                            </div>
                            <div className="emailID">
                                <label htmlFor="email" className="email-label">
                                    <h2>Email</h2>
                                </label>
                                <input type="email" id="email" className='email-input' required />
                            </div>
                            <div className="message">
                                <label htmlFor="message" className="message-label">
                                    <h2>Message</h2>
                                </label>
                                <textarea type="text" id="message" className='msg-input' rows={3} required />
                            </div>
                            <button className="form-btn btn">Submit</button>
                        </div>
                    </form>
                </div> */}
                <div className="my-location-on-map">
                    <img src={images} alt="" />
                </div>
                <div className="contact-photo-area">
                    <h2 className='contact-title'>CONTACT</h2>
                    <div className="contact-socials-disp" 
                        onTouchStart={(e)=>{
                            rotatePlateOnPhone(e)
                            console.log(e)
                        }}
                        onTouchMove={(e)=>{
                            rotatePlateOnPhone(e)
                        }}
                        onMouseMove={(e) => {
                        rotatePlate(e)
                    }}>
                        <div className="contact-photo-palette" ref={movePalette}>
                            <a href="https://github.com/AdiMiMC07" target="_blank" rel="noreferrer" className="github">
                                <svg width="97" height="99" xmlns="http://www.w3.org/2000/svg" className='github-logo'><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#000" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/aditya-m-33119a233/" target="_blank" rel="noreferrer" className="linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px" className='linkedin-logo'><path fill="#0078d4" stroke='rgb(19, 19, 135)' strokeWidth={".15em"} d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z" /><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity="0.05" /><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07" /><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z" /></svg>
                            </a>
                            <a href="mailto:adityavishu03@gmail.com" className="email-ID">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px" className='gmail-logo'><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" /><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" /><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" /><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" /><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" /></svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact