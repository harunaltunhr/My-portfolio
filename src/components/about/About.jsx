import React from "react";
import "./about.css";
import MYPHOTO from "../../assests/myphoto2.jpeg";
import { FaAward } from "react-icons/fa";
export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MYPHOTO} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" /> <h5>Experience</h5>
              <small>9 Months Bootcamp</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" /> <h5>Experience</h5>
              <small>Completed 10+ projects and 20+ online courses</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" /> <h5>Experience</h5>
              <small>Worked alone and with a team of more than 20 people</small>
            </article>
          </div>
          <p>
            After working 7 years in HR (mostly in IT rectuitment) I decided to
            change my route to coding. After completing the bootcamp in{" "}
            <a
              href="https://hackyourfuture.be"
              target="_blank"
              rel="noreferrer"
            >
              HackYourFuture
            </a>
            , I started my passion for coding as a web developer. While learning
            new technologies, I also had the opportunity to develop myself with
            projects. It is always my greatest ideal to make life easier and to
            do useful work for people.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
