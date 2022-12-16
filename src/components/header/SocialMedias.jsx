import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { StyledSocialMedias } from "../styled/Header.styled.js";
const SocialMedias = () => {
  return (
    <StyledSocialMedias>
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
    </StyledSocialMedias>
  );
};

export default SocialMedias;
