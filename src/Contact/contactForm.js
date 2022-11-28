import { Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "./contact.css";

export function ContactForm() {
    const form = useRef();
    var data = {
        service_id: 'service_uq3ny05',
        template_id: 'template_3lsthzb',
        user_id: 'QR5NtrIC9MyXVVzyc'
    };
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_uq3ny05', 'template_r1cmo3f', form.current, 'QR5NtrIC9MyXVVzyc').then(res => {
            console.log("email sent", res, form.current.name.value);
        });
        e.target.reset();
    };
    return (
        <div className="contactFormContainer">
            <form ref = {form} className="contactForm" onSubmit={sendEmail}>
                <div className="name">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your Name"/>
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your Email"/>
                </div>
                <div className="message">
                    <label>Message</label>
                    <textarea rows="7" name="message" placeholder="Message"/>
                </div>
                <div>
                    <Button type='submit' variant="contained">Send Message</Button>
                </div>
        </form>
        </div>
    );
}