import React from "react";
import CV from "../../assests/Harun Altun-CV Eng.pdf";
import MYPHOTO from "../../assests/MYPHOTO.v3.webp";
import SocialMedias from "./SocialMedias";
import Logo from "../../assests/Logo-removebg.png";
import {
  StyledHeader,
  StyledLogo,
  StyledScroll,
  StyledHeaderPhoto,
  StyledContainerheader,
} from "../styled/Header.styled.js";
import { StyledButton, StyledButtonprimary } from "../styled/Button.styled";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainerheader>
        <h2>Hello I'm</h2>
        <div className="header__logo">
          <StyledLogo src={Logo} alt="mylogo" />
        </div>

        <h4 className="text-light">Web Developer</h4>
        <StyledButton href={CV} download>
          Download CV
        </StyledButton>
        <StyledButtonprimary href="#contact">Let's Talk</StyledButtonprimary>
        <SocialMedias />
        <StyledHeaderPhoto className="myphoto">
          <img src={MYPHOTO} alt="myphoto" />
        </StyledHeaderPhoto>
        <StyledScroll href="#contact">Scroll Down</StyledScroll>
      </StyledContainerheader>
    </StyledHeader>
  );
};

export default Header;
