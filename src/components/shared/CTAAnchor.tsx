import { lato } from "@/utils/fonts";
import { ReactNode } from "react";

const CTAAnchor = ({
  children,
  href,
  id,
  ariaLabel,
  target = "_blank",
  disabled
}: {
  children: ReactNode;
  href: string;
  id: string;
  ariaLabel: string;
  target?: "_blank" | "_self";
  disabled?: boolean;
}) => {
  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      id={id}
      aria-label={ariaLabel}
      className={`${lato.className} ${!disabled ? "pointer hover:text-viceCyan hover:underline" : "opacity-70"} text-md group relative bg-black px-4 py-2 font-bold uppercase text-white underline-offset-8 transition-all duration-200 lg:text-xl`}
    >
      <div className={`absolute -bottom-1 -left-1 -right-1 -top-1 z-[-1] transition-all duration-200 ${!disabled && "gradient-pinkcyan group-hover:scale-x-110 group-hover:scale-y-150 group-hover:opacity-0"}`} />
      {children}
    </a>
  );
};

export default CTAAnchor;
