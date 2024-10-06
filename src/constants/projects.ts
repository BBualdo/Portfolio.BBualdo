export type ProjectType = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  finishDate: string;
  videoUrl?: string;
  linkToRepo: string;
  linkToLive?: string | null;
  slug: string;
  highlighted?: boolean;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "ClassCars LLC",
    description:
      "A website created for a client specializing in importing cars from Dubai. The site includes several subpages with separate functionalities such as FAQ Accordion, Image Slider, Contact Form, etc.",
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "MUI",
      "UI/UX Design"
    ],
    finishDate: "09-12-2023 (in progress)",
    linkToRepo: "https://github.com/BBualdo/class-cars-llc",
    linkToLive: "https://classcarsllc.com",
    slug: "/classcarsllc",
    highlighted: true
  },
  {
    id: 2,
    name: "Life is a Game",
    description:
      "App where authenticated users can manage self-assigned missions, get XP, Levels and Achievements. Used Next.js for folder-based routing and SSR, and ASP.NET Core for reliability and security.",
    technologies: [
      "NextJS",
      "TypeScript",
      "C#",
      "SQL Server",
      "ASP.NET Core",
      "Entity Framework Core",
      "Zod",
      "Redux Toolkit",
      "Redux-Persist",
      "React-Hook-Form",
      "Axios",
      "ASP.NET Identity",
      "xUnit",
      "FakeItEasy",
      "Azure Communication Service",
      "TailwindCSS",
      "Framer Motion",
      "Shadcn-UI",
      "UI/UX Design"
    ],
    finishDate: "07-08-2024",
    videoUrl: "https://www.youtube.com/embed/aBJ_5aZJe8s?si=PYSZBl-fMwPp0XLL",
    linkToRepo: "https://github.com/BBualdo/Life-is-a-Game",
    slug: "/liag",
    highlighted: true
  },
  {
    id: 3,
    name: "Squizz",
    description:
      "Fullstack Application with ASP.NET Core Identity Authorization and Authentication, where users can create Quizzes, play them selecting difficulty level which affects time for answer and track score in Leaderboard. It was a part of C# Academy Roadmap, but I extended it with own features.",
    technologies: [

      "Angular",
      "TypeScript",
      "Mobile First",
      "C#",
      "PostgreSQL",
      "Entity Framework Core",
      "ASP.NET Identity",
      "Logging",
      "Web API",
      "Swagger",
      "TailwindCSS",
      "Angular Material",
      "UI/UX Design"
    ],
    finishDate: "30-05-2024",
    videoUrl: "https://www.youtube.com/embed/wZJBZXP6fHo?si=SDJix0dtBZrYLosF",
    linkToRepo: "https://github.com/BBualdo/QuizGame",
    slug: "/quiz-game",
    highlighted: true
  },
  {
    id: 4,
    name: "Salegency",
    description:
      "A simple landing page created for a client who runs a company that helps other businesses increase their revenue. Website has Cookiebot and Calendly extensions embedded.",
    technologies: [
      "Astro",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "UI/UX Design"
    ],
    finishDate: "06-03-2024",
    videoUrl: "https://www.youtube.com/embed/vdQhW1QyMhE?si=-jy_YTcupnKRtKHd",
    linkToRepo: "https://github.com/BBualdo/salegency.co",
    linkToLive: "https://salegency.co",
    slug: "/salegency",
    highlighted: true
  },
  {
    id: 5,
    name: "Shifts Logger",
    description:
      "Entity Framework Core and SQL Server app which connects to Web API to CRUD employee shifts time.",
    technologies: [
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "Web API",
      "Swagger",
      "Spectre Console"
    ],
    finishDate: "20-04-2024",
    linkToRepo: "https://github.com/BBualdo/ShiftsLogger",
    slug: "/shifts-logger"
  },
  {
    id: 6,
    name: "Math Game",
    description:
      "Simple Console Math Game where user selects which operations he wants to be asked about and has to answer them.",
    technologies: ["C#"],
    finishDate: "06-04-2024",
    linkToRepo: "https://github.com/BBualdo/MathGame",
    slug: "/math-game"
  },
  {
    id: 7,
    name: "Calculator",
    description:
      "Simple C# Console calculator.",
    technologies: ["C#"],
    finishDate: "07-04-2024",
    linkToRepo: "https://github.com/BBualdo/Calculator",
    slug: "/calculator"
  },
  {
    id: 8,
    name: "Habit Logger",
    description:
      "CRUD App connected to SQLite where user can create own habits and track them.",
    technologies: ["C#", "ADO.NET", "SQLite"],
    finishDate: "11-04-2024",
    linkToRepo: "https://github.com/BBualdo/HabitLogger",
    slug: "/habit-logger"
  },
  {
    id: 9,
    name: "Coding Tracker",
    description:
      "CRUD app that let's user track his coding time, set goals and get summary reports for specified period.",
    technologies: ["C#", "SQLite", "Dapper", "Spectre Console"],
    finishDate: "13-04-2024",

    linkToRepo: "https://github.com/BBualdo/CodingTracker",
    slug: "/coding-tracker"
  },
  {
    id: 10,
    name: "Flashcards",
    description:
      "CRUD App where user can create stacks of flashcards and perform score based study sessions.",
    technologies: ["C#", "SQL Server", "Dapper", "Spectre Console"],
    finishDate: "16-04-2024",
    linkToRepo: "https://github.com/BBualdo/Flashcards",
    slug: "/flashcards"
  },
  {
    id: 11,
    name: "Drinks Info",
    description:
      "Simple App which calls CocktailDB API and lets user get info about drink filtered by categories.",
    technologies: ["C#", "Spectre Console", "CocktailDB API"],
    finishDate: "17-04-2024",
    linkToRepo: "https://github.com/BBualdo/DrinksInfo",
    slug: "/drinks-info"
  },
  {
    id: 12,
    name: "Phone Book",
    description:
      "Console App where user can create contacts and add them to groups. All operations supports CRUD with Entity Framework Core and SQL Server.",
    technologies: ["C#", "SQL Server", "Entity Framework Core", "Spectre Console"],
    finishDate: "18-04-2024",
    linkToRepo: "https://github.com/BBualdo/PhoneBook",
    slug: "/phonebook"
  },
  {
    id: 13,
    name: "Exercise Tracker",
    description:
      "Entity Framework Core with SQL Server CRUD App that let's user track their exercise time. Purpose of this challenge was to use Repository Pattern.",
    technologies: ["C#", "SQL Server", "Entity Framework Core", "ASP.NET", "Web API", "Swagger", "Spectre Console"],
    finishDate: "21-04-2024",
    linkToRepo: "https://github.com/BBualdo/ExerciseTracker",
    slug: "/exercise-tracker"
  },
  {
    id: 14,
    name: "Sport Results Notifier",
    description:
      "Simple Script that scraps NBA games results and sends it via email to user every day.",
    technologies: ["C#", "Html Agility Pack", "SMTP"],
    finishDate: "23-04-2024",
    linkToRepo: "https://github.com/BBualdo/SportsResultsNotifier",
    slug: "/sport-results-notifier"
  },
  {
    id: 15,
    name: "Excel Reader",
    description:
      "Application which reads people data from Excel and saves it to SQL Server database.",
    technologies: ["C#", "SQL Server", "Entity Framework Core", "EPPlus", "Spectre Console"],
    finishDate: "23-04-2024",
    linkToRepo: "https://github.com/BBualdo/ExcelReader",
    slug: "/excel-reader"
  },
  {
    id: 16,
    name: "No Smoking",
    description: "",
    technologies: ["Angular", "TypeScript", "C#", "PostgreSQL", "Entity Framework Core", "ASP.NET", "Web API"],
    finishDate: "10-05-2024",
    linkToRepo: "https://github.com/BBualdo/NoSmoking",
    slug: "/no-smoking"
  },
  {
    id: 17,
    name: "Sleep Tracker",
    description:
      "Sleep Tracker is an application designed to help users monitor their sleep patterns. Users can conveniently track their sleep time by either setting a timer or managing their sleep data manually through CRUD operations.",
    technologies: ["Angular", "TypeScript", "C#", "PostgreSQL", "Entity Framework Core", "ASP.NET", "Web API", "Angular Material", "Sass"],
    finishDate: "25-05-2024",
    linkToRepo: "https://github.com/BBualdo/SleepTracker",
    slug: "/sleep-tracker"
  },
  {
    id: 18,
    name: "Product Management System",
    description:
      "Simple Product Management System app with Role-Based Authentication and Authorization, where user can browse, create, update and delete products and admin can do the same with users.",
    technologies: ["Angular", "TypeScript", "C#", "PostgreSQL", "Entity Framework Core", "FluentAPI", "ASP.NET", "Web API", "ASP.NET Identity", "Angular Material", "TailwindCSS", "PapercutSMTP"],
    finishDate: "10-06-2024",
    videoUrl: "https://www.youtube.com/embed/sl1v5jdJr1k?si=j-KBY4quFRipOQDT",
    linkToRepo: "https://github.com/BBualdo/PMS",
    slug: "/pms",
    highlighted: true
  },
  {
    id: 19,
    name: "Wardrobe Inventory",
    description:
      "",
    technologies: ["Blazor", "C#", "PostgreSQL", "Entity Framework Core"],
    finishDate: "25-06-2024",
    linkToRepo: "https://github.com/BBualdo/Wardrobe",
    slug: "/wardrobe"
  },
  {
    id: 20,
    name: "Sage Memo",
    description:
      "App where user can select difficulty and try to match all card pairs. Scores are saved to SQL database and user can view the records.",
    technologies: ["Blazor", "C#", "PostgreSQL", "Entity Framework Core", "TailwindCSS"],
    finishDate: "27-06-2024",
    linkToRepo: "https://github.com/BBualdo/BlazorMemoryGame",
    slug: "/sage-memo"
  },
  {
    id: 21,
    name: "Shopping List",
    description:
      "",
    technologies: ["React", "TypeScript", "C#", "PostgreSQL", "Entity Framework Core", "ASP.NET", "Web API", "TailwindCSS"],
    finishDate: "29-06-2024",
    linkToRepo: "https://github.com/BBualdo/ShoppingList",
    slug: "/shopping-list"
  },
  {
    id: 22,
    name: "Friends Manager",
    description:
      "",
    technologies: ["NextJS", "TypeScript", "C#", "PostgreSQL", "Entity Framework Core", "Axios", "ASP.NET", "Web API", "Recoil", "TailwindCSS"],
    finishDate: "03-07-2024",
    linkToRepo: "https://github.com/BBualdo/FriendsManager",
    slug: "/friends-manager"
  },
  {
    id: 23,
    name: "Order Processing System",
    description:
      "This project is an implementation of an order processing system using Azure Functions. It demonstrates the use of various Azure Function triggers to automate the order processing workflow from receiving orders to sending notifications and updating the inventory.",
    technologies: ["Azure Functions", "C#", "CosmosDB", "Azure Storage Emulator", "PapercutSMTP"],
    finishDate: "03-08-2024",
    linkToRepo: "https://github.com/BBualdo/AzureFunctions.BBualdo",
    videoUrl: "https://www.youtube.com/embed/6tSqW4A6TSU?si=Ea6E3C56FaoaBapX",
    slug: "/azure-functions"
  }
];
