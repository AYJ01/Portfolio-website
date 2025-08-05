import "../FOOTER/footer.css"
import gitHub from "/src/assets/github.png"
import linkedIn from "/src/assets/linkedin.png"
import insta from "/src/assets/instagram.png"
import reddit from "/src/assets/reddit.png"
export default function Footer(){
    return <>
    <footer className="w-full h-fit bg-sky-700/60 blackdrop-blur-xl py-10">
    <h1></h1>
    <div className="flex w-fit mx-auto gap-10 mt-auto" >
        <a href="https://github.com/AYJ01" target="_blank"><img className="w-8" src={gitHub} alt="" /></a>
        <a href="www.linkedin.com/in/ayyappajithts" target="_blank"><img className="w-8" src={linkedIn} alt="" /></a>
        <a href="https://www.instagram.com/_a_y_j__" target="_blank"><img  className="w-8"src={insta} alt="" /></a>
        <a href="https://www.reddit.com/u/Interesting-Sea-4869/s/amgLPBc6UA" target="_blank"><img className="w-8" src={reddit} alt="" /></a>
        
    </div>
    <div class="w-fit mx-auto max-w-screen-xl pt-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">Ayyappajith™</a>. All Rights Reserved.
    </span>
    </div>
    </footer>
    </>
}