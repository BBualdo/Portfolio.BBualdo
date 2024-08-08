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
    finishDate: "09-12-2023 (in progress)",
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
    id: 3,
    type: "web",
    name: "Quiz Game",
    description:
      "Fullstack Application with ASP.NET Core Identity Authorization and Authentication, where users can create Quizzes, play them selecting difficulty level which affects time for answer and track score in Leaderboard. It was a part of C# Academy Roadmap, but I extended it with own features.",
    technologies: [
      "UI/UX Design",
      "Angular",
      "Mobile First",
      "C#",
      "ASP.NET Identity",
      "ILogger",
      "Entity Framework Core",
      "PostgreSQL",
      "Web API",
      "Swagger",
      "TailwindCSS",
      "Angular Material"
    ],
    finishDate: "30-05-2024",
    image: {
      console: "",
      desktop: "/screenshots/quiz-game/desktop.png",
      mobile: "",
    },
    linkToRepo: "https://github.com/BBualdo/QuizGame",
    slug: "/overview/quiz-game",
  },
  {
    id: 4,
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
    id: 5,
    type: "web",
    name: "Life is a Game",
    description:
      "App where authenticated users can manage self-assigned missions, get XP, Levels and Achievements. Used Next.js for folder-based routing and SSR, and ASP.NET Core for reliability and security.",
    technologies: [
      "UI/UX Design",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "C#",
      "Framer Motion",
      "Shadcn-UI",
      "Zod",
      "Redux Toolkit",
      "Redux-Persist",
      "React-Hook-Form",
      "Axios",
      "ASP.NET",
      "Entity Framework Core",
      "ASP.NET Identity",
      "SQL Server",
      "xUnit",
      "FakeItEasy",
      "Azure"
    ],
    finishDate: "07-08-2024",
    image: {
      console: "",
      desktop: "/screenshots/liag/desktop.png",
      mobile: "/screenshots/liag/mobile.png",
    },
    linkToRepo: "https://github.com/BBualdo/Life-is-a-Game",
    slug: "/overview/liag",
  },
];
