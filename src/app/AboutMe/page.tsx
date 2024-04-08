"use client";
import React, { useRef, useEffect, useState } from "react";

interface Word {
  text: string;
  position: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
}

const keywords = [
  "ASP.NET",
  "Agile Methodology",
  "AWS",
  "Azure",
  "Backend Architect",
  "BCIT Graduate",
  "C#",
  "CI/CD",
  "Cloud Deployment",
  "Continuous Improvement",
  "Creative Innovator",
  "CSS",
  "Customer Focused",
  "Database Management",
  "Detail Oriented",
  "Enthusiastic",
  "Express.js",
  "Fast Learner",
  "Frontend Specialist",
  "Game Development",
  "HTML",
  "JavaScript",
  "Laravel",
  "MySQL",
  "Next.js",
  "Node.js",
  "Passionate about Technology",
  "Phaser.js",
  "PHP",
  "Positive Attitude",
  "PostgreSQL",
  "Problem Solver",
  "Project Leadership",
  "Python",
  "React",
  "Responsive Design",
  "S3",
  "SQLite",
  "Tailwind CSS",
  "Team Collaboration",
  "Tech Hackathons",
  "TypeScript",
  "User Experience",
  "Web Developer",
];

const categorizedKeywords = {
  Frontend: [
    "CSS",
    "HTML",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
  ],
  Backend: [
    "ASP.NET",
    "C#",
    "Express.js",
    "Node.js",
    "PHP",
    "Python",
    "Laravel",
  ],
  Database: ["MySQL", "PostgreSQL", "SQLite"],
  Cloud: ["AWS", "Azure", "Cloud Deployment", "S3", "Vercel", "Fly.io"],
};

const getRandomVelocity = () => Math.random() * 2 - 1;

export default function AboutMePage() {
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [words, setWords] = useState<Word[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [displayList, setDisplayList] = useState(false);
  const [listOpacity, setListOpacity] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const fadeOutTimeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setDisplayList(true);
          const fadeInterval = setInterval(() => {
            setListOpacity((currentOpacity) => {
              const newOpacity = currentOpacity + 0.02;
              if (newOpacity >= 1) {
                clearInterval(fadeInterval);
                return 1;
              }
              return newOpacity;
            });
          }, 20);
        }, 1000);
      }, 2000);

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        clearTimeout(fadeOutTimeout);
      };
    }
  }, [isLoading]);

  const initializeWords = (width: number, height: number) => {
    return keywords.map((keyword) => ({
      text: keyword,
      position: { x: Math.random() * width, y: Math.random() * height },
      velocity: { x: getRandomVelocity(), y: getRandomVelocity() },
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setWords(initializeWords(canvas.width, canvas.height));
    }
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setDisplayList(true);
      }, 1000);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    let opacity = 1;

    if (canvas && !displayList) {
      const context = canvas.getContext("2d");
      let animationFrameId: any;

      const draw = () => {
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = opacity;
        context.font = "20px Arial";
        context.fillStyle = "#FFFFFF";

        words.forEach((word) => {
          context.fillText(word.text, word.position.x, word.position.y);

          if (!fadeOut) {
            word.position.x += word.velocity.x;
            word.position.y += word.velocity.y;

            if (word.position.x <= 0 || word.position.x >= canvas.width)
              word.velocity.x *= -1;
            if (word.position.y <= 0 || word.position.y >= canvas.height)
              word.velocity.y *= -1;
          }
        });

        if (fadeOut) {
          opacity -= 0.02;
          if (opacity <= 0) {
            cancelAnimationFrame(animationFrameId);
            return;
          }
        }

        animationFrameId = requestAnimationFrame(draw);
      };

      draw();

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }
  }, [words, fadeOut, displayList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setDisplayList(true);

        const fadeInterval = setInterval(() => {
          setListOpacity((currentOpacity) => {
            const newOpacity = currentOpacity + 0.02;
            if (newOpacity >= 1) {
              clearInterval(fadeInterval);
              return 1;
            }
            return newOpacity;
          });
        }, 20);
      }, 1000);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-hidden">
      <div className="text-white text-5xl mb-4 font-bold">Tony Paik</div>
      <div className="text-white text-3xl mb-10 font-bold">
        Full Stack Web Developer
      </div>
      {displayList ? (
        <div style={{ opacity: listOpacity }}>
          <div className="text-white text-xl mb-4">
            I am deeply passionate about crafting innovative solutions in web
            development. I am always in pursuit of a learning environment that
            encourages the application of the latest technologies and practices.
            My goal is to continuously grow and excel in development, bringing
            fresh, effective solutions to the table. My experience in restaurant
            management has made me strong in management, leadership, and
            teamwork skills and promoted a positive and enthusiastic attitude to
            facing challenges. I am dedicated to bringing this dynamic energy to
            the tech industry, leveraging my background to enable collaboration
            and drive projects to success.
          </div>
          <div className="flex flex-col text-3xl font-bold mb-2 pt-10">
            SKILLS
          </div>
          <div className="flex ">
            <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
              {Object.entries(categorizedKeywords).map(
                ([category, keywords], index) => (
                  <div key={index} className="flex flex-col">
                    <div className="text-xl font-bold mb-2">{category}</div>
                    {keywords.map((keyword, keywordIndex) => (
                      <div key={keywordIndex} className="text-md p-1">
                        {keyword}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <canvas ref={canvasRef} className="w-full border-2"></canvas>
        </div>
      )}
    </div>
  );
}
