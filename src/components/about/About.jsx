import React from "react";

import MYPHOTO from "../../assests/myphoto2.webp";
import { FaAward } from "react-icons/fa";
import {
  StyledAboutContainer,
  StyledAboutImgdiv,
  StyledAboutImg,
  StyledAboutcontentP,
  StyledAboutcontentdiv,
  StyledAboutcards,
  StyledAboutcard,
  StyledAbouticon,
} from "../styled/About.styled";
import { StyledButtonprimary } from "../styled/Button.styled";
export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <StyledAboutContainer>
        <StyledAboutImgdiv>
          <StyledAboutImg src={MYPHOTO} alt="About Me" />
        </StyledAboutImgdiv>
        <StyledAboutcontentdiv>
          <StyledAboutcards>
            <StyledAboutcard>
              <StyledAbouticon>
                <FaAward />
              </StyledAbouticon>

              <small>9 Months Bootcamp</small>
            </StyledAboutcard>

            <StyledAboutcard>
              <StyledAbouticon>
                <FaAward />{" "}
              </StyledAbouticon>

              <small>Completed 10+ projects and 20+ online courses</small>
            </StyledAboutcard>

            <StyledAboutcard>
              <StyledAbouticon>
                <FaAward />{" "}
              </StyledAbouticon>{" "}
              <small>Worked alone and with a team of more than 20 people</small>
            </StyledAboutcard>
          </StyledAboutcards>
          <StyledAboutcontentP>
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
          </StyledAboutcontentP>

          <StyledButtonprimary href="#contact">Let's Talk</StyledButtonprimary>
        </StyledAboutcontentdiv>
      </StyledAboutContainer>
    </section>
  );
};

export default About;
