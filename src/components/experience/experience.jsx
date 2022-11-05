import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>npm</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Wordpress</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frameworks">
          <h3>Frameworks/Library</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Vue.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>jquery</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
