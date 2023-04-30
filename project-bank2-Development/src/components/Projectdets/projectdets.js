import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./projectdets.css";

const ProjectDetails = () => {
  const location = useLocation();
  const projectData = location.state?.projectData;

  return (
    <div className="project-details">
      <h2 className="project-details__heading">Project Details</h2>
      <div className="project-details__content">
        <p className="project-details__content__item">
          <span className="project-details__content__label">Project Name:</span>{" "}
          {projectData.name}
        </p>
        <p className="project-details__content__item">
          <span className="project-details__content__label">Description:</span>{" "}
          {projectData.description}
        </p>
        <p className="project-details__content__item">
          <span className="project-details__content__label">Members:</span>{" "}
          {projectData.members}
        </p>
        <p className="project-details__content__item">
          <span className="project-details__content__label">GitHub Link:</span>{" "}
          {projectData.github_link}
        </p>
        <p className="project-details__content__item">
          <Link
            to={{
              pathname: "/projects",
            }}
            className="project-details__go-back"
          >
            Go Back to Projects
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
