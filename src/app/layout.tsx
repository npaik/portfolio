import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import NavBar from "./navbar";
import { Inter, Manrope } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], weight: "400" });

const ScrollIndicator = dynamic(() => import("./Components/ScrollIndicator"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("./Components/CustomCursor"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "nakhyunpaik.com",
  description: "Tony's personal portfolio",
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
        <CustomCursor />
        <ScrollIndicator />
        <header className="bg-black text-white shadow-md">
          {/* <NavBar /> */}
        </header>
        <main className="mt-10 mx-auto max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
