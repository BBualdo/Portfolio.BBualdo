import type { Metadata } from "next";
import { cutiveMono } from "@/utils/fonts";
import '../../globals.css'
import './cybersecurity.css'
import MatrixBackground from "@/components/backgrounds/MatrixBackground";

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
        {children}
      </body>
    </html>
  );
}
