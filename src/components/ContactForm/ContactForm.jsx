import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"

const ContactForm = () => {
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nafrlzi",
        "template_5vbshst",
        contactForm.current,
        "5ZbhjUdmijfjGDaeN"
      )
      .then(
        () => {
          e.target.reset();
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={contactForm} onSubmit={sendEmail}>
        <div className="contact-form-cred">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="contact-form-subject">
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
        <div className="contact-form-message">
          <textarea col = "30" rows = "6" placeholder="Message" name="message" required></textarea>
        </div>
        <div className="contact-form-submit">
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
