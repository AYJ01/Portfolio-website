import "../CONTACT/contact.css"

export default function Contact(){
    return <>
    <section className="contact-section">
        <h1>CONTACT</h1>
        <div style={{marginTop:"20%",textAlign:"center"}}>
            <input className="form-control m-auto mb-2" placeholder="Your name" type="text" />
            <input className="form-control m-auto mb-2" type="text" placeholder="Your email" />
            <textarea className="form-control mb-4 m-auto" placeholder="Message" id=""></textarea>
            <button className="btn d-block m-auto">Submit</button>
        </div>
    </section>
    </>
}