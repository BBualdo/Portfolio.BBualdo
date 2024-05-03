"use client";

import { lato } from "@/utils/fonts";
import { Link } from "react-scroll";

const CTA = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      to={href}
      smooth
      className={`${lato.className} pointer text-md group relative mt-4 bg-black px-4 py-2 font-bold uppercase text-white underline-offset-8 transition-all duration-200 hover:text-viceCyan hover:underline lg:mt-10 lg:text-xl`}
    >
      <div className="gradient-pinkcyan absolute -bottom-1 -left-1 -right-1 -top-1 z-[-1] transition-all duration-200 group-hover:scale-x-110 group-hover:scale-y-150 group-hover:opacity-0" />
      {children}
    </Link>
  );
};

export default CTA;
