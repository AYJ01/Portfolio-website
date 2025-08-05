import "../CERTIFICATIONS/certifications.css"
import jshrankbasic from "../assets/hakerrankjsbasic.png"
import hrLogo from "../assets/hr.jpg"
import unstopLogo from "../assets/unstop.jpg"
import iitPatna from "../assets/iitpatna.jpg"
import seoI from "../assets/Seo I.png"
import seoII from "../assets/Seo II.png"
import reliance from "../assets/reliance.png"
export default function Certifications(){
    const certificates = [
        {
            image:reliance,
            link:"https://rfskillingacademy.com/certificate/group/330/258250"
        },
        {
            image:jshrankbasic,
            link:"https://www.hackerrank.com/certificates/ba14b86c438b"
        },
        {
            image:iitPatna,
            link:"https://unstop.com/certificate-preview/7be94f67-0700-4407-b8c3-2cc5e9cec0b5?utm_campaign"
        },
        {
            image:seoI,
            link:"https://app-na2.hubspot.com/academy/achievements/hvjxv01s/en/1/ayyappajith-na/seo"
        },
        {
            image:seoII,
            link:"https://app-na2.hubspot.com/academy/achievements/91dfh7x5/en/1/ayyappajith-t-s/seo-ii"
        },
    ]
    return <>
    <section className="certifications-section mb-20">
        <h1 className="text-4xl text-center mt-50">CERTIFICATIONS</h1>
        <div id="certificates" className="mt-40 grid lg:grid-cols-3 md:grid-cols-2 w-[90%] mx-auto">
            {
                certificates.map((certificate)=>(
                    <div className="certificate m-4">
                        <a href={certificate.link} target="_blank">
                            <img src={certificate.image} alt="Javascript (Basic)" className="w-150 max-h-100 rounded-xl hover:scale-100  " />
                        </a>
                    </div>
                ))
            }
        </div>
    </section>
    </>
}