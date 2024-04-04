"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Loading from "../loading";
import ProjectCard from "../Components/ProjectCard";

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      name: "Ancient Hill Winery Redesign",
      url: "https://ancienthillwinery-redesign.vercel.app/",
      preview: "redesign.png",
    },
    {
      name: "BCIT QDSHacks 2024",
      url: "https://bcit-qdshacks-2024-patpet.vercel.app/",
      preview: "patpet.png",
    },
    {
      name: "Find Waldo Web App",
      url: "https://findwaldo-web-holy-fog-8052.fly.dev/",
      preview: "findwaldo.png",
    },
    {
      name: "Expense Tracker App",
      url: "https://seashark1-npaik.fly.dev/",
      preview: "expensetracker.png",
    },
    {
      name: "Tonyeebrary EBook library",
      url: "https://tonyeeebrary.vercel.app/",
      preview: "tonyeeebrary.png",
    },
    {
      name: "Gaon Restaurant Blog",
      url: "https://blog-gaon.vercel.app/",
      preview: "restaurantblog.png",
    },
    {
      name: "Bank Account Management",
      url: "https://bankaccount.azurewebsites.net/",
      preview: "bankaccount.png",
    },
    {
      name: "Words Game Phaser",
      url: "https://wordsgamephaser.vercel.app/",
      preview: "typinggame.png",
    },
    {
      name: "Game of YUT Board Game",
      url: "https://boardgame-eight.vercel.app/",
      preview: "boardgame.png",
    },
    {
      name: "Pokemon Matching Game",
      url: "https://pokemonmatchnig.vercel.app/",
      preview: "cardmatching.png",
    },
    {
      name: "Pokemon Card Trader",
      url: "https://pokemoncardtrader.fly.dev/",
      preview: "randomcards.png",
    },
    {
      name: "Unity Runner Game in Progress",
      url: "/",
      preview: "unitygame.png",
    },
  ];

  const createUrlFriendlyId = (name: string) => {
    return name.replace(/\s+/g, "");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="text-white flex flex-col justify-center items-center">
      <h4 className="text-center text-5xl mb-4 font-bold">Projects</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/Projects/${createUrlFriendlyId(project.name)}`}
            aria-label={`View project: ${project.name}`}
            className="block"
          >
            <ProjectCard
              name={project.name}
              preview={project.preview}
              url={project.url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
