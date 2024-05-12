import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
function App() {
  
  return (
    <>
      <Navbar/>
      <div className="App">
        <div className="home-section-app">
            <MainSection/>
        </div>
        <div className="about-section-app">
          <About/>
        </div>
        <div className="skills-section-app">
          <Skills />
        </div>
        <div className="projects-section-app">
          <Projects/>

        </div>
        <div className="contact-section-app">

          <Contact/>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default App;
