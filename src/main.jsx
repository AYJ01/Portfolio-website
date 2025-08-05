import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './HERO/Hero.jsx'
import About from './ABOUT/About.jsx'
import Skills from './SKILLS/Skills.jsx'
import Projects from './PROJECTS/Projects.jsx'
import Experience from './EXPERIENCE/Experience.jsx'
import Education from './EDUCATION/Education.jsx'
import Certifications from './CERTIFICATIONS/Certifications.jsx'
import Contact from './CONTACT/Contact.jsx'
import Footer from './FOOTER/Footer.jsx'
import Softskills from './SOFTSKILLS/Softskills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <About/>
    <Skills/>
    <Softskills />
    <Experience/>
    <Projects/>
    <Education/>
    <Certifications/>
    {/* <Contact/> */}
    <Footer/>
  </StrictMode>,
)
