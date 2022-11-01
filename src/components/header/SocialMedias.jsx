import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const SocialMedias = () => {
  return (
    <div className="social__medias">
      <a href="linkedin.com" target="blank">
        <FaLinkedin />
      </a>
      <a href="github.com" target="blank">
        <FaGithub />
      </a>
      <a href="twitter.com" target="blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialMedias;
