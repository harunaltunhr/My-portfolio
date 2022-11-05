import React from "react";
import "./header.css";
import CV from "../../assests/Harun_Altun_Web-Developer-CV.pdf";
import MYPHOTO from "../../assests/MYPHOTO.v3.png";
import SocialMedias from "./SocialMedias";
import Logo from "../../assests/Logo-removebg.png";
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <div className="header__logo">
          <img src={Logo} alt="mylogo" />
        </div>

        <h4 className="text-light">Web Developer</h4>
        <a href={CV} download className="btn head-btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
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
