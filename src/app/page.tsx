"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isTyping, setIsTyping] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTyping(true);

      setTimeout(() => {
        setHideCursor(true);
      }, 5000);
    }, 5000);
  }, []);

  return (
    <>
      <canvas className="fixed top-0 left-0 w-screen h-screen z-0"></canvas>
      <div className="fixed top-0 right-0 p-4 z-50"></div>
      <div className="flex flex-col justify-center items-center pt-48 mt-36 bg-black">
        <div className="hover:text-scale-up">
          <h1
            className="typing text-center text-6xl md:text-8xl lg:text-9xl ml-6 mb-4 text-white transition-transform duration-500"
            style={{
              animation: hideCursor ? "none" : "",
              borderRight: hideCursor ? "none" : "",
            }}
          >
            Hi there, I&#39;m Tony Paik
          </h1>
          {isTyping && (
            <p
              className="typing text-center text-xl md:text-3xl lg:text-4xl hover:text-6xl ml-6 text-white transition-transform duration-300"
              style={{
                animation: hideCursor ? "none" : "",
                borderRight: hideCursor ? "none" : "",
              }}
            >
              I&#39;m a Full-Stack Web Developer. I love crafting fun, useful,
              and innovative solutions.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
