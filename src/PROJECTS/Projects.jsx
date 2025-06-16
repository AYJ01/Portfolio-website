import "../PROJECTS/projects.css";
import classroomPortal from "/src/assets/classroom-portal.png";
import fitnessFuel from "/src/assets/fitnessfuel.png";
import stockApp from "/src/assets/stockapp.png";

export default function Projects() {
  return (
    <section className="projects-section">
      <h1>PROJECTS</h1>
      <div className="d-flex flex-wrap flex-column flex-md-row justify-content-center gap-4">
        
        <div className="project-card" style={{ backgroundImage: "linear-gradient(to bottom right,#014ca169,#3498c737)" }}>
          <a href="https://classroom-portal-grandmaster06666.wasmer.app/" target="_blank" rel="noopener noreferrer">
            <img className="project-img" src={classroomPortal} alt="Classroom portal image" loading="lazy" />
          </a>
          <h6>Classroom-portal</h6>
          <p><span>Technologies:</span> PHP (Core), MySQL, HTML, CSS, Bootstrap</p>
          <p><span>Tools:</span> WAMP, VS Code</p>
          <p className="project-desc">
            ClassroomPortal is a role-based learning portal. Admins manage users, staff upload study materials and assignments, and students access, submit, and track progress.
          </p>
        </div>

        <div className="project-card" style={{ backgroundImage: "linear-gradient(to bottom right,#c3143269,#240b3637)" }}>
          <a href="https://fitness-fuel.onrender.com/" target="_blank" rel="noopener noreferrer">
            <img className="project-img" src={fitnessFuel} alt="Fitness fuel image" loading="lazy" />
          </a>
          <h6>Fitness-fuel</h6>
          <p><span>Technologies:</span> Django, SQLite3, HTML, CSS, Bootstrap</p>
          <p><span>Tools:</span> VS Code</p>
          <p className="project-desc">
            A Django-based fitness site connecting admins, shops, customers, and trainers. Users can buy gym products, chat with trainers, and access fitness articles.
          </p>
        </div>

        <div className="project-card" style={{ backgroundImage: "linear-gradient(to bottom right,#0F202769,#203A4337)" }}>
          <a href="https://mystockyapp.streamlit.app/" target="_blank" rel="noopener noreferrer">
            <img className="project-img" src={stockApp} alt="Mystockyapp image" loading="lazy" />
          </a>
          <h6>Mystockyapp</h6>
          <p><span>Technologies:</span> Python, Streamlit, Pandas, Yfinance</p>
          <p><span>Tools:</span> VS Code, Jupyter Notebook</p>
          <p className="project-desc">
            A stock forecasting app using Prophet and Streamlit. Users can select tickers, view historical trends, and forecast future prices for up to 4 years.
          </p>
        </div>

      </div>
    </section>
  );
}
