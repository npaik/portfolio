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
  "BCIT Graduate",
  "Frontend Specialist",
  "Backend Architect",
  "Web Developer",
  "React",
  "Next.js",
  "Node.js",
  "ASP.NET",
  "Laravel",
  "Cloud Deployment",
  "AWS",
  "Database Management",
  "Agile Methodology",
  "Project Leadership",
  "Game Development",
  "Creative Innovator",
  "Tech Hackathons",
  "Team Collaboration",
  "Passionate about Technology",
  "Fast Learner",
  "Problem Solver",
  "Detail Oriented",
  "Customer Focused",
  "Continuous Improvement",
  "User Experience",
  "Responsive Design",
  "Enthusiastic",
  "Positive Attitude",
];

const getRandomVelocity = () => Math.random() * 2 - 1;

export default function AboutMePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [words, setWords] = useState<Word[]>([]);

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
      canvas.width = window.innerWidth * 0.8;
      canvas.height = window.innerHeight * 0.8;
      setWords(initializeWords(canvas.width, canvas.height));
    }
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        const draw = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.font = "30px Arial";
          context.fillStyle = "#FFFFFF";

          words.forEach((word) => {
            word.position.x += word.velocity.x;
            word.position.y += word.velocity.y;

            if (word.position.x <= 0 || word.position.x >= canvas.width)
              word.velocity.x *= -1;
            if (word.position.y <= 0 || word.position.y >= canvas.height)
              word.velocity.y *= -1;

            context.fillText(word.text, word.position.x, word.position.y);
          });

          requestAnimationFrame(draw);
        };

        draw();
      }
    }
  }, [words]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-white text-7xl mb-4">Tony Paik</div>
      <div className="text-white text-3xl mb-4">Full Stack Web Developer</div>
      <div className="relative">
        <canvas ref={canvasRef} className="border-2"></canvas>
      </div>
    </div>
  );
}
