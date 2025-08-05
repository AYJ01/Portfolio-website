import { MapPinIcon } from "lucide-react"
import "../EXPERIENCE/experience.css"
import lccImage from "/src/assets/lcc.jpg"
export default function Experience(){
    return <>
    <section className="w-screen h-fit experience-section">
    <h1 className="text-4xl text-center mt-50">EXPERIENCE</h1>
    <div >
        <div className="lg:w-250 w-screen mx-auto mt-40" >
            <div id="comanyDiv" className="lg:px-7 px-2">
                <h5 id="company" className="lg:flex text-2xl font-bold items-end">Lakhotia Computer Center, <span className="flex text-lg"><MapPinIcon className="text-red-800 w-5" />Alwaye</span></h5>
                <strong className="text-lg font-bold">Full Stack Developer</strong>
                <p className="text-normal font-semibold">5 February 2024 - 1 May 2025 </p>
               <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mt-1">🔹</span>
                      <p className="ml-2 text-justify">
                        Specialized in full stack development with a strong focus on clean architecture and performance.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mt-1">🔹</span>
                      <p className="ml-2 text-justify">
                        Built and deployed 40+ Django-powered websites optimized for speed, scalability, and security.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mt-1">🔹</span>
                      <p className="ml-2 text-justify">
                        Guided aspiring developers in backend workflows, database integration, and deployment best practices.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mt-1">🔹</span>
                      <p className="ml-2 text-justify">
                        Tutored marketers and tech enthusiasts in SEO fundamentals to improve organic reach and web visibility.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mt-1">🔹</span>
                      <p className="ml-2 text-justify">
                        Delivered project-based tech sessions in college, focusing on building real, production-ready applications.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mt-1">🔹</span>
                      <p className="ml-2 text-justify">
                        Explored Android app development through small, functional apps built with Java and XML.
                      </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </section>
    
    </>
}