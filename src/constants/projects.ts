export type ProjectType = {
  id: number;
  name: string;
  technologies: string[];
  finishDate: string;
  image: { desktop: string; mobile: string };
  linkToRepo: string;
  linkToLive: string | null;
  slug: string;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Life is a Game",
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Shadcn-UI",
      "Zod",
      "Redux Toolkit",
    ],
    finishDate: "23-01-2024 (BETA)",
    image: {
      desktop: "/screenshots/liag/desktop.png",
      mobile: "/screenshots/liag/mobile.png",
    },
    linkToRepo: "https://github.com/BBualdo/Life-is-a-Game",
    linkToLive: "life-is-a-game.vercel.app",
    slug: "/overview/liag",
  },
  {
    id: 2,
    name: "ClassCarsLLC",
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "MUI",
    ],
    finishDate: "09-12-2023",
    image: {
      desktop: "/screenshots/classcarsllc/desktop.png",
      mobile: "/screenshots/classcarsllc/mobile.png",
    },
    linkToRepo: "https://github.com/BBualdo/class-cars-llc",
    linkToLive: "https://classcarsllc.com",
    slug: "/overview/classcarsllc",
  },
  {
    id: 3,
    name: "Salegency",
    technologies: ["Astro", "TypeScript", "TailwindCSS", "Framer Motion"],
    finishDate: "06-03-2024",
    image: {
      desktop: "/screenshots/salegency/desktop.png",
      mobile: "/screenshots/salegency/mobile.png",
    },
    linkToRepo: "https://github.com/BBualdo/salegency.co",
    linkToLive: "https://salegency.co",
    slug: "/overview/salegency",
  },
];
