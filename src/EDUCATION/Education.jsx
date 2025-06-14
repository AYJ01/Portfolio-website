import "../EDUCATION/education.css"
import collegeImg from "/src/assets/college.jpg"
import hssImg from "/src/assets/hss.png"
export default function Education(){
    return <>
    <section className="Education-section">
    <h1>Education</h1>
    <div>
        <div className="institutioncard" style={{background: "rgba(118, 172, 220, 0.2)"}}>
            <div>
                <img src={collegeImg} alt="" />
            </div>
            <div className="mx-5">
                <h4>Diploma in Computer Engineering</h4>
                <i>June 2020 - April 2023</i>
                <span>Government polytechnic college, Kalamassery </span>
                <span style={{fontWeight:"bold"}}>CGPA : 7.6 </span>
            </div>
        </div>
        <div className="institutioncard" style={{marginTop:"10px",background: "rgba(179, 118, 220, 0.2)"}}>
            <div>
                <img src={hssImg} alt="" />
            </div>
            <div className="mx-5">
                <h4>Computer Science</h4>
                <i>June 2018 - March 2020</i>
                <span>Government HSS, North paravur </span>
                <span style={{fontWeight:"bold"}}>Percentage : 74% </span>
            </div>
        </div>
        <div className="institutioncard" style={{marginTop:"10px",background: "rgba(118, 220, 215, 0.2)"}}>
            <div>
                <img src={hssImg} alt="" />
            </div>
            <div className="mx-5">
                <h4>10th SSLC</h4>
                <i>2017-2018</i>
                <span>St. Aloysius high school, North paravur</span>
                <span style={{fontWeight:"bold"}}>Percentage : 98% </span>
            </div>
        </div>
    </div>
    </section>
    </>
}