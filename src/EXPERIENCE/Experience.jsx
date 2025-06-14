import "../EXPERIENCE/experience.css"
import lccImage from "/src/assets/lcc.jpg"
export default function Experience(){
    return <>
    <section className="experience-section">
    <h1>EXPERIENCE</h1>
    <div >
        <div id="expcard" >
            <div  id="imgexp" >
                <img src={lccImage} alt="LCC Image" />
            </div>
            <div id="expdetails" className="p-3">
                <h5>Lcc</h5>
                <i className="fw-normal" style={{fontSize:"12px"}}>Web Developer, 5 February 2024 - 1 May 2025 </i>
               <ul>
                <li>Built 80+ Django-based websites with strong backend.</li>
                <li>Trained 10+ full-stack developers.</li>
                <li>Taught core programming: C, C++ and Java.</li>
                <li>Conducted SEO training for digital marketers.</li>
                <li>Exposure to machine learning concepts.</li>
                </ul>


            </div>
        </div>
    </div>
    </section>
    
    </>
}