// ProjectCard.tsx
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  name: string;
  preview: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, preview, url }) => {
  return (
    <div className="card cursor-pointer">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <strong>{name}</strong>
          </div>
        </div>
        <div className="front">
          <Image
            src={`/${preview}`}
            alt={name}
            layout="fill"
            className="img"
            objectFit="cover"
          />
          <div className="front-content"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
