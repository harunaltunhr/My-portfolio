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
          <StyledH3>Frontend Development</StyledH3>
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
                <h4>JavaScript</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>npm</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>SQL</h4>
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

        <ExperienceContainerdiv>
          <StyledH3>Frameworks/Library</StyledH3>
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
                <h4>Node.js</h4>
              </div>
            </Experiencedetails>
            <Experiencedetails>
              <BsPatchCheckFill className="experinece__details-icon" />
              <div>
                <h4>jquery</h4>
              </div>
            </Experiencedetails>
          </Experiencecontent>
        </ExperienceContainerdiv>
      </ExperienceContainer>
    </section>
  );
};
export default Experience;
