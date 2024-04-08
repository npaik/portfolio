"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [hideFirstCursor, setHideFirstCursor] = useState(false);
  const [hideSecondCursor, setHideSecondCursor] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [hideThirdCursor, setHideThirdCursor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsTyping(true);
      setHideFirstCursor(true);

      setTimeout(() => {
        setHideSecondCursor(true);
        setShowThirdLine(true);

        setTimeout(() => {
          setHideThirdCursor(true);
        }, 5000);
      }, 5000);
    }, 1000);

    return () => clearTimeout(timer);
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Suspense fallback={<Loading />}></Suspense>
      <div className="fixed top-0 right-0 p-4 z-50"></div>
      <div className="flex flex-col justify-center items-center pt-8 sm:pt-24 md:pt-36 lg:pt-48 xl:mt-36">
        <div className="hover:text-scale-up">
          <h1
            className="typing text-center sm:text-xl md:text-3xl lg:text-5xl ml-6 mb-4 text-white transition-transform duration-300"
            style={{
              animation: hideFirstCursor ? "none" : "",
              borderRight: hideFirstCursor ? "none" : "3px solid white",
            }}
          >
            {wrapTextForHoverEffect("Hi there, I'm Tony Paik", false)}
          </h1>
          {isTyping && (
            <p
              className="typing text-center sm:text-md md:text-lg lg:text-2xl ml-6 mb-4 text-white transition-transform duration-300"
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
              className="typing text-center sm:text-md md:text-lg lg:text-2xl ml-6 mb-4 text-white transition-transform duration-300"
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
      <div className="flex justify-end items-center space-x-4">
        <Link
          className="rounded-full p-2 hover:bg-gray-100"
          href="https://github.com/npaik"
        >
          <Image
            src="/github.png"
            alt="Github"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          className="rounded-full p-2 hover:bg-gray-100"
          href="https://www.linkedin.com/in/npaik/"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
    </>
  );
}
