import React from "react";
import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m5vdzja",
      "template_79kvvba",
      form.current,
      "GGsb5YanGvoyyEHBE"
    );
    e.target.reset();
    alert("Message Sent");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className=".contact__option-icon" />
            <h4>Email</h4>
            <h5>altunhr@gmail.com</h5>
            <a href="mailto:altunhr@gmail.com" rel="noreferrer" target="_blank">
              Send a massage
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className=".contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Harun Altun</h5>
            <a
              href="https://m.me/harun.altun.58958"
              rel="noreferrer"
              target="_blank"
            >
              Send a massage
            </a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className=".contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+32499400302</h5>
            <a
              href="https://api.whatsapp.com/send?phone=32499400302"
              target="_blank"
              rel="noreferrer"
            >
              Send a massage
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
