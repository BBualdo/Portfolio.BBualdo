import type { Metadata } from "next";

import "./globals.css";
import { lato } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Sebastian Opozda | Web Developer Portfolio",
  description:
    "Personal web development portfolio website to showcase what I can do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
