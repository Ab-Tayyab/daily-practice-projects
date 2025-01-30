import React from "react";
import "./ProjectsList.css";
import projectsList from "./ProjectsDataAPI";
import { Link } from "react-router-dom";


const ProjectsList = () => {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="projects-name">
        {projectsList.map((item, index) => {
          return (
            <Link
            key={index}
            to={`/project-name/${item.name}`} 
            style={{ textDecoration: "none" }}
          >
              <button className="project-btn">{item.name}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
