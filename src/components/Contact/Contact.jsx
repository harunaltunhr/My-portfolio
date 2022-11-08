import React from "react";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { StyledButtonprimary } from "../styled/Button.styled";
import {
  StyledContainercontact,
  Styledcontactoptions,
  Styledcontactoption,
  Styledform,
  Styledinput,
} from "../styled/Contact.styled";

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

      <StyledContainercontact>
        <Styledcontactoptions>
          <Styledcontactoption>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>altunhr@gmail.com</h5>
            <a href="mailto:altunhr@gmail.com" rel="noreferrer" target="_blank">
              Send a message
            </a>
          </Styledcontactoption>
          <Styledcontactoption>
            <FaFacebookMessenger />
            <h4>Messenger</h4>
            <h5>Harun Altun</h5>
            <a
              href="https://m.me/harun.altun.58958"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </Styledcontactoption>
          <Styledcontactoption>
            <SiWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+32499400302</h5>
            <a
              href="https://api.whatsapp.com/send?phone=32499400302"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </Styledcontactoption>
        </Styledcontactoptions>
        <Styledform ref={form} onSubmit={sendEmail}>
          <Styledinput
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <Styledinput
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <Styledinput
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></Styledinput>
          <StyledButtonprimary type="submit" className="btn btn-primary">
            Send Message
          </StyledButtonprimary>
        </Styledform>
      </StyledContainercontact>
    </section>
  );
};

export default Contact;
