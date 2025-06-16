import "../PROJECTS/projects.css"
import classroomPortal from "/src/assets/classroom-portal.png"
import fitnessFuel from "/src/assets/fitnessfuel.png"
import stockApp from "/src/assets/stockapp.png"

export default function Projects(){

    return <>
    <section className="projectssection">
    <h1>PROJECTS</h1>
    <div >
    <div className="d-flex" >
        <div className="m-auto" style={{backgroundImage: "linear-gradient(to bottom right,#014ca169,#3498c737)"}}>
        <a href="https://classroom-portal-grandmaster06666.wasmer.app/"><img className="projectimg" src={classroomPortal} alt="Classroomportal image" /></a>
        <h6>Classroom-portal</h6>
        <p><span>Technologies : </span>php(without frameworks), mysql, HTML, CSS, Bootstrap</p>
        <p><span>Tools : </span>Wamp, Vscode</p>
        <p style={{fontSize:"10px",fontWeight:"normal",textAlign:"justify",width:"90%",margin:"auto"}}>ClassroomPortal is a role-based learning portal built using Core PHP, HTML, CSS, JavaScript, and MySQL. Admins manage users and view content, staff upload study materials and assignments, and students access materials by class, submit assignments, and view deadlines and grades.</p>
        </div>
        <div className="m-auto" style={{backgroundImage: "linear-gradient(to bottom right,#c3143269,#240b3637)"}}>
        <a href="https://fitness-fuel.onrender.com/"><img className="projectimg" src={fitnessFuel} alt="Fitnessfuel image" /></a>
        <h6>Fitness-fuel</h6>
        <p><span>Technologies : </span>Django, sqlite3, HTML, CSS, Bootstrap</p>
        <p><span>Tools : </span>Vscode</p>
        <p style={{fontSize:"10px",fontWeight:"normal",textAlign:"justify",width:"90%",margin:"auto"}}>Fitness Fuel is a web app built with Django (backend) and HTML, CSS, JavaScript, Bootstrap (frontend). It connects admins, shops, customers, and trainers. Shops sell gym gear and supplements, customers buy products, chat with trainers, and admins manage users and add fitness articles for health guidance.</p>

        </div>
        <div className="m-auto" style={{backgroundImage: "linear-gradient(to bottom right,#0F202769,#203A4337)"}}>
        <a href="https://mystockyapp.streamlit.app/"><img className="projectimg" src={stockApp} alt="Mystockapp Image" /></a>
        <h6>Mystockyapp</h6>
        <p><span>Technologies : </span>Python, Streamlit, Pandas, Yfinance</p>
        <p><span>Tools : </span>Vscode, Jupyter notebook</p>
        <p style={{fontSize:"10px",fontWeight:"normal",textAlign:"justify",width:"90%",margin:"auto"}}>Stock Forecast App Overview This application provides stock price forecasting using historical data. It leverages the Prophet library for time series forecasting and Streamlit for an interactive web interface. The app allows users to select a stock ticker, view historical stock data, and forecast future prices over a period of 1 to 4 years.</p>

        </div>
    </div>
    </div>
    </section>
    </>
}
