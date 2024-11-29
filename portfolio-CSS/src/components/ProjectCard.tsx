import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// Define types for the component props
interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ background: `url(${imgUrl})` }}
      >
        <div className="project-card-overlay">
          <Link
            href={gitUrl}
            className="icon-button"
          >
            <CodeBracketIcon className="icon" />
          </Link>
          <Link
            href={previewUrl}
            className="icon-button"
          >
            <EyeIcon className="icon" />
          </Link>
        </div>
      </div>
      <div className="project-card-text">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
