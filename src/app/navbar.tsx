"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-0 right-0 z-50">
      <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Image src="/close.png" alt="Close" width={24} height={24} />
        ) : (
          <Image src="/dropdown.png" alt="Menu" width={24} height={24} />
        )}
      </button>
      {isOpen && (
        <nav className="fixed top-0 left-0 h-full bg-black text-white w-64 flex flex-col items-start p-4 space-y-4">
          <div className="text-2xl font-bold" onClick={closeMenu}>
            <Link href="/">Home</Link>
          </div>
          <div className="text-lg font-bold" onClick={closeMenu}>
            <Link href="/Projects">Projects</Link>
          </div>
          <div className="text-lg font-bold" onClick={closeMenu}>
            <Link href="/AboutMe">About Me</Link>
          </div>
          <div className="text-lg font-bold" onClick={closeMenu}>
            <Link href="/Contact">Contact</Link>
          </div>
        </nav>
      )}
    </div>
  );
}
