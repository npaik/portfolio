import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  name: string;
  preview: string;
  url: string;
  description: string;
  badge: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  preview,
  url,
  description,
  badge,
}) => {
  return (
    <div className="">
      <div className="card cursor-pointer">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <strong>{name}</strong>
              <div className="flex justify-center description items-center">
                {description}
                {/* <small className="badge">{badge}</small> */}
              </div>
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
            <div className="front-content">
              {/* <small className="badge">{badge}</small> */}
              {/* <div className="description">{description}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
