"use client";

import { lato } from "@/utils/fonts";
import { Link } from "react-scroll";

const CTAButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      to="projects"
      smooth
      className={`${lato.className} group relative mt-10 cursor-pointer bg-black px-4 py-2 text-xl font-bold uppercase text-white underline-offset-8 transition-all duration-200 hover:text-viceCyan hover:underline`}
    >
      <div className="gradient-pinkcyan absolute -bottom-1 -left-1 -right-1 -top-1 z-[-1] transition-all duration-200 group-hover:scale-x-110 group-hover:scale-y-150 group-hover:opacity-0" />
      {children}
    </Link>
  );
};

export default CTAButton;
