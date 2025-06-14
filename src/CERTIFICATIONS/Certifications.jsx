import "../CERTIFICATIONS/certifications.css"
import jshrankbasic from "../assets/hakerrankjsbasic.png"
import hrLogo from "../assets/hr.jpg"
import unstopLogo from "../assets/unstop.jpg"
import iitPatna from "../assets/iitpatna.jpg"
export default function Certifications(){
    return <>
    <section className="certifications-section">
        <h1>CERTIFICATIONS</h1>
        <div id="certificates">
            <div className="certificate">
                <div className="certifyimage">
                    <img src={jshrankbasic} alt="Javascript (Basic)" onClick={()=> {location.href="https://www.hackerrank.com/certificates/ba14b86c438b"}} />
                </div>
                <div style={{textAlign:"left"}}>
                    <img className="mx-3" src={hrLogo} style={{width:"50px",height:"50px",objectFit:"cover",borderRadius:"100%"}} alt="" />
                    <span className="mx-3" style={{fontSize:"16px"}}>Javascript (Basic)</span>
                </div>
            </div>
            <div className="certificate">
                <div className="certifyimage">
                    <img src={iitPatna} alt="Javascript (Basic)" onClick={()=> {location.href="https://unstop.com/certificate-preview/7be94f67-0700-4407-b8c3-2cc5e9cec0b5?utm_campaign"}} />
                </div>
                <div style={{textAlign:"left"}}>
                    <img className="mx-3" src={unstopLogo} style={{width:"50px",height:"50px",objectFit:"cover",borderRadius:"100%"}} alt="" />
                    <span className="mx-3" style={{fontSize:"16px"}}>Frontend Frontier</span>
                    <span className="text-center" style={{fontSize:"16px",display:"block"}}>by IIT Patna via Unstop</span>
                </div>
            </div>
        </div>
    </section>
    </>
}