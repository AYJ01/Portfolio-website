import "../EDUCATION/education.css"
import collegeImg from "/src/assets/college.jpg"
import hssImg from "/src/assets/hss.png"
export default function Education(){
    return <>
    <section className="Education-section">
    <h1 className="text-4xl text-center mt-50">Education</h1>
    <div className="lg:ml-80 md:ml-40 ml-20 border-l-4 border-sky-500">
        <div id="educationInst" className="flex mt-40 p-4" >
            <div className="-ml-20">
                <img className="min-w-30 max-w-30 rounded-full" src={collegeImg} alt="" />
            </div>
            <div className="ml-4">
                <h4 className="font-bold text-xl">Diploma in Computer Engineering</h4>
                <h6 className="font-bold text-lg">Government polytechnic college, Kalamassery </h6>
                <p className="font-semibold">June 2020 - April 2023</p>
                <p className="font-bold">CGPA : 7.6 </p>
                <div>
                    <ul className="list-disc pl-4 text-sm">
                        <li>Gained strong experience in teamwork, especially during group projects and event coordination.</li>
                        <li>Improved significantly in public speaking, presentations, and technical communication.</li>
                        <li>Took leadership roles in multiple team-based academic and extracurricular activities.</li>
                        <li>Successfully coordinated a college trip, managing logistics and collaboration across teams.</li>
                        <li>Built a solid foundation in Data Structures & Algorithms, Java, and Android SDK.</li>
                        <li>Developed a full-stack capstone project: MyStockyApp, a stock forecast and visualization tool.</li>
                        <li>Overall, it was a wonderful and transformative experience that helped shape both my technical and interpersonal skills.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="educationInst" className="flex mt-10 p-4" >
            <div className="-ml-20">
                <img className="min-w-30 max-w-30 rounded-full" src={hssImg} alt="" />
            </div>
            <div className="ml-4">
                <h4 className="font-bold text-xl">Computer Science, Higher Secondary</h4>
                <h6 className="font-bold text-lg">Government higher secondary school, North paravur </h6>
                <p className="font-semibold">June 2018 - March 2020</p>
                <p className="font-bold">Percentage : 74%</p>
                <div>
                    <ul className="list-disc pl-4 text-sm">
                        <li>Learned core programming concepts using C++, including object-oriented principles and logic building.</li>
                        <li>Gained hands-on experience with MySQL for basic database operations and query writing.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="educationInst" className="flex mt-10 p-4" >
            <div className="-ml-20">
                <img className="min-w-30 max-w-30 rounded-full" src={hssImg} alt="" />
            </div>
            <div className="ml-4">
                <h4 className="font-bold text-xl">High school</h4>
                <h6 className="font-bold text-lg">St Aloysius high school, North Paravur</h6>
                <p className="font-semibold">June 2017 - March 2018</p>
                <p className="font-bold">Percentage : 98%</p>
            </div>
        </div>
    </div>
    </section>
    </>
}