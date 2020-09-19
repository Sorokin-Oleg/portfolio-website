import React from "react";
import Rotate from "./Rotate";

const SectionSkills = () => (
  <section>
    <div className="content content-overflow-y">
      <div className="skills-section">
        <div className="skills-description-container">
          <h1>My Skills</h1>
          <p>This section describes my skills related only to web development.</p>
          <h4>Skills:</h4>
          <ul>
            <li>Base technologies: HTML, CSS (SASS), JavaScript/ECMAScript 6 +</li>
            <li>Layout desing: Grid, Flexbox, Bootstrap 3/4</li>
            <li>Frameworks and libraries: ReactJS, React-Router, Redux, jQuery, Socket-IO</li>
            <li>Assembly tools: npm, WebPack, Babel</li>
            <li>Version control system: Git</li>
          </ul>
        </div>
        <div className="skills-image-container">
          <div className="skills-image-content">
            <img src="./assets/img/icons/html.svg" alt="HTML" style={{ height: "50px" }} />
            <img src="./assets/img/icons/css.svg" alt="CSS" style={{ height: "50px" }} />
            <img src="./assets/img/icons/bootstrap.svg" alt="Bootstrap" style={{ height: "45px" }} />
            <img src="./assets/img/icons/sass.svg" alt="SASS" style={{ height: "45px" }} />
          </div>
          <div className="skills-image-content">
            <img src="./assets/img/icons/javaScript.svg" alt="JavaScript" style={{ height: "45px" }} />
            <img src="./assets/img/icons/jquery.svg" alt="jQuery" style={{ height: "50px" }} />
          </div>
          <div className="skills-image-content">
            <img src="./assets/img/icons/react.svg" alt="React" style={{ height: "50px" }} />
            <img src="./assets/img/icons/redux.svg" alt="Redux" style={{ height: "45px" }} />
            <img src="./assets/img/icons/react-router.svg" alt="React-Router" style={{ width: "50px" }} />
          </div>
          <div className="skills-image-content">
            <img src="./assets/img/icons/npm.svg" alt="npm" style={{ height: "20px" }} />
            <img src="./assets/img/icons/webpack.svg" alt="Webpack" style={{ height: "45px" }} />
            <img src="./assets/img/icons/git.svg" alt="Git" style={{ height: "45px" }} />
            <img src="./assets/img/icons/github.svg" alt="GitHub" style={{ height: "45px" }} />
            <img src="./assets/img/icons/highcharts.svg" alt="Hughcharts" style={{ height: "45px" }} />
          </div>
        </div>
      </div>
    </div>
    <Rotate />
  </section>
);

export default SectionSkills;
