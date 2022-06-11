import React from "react";
import GoogleMap from "./ContactFormComponents/GoogleMap";
import './contactform.scss'

export default function ContactForm() {
  return (
    <div>
        <div className="container">
            <div className="contact-form">
                <div className="input class">
                    <input type="text" className="input" placeholder="Your Name"/>
                    <input type="email" className="input" placeholder="Your Email"/>
                    <input type="tel" className="input" placeholder="Phone" />
                    <input type="text" className="input" placeholder="Subject" />
                </div>
                <div>
                    <textarea name="textarea" className="input" placeholder="Message" col="30" rows="10">
                    </textarea>
                    <button className="btn" type="submit">Send</button>
                </div>
                <GoogleMap />
            </div>
        </div>
        
    </div>
  );
}
