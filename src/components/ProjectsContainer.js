import React, { useState } from "react";
import "./ProjectsContainer.css";
import projectsList from "./ProjectsList";

const ProjectsContainer = () => {
  const [projectName, setProjectName] = useState("Background Color Changer");

  const clickHandler = (e) => {
    setProjectName(e);
    console.log(e);
  };
  return (
    <div className="project-container">
      <div>
        <div className="project-name">
          <h1>Projects</h1>
          <div>
            {projectsList.map((item, index) => {
              return (
                <button
                  className="project-btn"
                  onClick={() => clickHandler(item.name)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="project-show">
          <h1>Project Show</h1>
          <div>
            {projectsList.map((item, index) => {
              if (item.name === projectName) {
                return item.component;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
