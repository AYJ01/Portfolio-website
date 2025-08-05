import "../ABOUT/about.css"
import Profileimg from "../assets/ayj.png"


export default function About(){
    return <>
    <section className="about-section">
    <div className="lg:flex lg:gap-20 w-[80%] mx-auto mt-50" >
        <div className="mx-auto" id="text-div">
        <h1 className="text-4xl my-4">Hey there <span className="text-white">👋</span>, I'm Ayyappajith <br />
        <span className="text-lg">Welcome to my digital space!</span></h1>
        <p className="text-normal  text-justify font-normal lg:w-150 mt-10">
        I'm a passionate Full Stack Developer who thrives on turning real-world problems into smart, 
        scalable web solutions. From clean frontend interfaces to robust backend systems, I build modern web 
        applications that are fast, functional, and user-focused. <br />
        This portfolio showcases my journey, my skillset, and the projects I've crafted—from dynamic user 
        dashboards to REST APIs and cloud integrations. Whether it’s React, Django, Supabase, or PostgreSQL, 
        I believe in writing code that’s not just efficient, but meaningful.
        Let’s build something impactful together.
        </p>
        </div>
        <div className="md:w-90 lg:w-90  mx-auto min-w-70 h-fit" id="imgdiv">
        <img src={Profileimg} className="rounded-xl lg:ml-10 mt-10" alt="Profile Image" />
        </div>
    </div>
    </section>
    </>
}