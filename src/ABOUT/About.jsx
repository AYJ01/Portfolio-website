import "../ABOUT/about.css"
import Profileimg from "../assets/henrycavil.jpg"

const aboutsection = document.getElementsByClassName("about-section");

export default function About(){
    return <>
    <section className="about-section">
    <div className="row" >
        <div className="col-lg-6 col-md-6 m-auto" id="text-div">
        <h1>AYYAPPAJITH T S</h1>
        <p>Full stack developer, enjoys building websites and exploring new technologies.
             I mostly work with Django and recently started diving into JavaScript and its 
             libraries. This is just a quick intro — feel free to explore more!</p>
        </div>
        <div className="col-lg-6 col-md-6" id="imgdiv">
        <img src={Profileimg} alt="Profile Image" />
        </div>
    </div>
    </section>
    </>
}