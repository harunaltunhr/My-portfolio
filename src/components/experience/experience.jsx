import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  ExperienceContainer,
  ExperienceContainerdiv,
  Experiencecontent,
  Experiencedetails,
} from "../styled/Experience.styled";
import { StyledH3 } from "../styled/General.styled";
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <ExperienceContainer>
        <ExperienceContainerdiv>
          <Experiencecontent>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Resp. Design</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </Experiencedetails>
          </Experiencecontent>
        </ExperienceContainerdiv>

        <ExperienceContainerdiv>
          <Experiencecontent>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Vue.js</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>TailWind</h4>
              </div>
            </Experiencedetails>
          </Experiencecontent>
        </ExperienceContainerdiv>
        <ExperienceContainerdiv>
          <Experiencecontent>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Node.Js</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Npm</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Git/Github</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Jquery</h4>
              </div>
            </Experiencedetails>
          </Experiencecontent>
        </ExperienceContainerdiv>

        <ExperienceContainerdiv>
          <Experiencecontent>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Agile</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>Wordpress</h4>
              </div>
            </Experiencedetails>
          </Experiencecontent>
        </ExperienceContainerdiv>
      </ExperienceContainer>
    </section>
  );
};
export default Experience;
