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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      name: "Math Quiz",
      url: "https://d1qrtsxpwm67dt.cloudfront.net/",
      preview: "mathgame.png",
      stack: "TypeScript, React, SST, AWS, KindeAuth, PostgreSQL",
    },
    {
      name: "BCIT QDSHacks 2024",
      url: "https://bcit-qdshacks-2024-patpet.vercel.app/",
      preview: "patpet.png",
      stack: "TypeScript, React, Vite, GPT API, Express",
    },
    {
      name: "Find Waldo Web App",
      url: "https://findwaldo-web-holy-fog-8052.fly.dev/",
      preview: "findwaldo.png",
      stack: "TypeScript, React, .NET Core, Express",
      badge: "asdfas",
    },
    {
      name: "Ancient Hill Winery Redesign",
      url: "https://ancienthillwinery-redesign.vercel.app/",
      preview: "redesign.png",
      stack: "TypeScript, React, Next.js, Tailwind CSS",
    },
    {
      name: "Tonyeebrary EBook library",
      url: "https://tonyeeebrary.vercel.app/",
      preview: "tonyeeebrary.png",
      stack: "TypeScript, React, Next.js, S3 Bucket, AWS, SQLite",
    },
    {
      name: "Expense Tracker App",
      url: "https://seashark1-npaik.fly.dev/",
      preview: "expensetracker.png",
      stack: "TypeScript, React, .NET Core, C#",
    },
    {
      name: "Bank Account Management",
      url: "https://bankaccount.azurewebsites.net/",
      preview: "bankaccount.png",
      stack: ".NET Core, Razor Pages, C#, Azure, SQL Server",
    },
    {
      name: "Words Game Phaser",
      url: "https://wordsgamephaser.vercel.app/",
      preview: "typinggame.png",
      stack: "JavaScript, Phaser, Prisma",
    },
    {
      name: "Game of YUT Board Game",
      url: "https://boardgame-eight.vercel.app/",
      preview: "boardgame.png",
      stack: "JavaScript, React, Prisma",
    },
    {
      name: "Pokemon Matching Game",
      url: "https://pokemonmatchnig.vercel.app/",
      preview: "cardmatching.png",
      stack: "JavaScript, React, CSS",
    },
    {
      name: "Pokemon Card Trader",
      url: "https://pokemoncardtrader.fly.dev/",
      preview: "randomcards.png",
      stack: "JavaScript, React, CSS, Express",
    },
    {
      name: "Gaon Restaurant Blog",
      url: "https://blog-gaon.vercel.app/",
      preview: "restaurantblog.png",
      stack: "TypeScript, React, Next.js, Tailwind CSS",
    },
    {
      name: "Unity Runner Game in Progress",
      url: "/",
      preview: "unitygame.png",
      stack: "C#, Unity",
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
              description={project.stack}
              badge="asdf"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
