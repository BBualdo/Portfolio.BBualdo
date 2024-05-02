import type { Metadata } from "next";

import "./globals.css";
import { lato } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Sebastian Opozda | Web Developer Portfolio",
  description: "",
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
