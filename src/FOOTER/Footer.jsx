import "../FOOTER/footer.css"
import gitHub from "/src/assets/github.png"
import linkedIn from "/src/assets/linkedin.png"
import insta from "/src/assets/instagram.png"
import reddit from "/src/assets/reddit.png"
export default function Footer(){
    return <>
    <footer className="footer-section">
    <h1>Social media</h1>
    <div className="social-icons">
        <a href="https://github.com/AYJ01" target="_blank"><img src={gitHub} alt="" /></a>
        <a href="www.linkedin.com/in/ayyappajithts" target="_blank"><img src={linkedIn} alt="" /></a>
        <a href="https://www.instagram.com/_a_y_j__" target="_blank"><img src={insta} alt="" /></a>
        <a href="https://www.reddit.com/u/Interesting-Sea-4869/s/amgLPBc6UA" target="_blank"><img src={reddit} alt="" /></a>
        
    </div>
    </footer>
    </>
}