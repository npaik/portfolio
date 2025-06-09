import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import NavBar from "./navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tony Paik",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "relative bg-black text-white background-custom"
        )}
      >
        <header className="bg-black text-white shadow-md">
          {/* <NavBar /> */}
        </header>
        <main className="mt-10 mx-auto max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
