import React from "react";
import "./portfolio.css";
import MYPHOTO from "../../assests/MYPHOTO.jpeg";
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MYPHOTO} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a
            href="https://github.com/harunaltunhr"
            className="btn"
            target="blank"
          >
            Github
          </a>
          <a
            href="https://dribbble.com/altunhr"
            className="btn btn-primary"
            target="blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
