/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kOso890NvLk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "../loading";

export default function Component() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col items-center w-full pt-40 mt-30">
      <div className="container grid max-w-2xl px-4 gap-6 md:px-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold mb-10">Contact me</h1>
          </div>

          <div className="space-y-2">
            <p className="text-gray-500 dark:text-gray-400">
              You can reach out to me through my social media profiles or by
              email.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                className="rounded-full p-2 hover:bg-gray-100"
                href="mailto:nakhyunpaik@gmail.com"
              >
                <Image
                  src="/email.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="sr-only">Email</span>
              </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
