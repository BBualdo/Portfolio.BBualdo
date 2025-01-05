import type { Metadata } from "next";
import { cutiveMono } from "@/utils/fonts";
import '../../globals.css'
import './cybersecurity.css'
import MatrixBackground from "@/components/backgrounds/MatrixBackground";
import { BiLeftArrow } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Blog | Cybersecurity",
  description:
    "I write what I learned since I enrolled cybersecurity path."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.png" />
    </head>
    <body className={cutiveMono.className}>
    <MatrixBackground />
    <nav className="p-6 fixed flex items-center w-full border-b-2 border-matrixGreen/20">
      <div className="inline-block absolute">
        <a href=".." className="flex items-center gap-2 hover:text-matrixGreen hover:font-bold">
          <BiLeftArrow />
          <span className="text-xl">Back to Portfolio</span>
        </a>
      </div>
      <h1 className="text-matrixGreen text-4xl w-full text-center">Cybersecurity</h1>
    </nav>
    {children}
    </body>
    </html>
  );
}
