import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>Feel free to reach out for collaborations or just a friendly hello</p>
        <div>
          <p>Email: venkatchitrakavi@gmail.com</p>
        </div>
        <div className="social-links">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://github.com/VENKAT2905" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/chitrakavi-venkat-3464b82ba/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <form
        action="https://formspree.io/f/your_form_id"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
