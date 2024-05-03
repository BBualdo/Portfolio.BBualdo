import { lato } from "@/utils/fonts";

const CTAAnchor = ({
  children,
  href,
  id,
  ariaLabel,
}: {
  children: React.ReactNode;
  href: string;
  id: string;
  ariaLabel: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      id={id}
      aria-label={ariaLabel}
      className={`${lato.className} pointer text-md group relative mt-4 bg-black px-4 py-2 font-bold uppercase text-white underline-offset-8 transition-all duration-200 hover:text-viceCyan hover:underline lg:mt-10 lg:text-xl`}
    >
      <div className="gradient-pinkcyan absolute -bottom-1 -left-1 -right-1 -top-1 z-[-1] transition-all duration-200 group-hover:scale-x-110 group-hover:scale-y-150 group-hover:opacity-0" />
      {children}
    </a>
  );
};

export default CTAAnchor;
