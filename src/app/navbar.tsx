"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mainContent = document.querySelector("main");
      if (mainContent) {
        if (isOpen) {
          mainContent.classList.add("blur-effect");
        } else {
          mainContent.classList.remove("blur-effect");
        }
      }
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

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

  const wrapTextForHoverEffect = (text: string) =>
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
    <div className="fixed top-0 right-0 z-50">
      <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={isOpen ? "/closebutton.png" : "/hamburger.png"}
          alt={isOpen ? "Close" : "Menu"}
          width={55}
          height={55}
        />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          ></div>
          <nav className="fixed top-0 right-0 h-full bg-gray-900 text-white flex flex-col items-center justify-center p-8 space-y-6 z-50">
            <button
              className="fixed top-0 right-0 p-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src={isOpen ? "/closebutton.png" : "/hamburger.png"}
                alt={isOpen ? "Close" : "Menu"}
                width={55}
                height={55}
              />
            </button>
            <div className="text-6xl font-bold" onClick={closeMenu}>
              <Link href="/">{wrapTextForHoverEffect("Home")}</Link>
            </div>
            <div className="text-7xl font-bold" onClick={closeMenu}>
              <Link href="/Projects">{wrapTextForHoverEffect("Projects")}</Link>
            </div>
            <div className="text-5xl font-bold" onClick={closeMenu}>
              <Link href="/AboutMe">{wrapTextForHoverEffect("About Me")}</Link>
            </div>
            <div className="text-4xl font-bold" onClick={closeMenu}>
              <Link href="/Contact">{wrapTextForHoverEffect("Contact")}</Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
