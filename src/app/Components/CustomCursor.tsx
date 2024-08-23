"use client";

import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursorPath = "/duck.svg"; // Path to your duck image

    // Set up the main cursor
    document.body.style.cursor = `url(${cursorPath}) 16 16, auto`;

    const trailCount = 7; // Number of ducks in the trail
    const ducks: HTMLImageElement[] = [];

    // Create duck elements
    for (let i = 0; i < trailCount; i++) {
      const duck = document.createElement("img");
      duck.src = cursorPath;
      duck.style.position = "absolute";
      duck.style.pointerEvents = "none";
      const size = 20; // Adjusted size for all trailing ducks
      duck.style.width = `${size}px`;
      duck.style.height = `${size}px`;
      duck.style.opacity = "0.8"; // Slightly transparent for the trail
      duck.style.zIndex = `${9999 - i}`; // Ensure they appear on top
      document.body.appendChild(duck);
      ducks.push(duck);
    }

    // Function to move the ducks
    const moveDucks = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      ducks.forEach((duck, index) => {
        setTimeout(() => {
          duck.style.left = `${x}px`; // Align the ducks directly with the pointer
          duck.style.top = `${y}px`; // Align the ducks directly with the pointer
        }, index * 50); // Delay for trailing effect
      });
    };

    document.addEventListener("mousemove", moveDucks);

    return () => {
      // Clean up on component unmount
      document.removeEventListener("mousemove", moveDucks);
      ducks.forEach((duck) => document.body.removeChild(duck));
    };
  }, []);

  return null;
};

export default CustomCursor;
