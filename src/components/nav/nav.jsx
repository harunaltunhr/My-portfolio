import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { MdOutlineWork } from "react-icons/md";
const Nav = () => {
  const [activeBtn, setActiveBtn] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveBtn("#")}
        className={activeBtn === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveBtn("#about")}
        className={activeBtn === "#about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveBtn("#experience")}
        className={activeBtn === "#experience" ? "active" : ""}
      >
        <GiAchievement />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveBtn("#portfolio")}
        className={activeBtn === "#portfolio" ? "active" : ""}
      >
        <MdOutlineWork />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveBtn("#contact")}
        className={activeBtn === "#contact" ? "active" : ""}
      >
        <FiPhoneCall />
      </a>
    </nav>
  );
};

export default Nav;
