import type { Metadata } from "next";

import { lato } from "@/utils/fonts";

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
    <body className={lato.className}>{children}</body>
    </html>
  );
}
