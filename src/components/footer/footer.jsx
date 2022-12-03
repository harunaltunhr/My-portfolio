import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../assests/Logo-removebg.png";
import {
  StyledContainerfooter,
  StyledContainera,
  StyledContainerlogo,
  StyledContainerul,
  StyledContainersocials,
  Styledcopyright,
} from "../styled/Footer.styled";
const Footer = () => {
  return (
    <StyledContainerfooter>
      <StyledContainerlogo>
        <img src={Logo} className="footer__logo" alt="logo" />
      </StyledContainerlogo>

      <StyledContainerul>
        <li>
          <StyledContainera href="#">Home</StyledContainera>
        </li>
        <li>
          <StyledContainera href="#about">About</StyledContainera>
        </li>
        <li>
          <StyledContainera href="#experience">Experience</StyledContainera>
        </li>
        <li>
          <StyledContainera href="#portfolio">Portfolio</StyledContainera>
        </li>
        <li>
          <StyledContainera href="#contact">Contact</StyledContainera>
        </li>
      </StyledContainerul>
      <StyledContainersocials>
        <a
          href="https://www.linkedin.com/in/harunaltun/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/harunaltunhr"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/HarunAltunhr"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </StyledContainersocials>

      <Styledcopyright>
        <small>&copy; Harun Altun 2022. All rights reserved.</small>
      </Styledcopyright>
    </StyledContainerfooter>
  );
};

export default Footer;
