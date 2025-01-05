import type { Metadata } from "next";
import { cutiveMono } from "@/utils/fonts";
import '../../globals.css'
import './cybersecurity.css'
import MatrixBackground from "@/components/backgrounds/MatrixBackground";
import { BiArrowBack, BiLeftArrow } from "react-icons/bi";

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
    <nav className="p-6 fixed">
      <div className="inline-block">
        <a href=".." className="flex items-center gap-2 hover:text-matrixGreen hover:font-bold">
          <BiLeftArrow />
          <span className="text-xl">Back to Portfolio</span>
        </a>
      </div>
    </nav>
    {children}
    </body>
    </html>
  );
}
