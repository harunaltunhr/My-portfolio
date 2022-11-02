import React from "react";
import "./portfolio.css";
import MYPHOTO from "../../assests/MYPHOTO.jpeg";

const data = [
  {
    id: 1,
    image: MYPHOTO,
    title: "First Project that I used React",
    github: "https://github.com/harunaltunhr",
    demo: "https://google.com",
  },
  {
    id: 2,
    image: MYPHOTO,
    title: "Second Project that I used React",
    github: "https://github.com/harunaltunhr",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: MYPHOTO,
    title: "Third Project that I used React",
    github: "https://github.com/harunaltunhr",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: MYPHOTO,
    title: "Fourth Project that I used React",
    github: "https://github.com/harunaltunhr",
    demo: "https://google.com",
  },
  {
    id: 5,
    image: MYPHOTO,
    title: "Fifth Project that I used React",
    github: "https://github.com/harunaltunhr",
    demo: "https://google.com",
  },
  {
    id: 6,
    image: MYPHOTO,
    title: "Sixth Project that I used React",
    github: "https://github.com/harunaltunhr",
    demo: "https://google.com",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
