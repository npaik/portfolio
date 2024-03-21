"use client";
import { useState } from "react";
import NavBar from "./navBar";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 right-0 p-4 z-50"></div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h4 className="text-center text-9xl mb-4">Tony Paik</h4>
        <div className="text-5xl mt-4">Full Stack Web Developer</div>
      </div>
    </>
  );
}
