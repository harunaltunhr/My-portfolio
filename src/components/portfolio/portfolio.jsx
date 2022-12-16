import React from "react";

import BelcikadaHayat_gif from "../../assests/BelcikadaHayat_gif.gif";
import Zatzon_gif from "../../assests/Zatzon_gif.gif";
import HearMyStory_gif from "../../assests/HearMyStory_gif.gif";
import Trello_gif from "../../assests/Trello_gif.gif";
import Quiz_gif from "../../assests/Quiz_gif.gif";
import {
  Styledpcontainerportfolio,
  Styledportfolioitem,
  Styledportfolioitemimage,
  Styledportfolioitemcta,
  Styledportfolioitemheader,
} from "../styled/Portfolio.styled";
import { StyledButton, StyledButtonprimary } from "../styled/Button.styled";
const data = [
  {
    id: 1,
    source: "",
    image: Zatzon_gif,
    title:
      "An online e-commerce website in Belgium (Used HTML & CSS & Wordpress)",
    github: "",
    link: function () {
      if (this.github !== "") {
        var sour = "btn";
        this.source = sour;
      } else {
        sour = "btn__hidden";
        this.source = sour;
      }
      return sour;
    },
    demo: "https://zatzon.com",
  },
  {
    id: 2,
    source: "",
    image: BelcikadaHayat_gif,
    title:
      "Official website of a platform that provides information to Turks in Belgium",
    github: "",
    link: function () {
      if (this.github !== "") {
        var sour = "btn";
        this.source = sour;
      } else {
        sour = "btn__hidden";
        this.source = sour;
      }
      return sour;
    },
    demo: "https://belcikadahayat.com",
  },
  {
    id: 3,
    source: "",
    image: HearMyStory_gif,
    title: "Hack Your Future Front-End Developer Bootcamp Final Project",
    github: "https://github.com/harunaltunhr/Hear-My-Story",
    link: function () {
      if (this.github !== "") {
        var sour = "btn";
        this.source = sour;
      } else {
        sour = "btn__hidden";
        this.source = sour;
      }
      return sour;
    },

    demo: "https://hear-my-story.herokuapp.com/",
  },
  {
    id: 4,
    source: "",
    image: Trello_gif,
    title:
      "A project management tool based on trello (Currently under development)",
    github: "https://github.com/it-for-us/todo",
    link: function () {
      if (this.github !== "") {
        var sour = "btn";
        this.source = sour;
      } else {
        sour = "btn__hidden";
        this.source = sour;
      }
      return sour;
    },

    demo: "https://github.com/it-for-us/todo",
  },
  {
    id: 5,
    source: "",
    image: Quiz_gif,
    title: "JS Quiz (Created for learning States)",
    github: "https://github.com/harunaltunhr/State-JS-Quiz",
    link: function () {
      if (this.github !== "") {
        var sour = "btn";
        this.source = sour;
      } else {
        sour = "btn__hidden";
        this.source = sour;
      }
      return sour;
    },
    demo: "https://harunaltunhr.github.io/State-JS-Quiz/",
  },
];

const Portfolio = () => {
  data[0].link();
  data[1].link();
  data[2].link();
  data[3].link();
  data[4].link();

  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <Styledpcontainerportfolio>
        {data.map(({ id, image, title, github, demo, source }) => {
          return (
            <Styledportfolioitem key={id}>
              <Styledportfolioitemimage>
                <img src={image} alt={title} />
              </Styledportfolioitemimage>
              <Styledportfolioitemheader>{title}</Styledportfolioitemheader>
              <Styledportfolioitemcta>
                <StyledButton href={github} className={source} target="blank">
                  Github
                </StyledButton>
                <StyledButtonprimary
                  href={demo}
                  className="btn btn-primary"
                  target="blank"
                >
                  Live Page
                </StyledButtonprimary>
              </Styledportfolioitemcta>
            </Styledportfolioitem>
          );
        })}
      </Styledpcontainerportfolio>
    </section>
  );
};

export default Portfolio;
