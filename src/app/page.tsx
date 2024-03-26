"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isTyping, setIsTyping] = useState(false);
  const [hideFirstCursor, setHideFirstCursor] = useState(false);
  const [hideSecondCursor, setHideSecondCursor] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [hideThirdCursor, setHideThirdCursor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTyping(true);
      setHideFirstCursor(true);

      setTimeout(() => {
        setHideSecondCursor(true);
        setShowThirdLine(true);

        setTimeout(() => {
          setHideThirdCursor(true);
        }, 5000);
      }, 5000);
    }, 5000);
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleMouseEnter = (e: any) => {
    e.target.style.color = getRandomColor();
  };

  const handleMouseLeave = (e: any) => {
    e.target.style.color = "white";
  };

  const wrapTextForHoverEffect = (
    text: string,
    isSecondSentence = false,
    isThirdSentence = false
  ) =>
    text.split("").map((char, index) =>
      char === " " ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <span
          key={index}
          className="letter"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {char}
        </span>
      )
    );

  return (
    <>
      <div className="fixed top-0 right-0 p-4 z-50"></div>
      <div className="flex flex-col justify-center items-center pt-48 mt-36 bg-black">
        <div className="hover:text-scale-up">
          <h1
            className="typing text-center text-6xl md:text-8xl lg:text-9xl ml-6 mb-4 text-white transition-transform duration-300"
            style={{
              animation: hideFirstCursor ? "none" : "",
              borderRight: hideFirstCursor ? "none" : "3px solid white",
            }}
          >
            {wrapTextForHoverEffect("Hi there, I'm Tony Paik", false)}
          </h1>
          {isTyping && (
            <p
              className="typing text-center text-xl md:text-3xl lg:text-4xl ml-6 mb-4 text-white transition-transform duration-300"
              style={{
                animation: hideSecondCursor ? "none" : "",
                borderRight: hideSecondCursor ? "none" : "3px solid white",
              }}
            >
              {wrapTextForHoverEffect(
                "I'm a Full-Stack Web Developer. I love crafting fun, useful, and innovative solutions.",
                true
              )}
            </p>
          )}
          {showThirdLine && (
            <p
              className="typing text-center text-xl md:text-3xl lg:text-4xl ml-6 mb-4 text-white transition-transform duration-300"
              style={{
                animation: hideThirdCursor ? "none" : "",
                borderRight: hideThirdCursor ? "none" : "3px solid white",
              }}
            >
              <Link href="/Projects">
                {wrapTextForHoverEffect(
                  "Click here to check out my projects!",
                  true
                )}
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
