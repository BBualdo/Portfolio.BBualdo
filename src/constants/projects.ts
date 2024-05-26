export type ProjectType = {
  id: number;
  type: "console" | "web";
  name: string;
  description: string;
  technologies: string[];
  finishDate: string;
  image?: { console: string; desktop: string; mobile: string };
  linkToRepo: string;
  linkToLive?: string | null;
  slug: string;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    type: "web",
    name: "ClassCarsLLC",
    description:
      "A website created for a client specializing in importing cars from Dubai. The site includes several subpages with separate functionalities such as FAQ Accordion, Image Slider, Contact Form, etc.",
    technologies: [
      "UI/UX Design",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "MUI",
    ],
    finishDate: "09-12-2023",
    image: {
      console: "",
      desktop: "/screenshots/classcarsllc/desktop.png",
      mobile: "/screenshots/classcarsllc/mobile.png",
    },
    linkToRepo: "https://github.com/BBualdo/class-cars-llc",
    linkToLive: "https://classcarsllc.com",
    slug: "/overview/classcarsllc",
  },
  {
    id: 2,
    type: "web",
    name: "Life is a Game",
    description:
      "An application where users can set missions for themselves, track their progress, and earn XP and levels based on the mission's difficulty level. The app also features a built-in achievement system. Currently, user data is stored in the browser's localStorage, but there are plans to expand it with a database and authentication.",
    technologies: [
      "UI/UX Design",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Shadcn-UI",
      "Zod",
      "Redux Toolkit",
    ],
    finishDate: "23-01-2024 (Beta)",
    image: {
      console: "",
      desktop: "/screenshots/liag/desktop.png",
      mobile: "/screenshots/liag/mobile.png",
    },
    linkToRepo: "https://github.com/BBualdo/Life-is-a-Game",
    linkToLive: "https://life-is-a-game.vercel.app",
    slug: "/overview/liag",
  },
  {
    id: 3,
    type: "web",
    name: "Salegency",
    description:
      "A simple landing page created for a client who runs a company that helps other businesses increase their revenue. Website has Cookiebot and Calendly extensions embedded.",
    technologies: [
      "UI/UX Design",
      "Astro",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    finishDate: "06-03-2024",
    image: {
      console: "",
      desktop: "/screenshots/salegency/desktop.png",
      mobile: "/screenshots/salegency/mobile.png",
    },
    linkToRepo: "https://github.com/BBualdo/salegency.co",
    linkToLive: "https://salegency.co",
    slug: "/overview/salegency",
  },
  {
    id: 4,
    type: "console",
    name: "Shifts Logger",
    description:
      "Simple CRUD Console Application where user can manage employees shifts. It was a part of C# Academy Roadmap.",
    technologies: [
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "Web API",
      "Swagger",
      "Spectre Console",
      "CRUD",
    ],
    finishDate: "20-04-2024",
    image: {
      console: "/screenshots/shifts-logger/console.png",
      desktop: "",
      mobile: "",
    },
    linkToRepo: "https://github.com/BBualdo/ShiftsLogger.BBualdo",
    slug: "/overview/shifts-logger",
  },
  {
    id: 5,
    type: "web",
    name: "Quiz Game",
    description:
      "Fullstack Application where users can create Quizzes, play them selecting difficulty level which affects time for answer and track score in Leaderboard. It was a part of C# Academy Roadmap, but I extended it with own features.",
    technologies: [
      "UI/UX Design",
      "Angular",
      "Mobile First",
      "C#",
      "Entity Framework Core",
      "PostgreSQL",
      "Web API",
      "Swagger",
      "TailwindCSS",
      "Angular Material"
    ],
    finishDate: "26-05-2024",
    image: {
      console: "",
      desktop: "/screenshots/quiz-game/desktop.png",
      mobile: "",
    },
    linkToRepo: "https://github.com/BBualdo/QuizGame",
    slug: "/overview/quiz-game",
  },
];
