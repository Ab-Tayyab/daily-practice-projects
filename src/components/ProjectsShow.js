import React from "react";
import { Link, useParams } from "react-router-dom";
import projectsList from "./ProjectsDataAPI";

const ProjectsShow = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="project-btn">Back</button>
      </Link>
      {projectsList.map((item) => {
        if (item.name === name) {
          return <div>{item.component}</div>;
        }
      })}
    </div>
  );
};

export default ProjectsShow;
