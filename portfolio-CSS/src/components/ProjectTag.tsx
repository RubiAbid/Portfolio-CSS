import React from "react";

// Define types for the component props
interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  // Conditional class names based on selection
  const buttonClass = isSelected
    ? "project-tag-button project-tag-button-selected"
    : "project-tag-button project-tag-button-default";

  return (
    <button
      className={buttonClass}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
