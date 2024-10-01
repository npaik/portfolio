"use client";
import BackgroundVideo from "../background-video";
import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <div className="relative h-screen">
      <BackgroundVideo />

      <div className="absolute inset-0 flex flex-col justify-between text-white p-4">
        <h1 className="text-[10vw] font-bold leading-loose">TONY PAIK</h1>

        <div className="flex flex-col items-end">
          <h2 className="text-3xl pb-4 text-right">
            I&apos;m a Full-Stack Web Developer. I love crafting fun, useful,
            and innovative solutions.
          </h2>
          <p className="pb-[10%] flex items-center space-x-2 justify-end">
            <Link href="/Projects" className="flex items-center">
              <span>Click here to check out my projects!</span>
              <Image
                src="/duck.svg"
                alt="Duck Icon"
                width={24}
                height={24}
                className="h-6 w-6 ml-2"
              />
            </Link>
            <Link
              className="rounded-full p-2 hover:bg-gray-100"
              href="https://github.com/npaik"
              target="_blank"
              passHref
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
              target="_blank"
              passHref
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
          </p>
        </div>
      </div>
    </div>
  );
}
