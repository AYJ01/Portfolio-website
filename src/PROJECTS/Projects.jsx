import "../PROJECTS/projects.css"

export default function Projects(){

    return <>
    <section className="projectssection">
    <h1>PROJECTS</h1>
    <div >
    <div className="d-flex" >
        <div className="m-auto" style={{backgroundImage: "linear-gradient(to bottom right,#014ca169,#3498c737)"}}>
        <iframe src="https://classroom-portal-grandmaster06666.wasmer.app/"  ></iframe>
        <h6>Classroom-portal</h6>
        <p><span>Technologies : </span>php(without frameworks), mysql, HTML, CSS, Bootstrap</p>
        <p><span>Tools : </span>Wamp, Vscode</p>
        </div>
        <div className="m-auto" style={{backgroundImage: "linear-gradient(to bottom right,#c3143269,#240b3637)"}}>
        <iframe src="https://fitness-fuel.onrender.com/"  ></iframe>
        <h6>Fitness-fuel</h6>
        <p><span>Technologies : </span>Django, sqlite3, HTML, CSS, Bootstrap</p>
        <p><span>Tools : </span>Vscode</p>
        </div>
        <div className="m-auto" style={{backgroundImage: "linear-gradient(to bottom right,#0F202769,#203A4337)"}}>
        <iframe src="https://mystockyapp.streamlit.app/"  ></iframe>
        <h6>Mystockyapp</h6>
        <p><span>Technologies : </span>Python, Streamlit, Pandas, Yfinance</p>
        <p><span>Tools : </span>Vscode, Jupyter notebook</p>
        </div>
    </div>
    </div>
    </section>
    </>
}