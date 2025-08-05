import { LaptopIcon, LinkIcon } from "lucide-react"
import "../PROJECTS/projects.css"
import classroomPortal from "/src/assets/classroom-portal.png"
import fitnessFuel from "/src/assets/fitnessfuel.png"
import stockApp from "/src/assets/stockapp.png"
import jobPortal from "/src/assets/Jobportal.png"
import artsGallery from "/src/assets/artsgallery.png"
import iphoneClone from "/src/assets/iphoneclone.png"
import { useEffect } from "react"

export default function Projects(){

    const projects = [
    {
        project: "📱 iPhone 16 Website Clone",
        frontend: "Frontend | React (Vite) | Tailwind CSS | JavaScript",
        backend: "No backend (Static UI Clone)",
        points: [
            "Minimal and elegant clone of Apple iPhone 16 product website.",
            "Developed using Vite and React for fast build and modular design.",
            "Styled with Tailwind CSS for pixel-perfect responsiveness.",
            "Smooth animations and mobile-first layout.",
            "Focused on UI accuracy and performance.",
            "Great for showcasing frontend development skills."
        ],
        bgcolor: "bg-gray-500/20",
        image: iphoneClone,
        link:"#"
    },
    {
        project: "💼 Job-Portal Frontend",
        frontend: "Frontend | HTML5 | CSS3 | Bootstrap 5 | JavaScript",
        backend: "No backend (Frontend Only)",
        points: [
            "Customers: Register/login, create resumes, apply for jobs, chat, view interview history.",
            "Companies: Post jobs, view resumes, schedule interviews, chat with seekers.",
            "Admin: Manage access, moderate users, and provide job guidance content.",
            "Responsive layout for all screen sizes.",
            "Built using only HTML, CSS, Bootstrap, and Vanilla JS.",
        ],
        bgcolor: "bg-yellow-500/20",
        image: jobPortal,
        link : "https://job-portal-9tci.onrender.com/"
    },
    {
        project: "🎨 Arts Gallery",
        frontend: "Frontend | HTML | CSS | Bootstrap | JavaScript",
        backend: "Backend | Django (Python) | SQLite3",
        points: [
            "Artists: Post artworks and videos, join mini-auctions, and chat.",
            "Galleries: Host events, post media, and interact with users and artists.",
            "Customers: Browse and engage with gallery content and auctions.",
            "Admin: Manage users, toggle login access, and view booking-style sales reports.",
            "Real-time communication features between artists, galleries, and users."
        ],
        bgcolor: "bg-purple-500/20",
        image: artsGallery,
        link: "https://arts-gallery.onrender.com/"
    },
    {
        project: "🏫 Classroom-Portal",
        frontend: "Frontend | HTML | CSS | Bootstrap | Javascript",
        backend: "Backend | Core Php | SQL | Wasmer",
        points: [
            "Users: Admin, Staff, Student",
            "Admins manage users and view uploaded content.",
            "Staff upload study materials and assignments for each class.",
            "Students access materials based on their class.",
            "Students submit assignments through the portal.",
            "Students can view submission deadlines and their grades."
        ],
        bgcolor: "bg-blue-500/20",
        image: classroomPortal,
        link : "https://classroom-portal.wasmer.app/index.php"
    },
    {
        project: "🏋️‍♂️ Fitness Fuel",
        frontend: "Frontend | HTML | CSS | Bootstrap | JavaScript",
        backend: "Backend | Django (Python) | SQLite/PostgreSQL",
        points: [
            "Admin: Manage users, publish articles, monitor activity.",
            "Shops: Sell gym products, manage listings and inventory.",
            "Customers: Shop for products, read articles, chat with trainers.",
            "Trainers: Respond to queries and offer fitness advice.",
            "Built as a fitness ecosystem for all stakeholders.",
            "Authentication handled by Django Auth System."
        ],
        bgcolor: "bg-red-500/20",
        image: fitnessFuel,
        link:"https://fitness-fuel.onrender.com/"
    },
    {
        project: "📈 My Stocky",
        frontend: "Frontend | Streamlit (Python) | Plotly",
        backend: "Backend | Prophet | yfinance",
        points: [
            "Interactive web app using Streamlit for stock forecasting.",
            "Users select a stock and prediction period (1–4 years).",
            "Historical data retrieved via yfinance and plotted using Plotly.",
            "Forecasting done using Prophet (by Meta) for time series analysis.",
            "Forecast plots and components are interactive and informative.",
            "Built for simplicity and insight with minimal setup."
        ],
        bgcolor: "bg-sky-500/20",
        image: stockApp,
        link:"https://mystockyapp.streamlit.app/"
    }
];

    function hoverProject(elem){
    const ulElem = document.getElementById("project"+elem)
    ulElem.classList.remove("hidden")
    ulElem.classList.remove("opacity-0")
    console.log(ulElem)
}
    function leaveProject(elem){
    const ulElem = document.getElementById("project"+elem)
    ulElem.classList.add("opacity-0")
    ulElem.classList.add("hidden")
    console.log(ulElem)
}

    return <>
    <section className="projectssection mb-40">
    <h1 className="text-4xl text-center mt-50">PROJECTS</h1>
    <div className="">
    <div className="mt-40 p-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 " >
        {
            projects.map((project,index)=>(
                <div id="project" className={`${project.bgcolor} lg:w-120 h-fit mx-auto scroll-smooth`} key={index} onMouseOver={()=>hoverProject(index)} onMouseLeave={()=>leaveProject(index)} >
                    <img className="w-full" src={project.image} alt="" />
                        <div className="p-4" >
                            <h6 className="text-center text-xl font-bold">🚀<a className="" href={project.link} target="_blank">{project.project} <LinkIcon className="inline w-4"/> </a></h6>
                            <p className="text-sm text-center font-bold">{project.frontend}</p>
                            <p className="text-sm text-center font-bold">{project.backend}</p>
                            <ul id={"project"+index} className="text-sm list-disc list-outside pl-6 space-y-1 mt-2 hidden opacity-0 transition-all duration-500 ease-in-out">
                              {project.points.map((point,index)=>(
                                <li key={index} >{point}</li>
                              ))}
                            </ul>
                        </div>
                </div>
            ))
        }
    </div>
    </div>
    </section>
    </>
}