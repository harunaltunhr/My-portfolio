import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Logo from "../../assests/Logo-removebg.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={Logo} className="footer__logo" alt="logo" />
      </div>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
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
      </div>

      <div className="footer__copyright">
        <p>
          <a
            href="https://fonts.adobe.com/designers/fevzi-yazici"
            target="_blank"
            rel="noreferrer"
          >
            This excellent font
          </a>{" "}
          belongs to{" "}
          <a
            href="https://kernsandcairns.typenetwork.com/news/article/letters-from-prison-fevzi-yazici-firdevs"
            target="_blank"
            rel="noreferrer"
          >
            Fevzi Yazici
          </a>
          , who was imprisoned in Turkey for his thoughts.
        </p>
        <small>&copy; Harun Altun 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
