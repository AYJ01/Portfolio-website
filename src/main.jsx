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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"  crossOrigin={"anonymous"}></link>
    <script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"} integrity={"sha384-c0ySq6I2MlH5oqwZPxXrrqOd9GZSkXWvVwRCjaGQwN2fnDJY4Dh+G3nGLJrO5L1u"} crossOrigin={"anonymous"}></script>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Education/>
    <Certifications/>
    {/* <Contact/> */}
    <Footer/>
  </StrictMode>,
)
