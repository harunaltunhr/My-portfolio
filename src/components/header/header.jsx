import React from "react";
import "./header.css";
import CV from "../../assests/Harun Altun CV.pdf";
import MYPHOTO from "../../assests/MYPHOTO.jpeg";
import SocialMedias from "./SocialMedias";
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Harun Altun</h1>
        <h5 className="text-light">Web Developer</h5>
        <a href={CV} download className="btn head-btn">
          Download CV
        </a>
        <a href="#contact" className="btn head-btn">
          Let's Talk
        </a>
        <SocialMedias />
        <div className="myphoto">
          <img src={MYPHOTO} alt="myphoto" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
