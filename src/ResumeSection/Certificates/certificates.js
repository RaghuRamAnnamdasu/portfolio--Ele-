// import { SKILLS } from "./constants";
import "./certificates.css";

export function Certificates({certificatesRef}) {
    return (
        <section ref={certificatesRef} id="certificates" className="certificatesContainer">
            <h2>Certifications</h2>
            <div className='certificationDetails'>
                <h3>MERN Full Stack Development Program</h3>
                <div>GUVI Geeks Network, Chennai</div>
            </div>
        </section>
    );
}