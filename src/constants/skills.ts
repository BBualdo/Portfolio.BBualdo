export type SkillType = {
  id: number;
  name: string;
  imagePath: string;
  color: string;
  priority: number;
};

export const skills: SkillType[] = [
  {
    id: 1,
    name: "HTML",
    imagePath: "/icons/HTML.svg",
    color: "#E14E1D",
    priority: 2
  },
  {
    id: 2,
    name: "CSS",
    imagePath: "/icons/CSS.svg",
    color: "#0277BD",
    priority: 2
  },
  {
    id: 3,
    name: "Git",
    imagePath: "/icons/Git.svg",
    color: "#F03C2E",
    priority: 2
  },
  {
    id: 4,
    name: "React",
    imagePath: "/icons/React.svg",
    color: "#00D8FF",
    priority: 1
  },
  {
    id: 5,
    name: "Figma",
    imagePath: "/icons/Figma.svg",
    color: "#0ACF83",
    priority: 3
  },
  {
    id: 6,
    name: "TailwindCSS",
    imagePath: "/icons/TailwindCSS.svg",
    color: "#32B1C1",
    priority: 2
  },
  {
    id: 7,
    name: "TypeScript",
    imagePath: "/icons/TypeScript.svg",
    color: "#007ACC",
    priority: 1
  },
  {
    id: 8,
    name: "Redux",
    imagePath: "/icons/Redux.svg",
    color: "#764ABC",
    priority: 3
  },
  {
    id: 9,
    name: "NextJS",
    imagePath: "/icons/NextJS.svg",
    color: "#FFF",
    priority: 1
  },
  {
    id: 10,
    name: "C#",
    imagePath: "/icons/CS.svg",
    color: "#512BD4",
    priority: 1
  },
  {
    id: 11,
    name: ".NET",
    imagePath: "/icons/DotNet.svg",
    color: "#512BD4",
    priority: 1
  },
  {
    id: 12,
    name: "SQL",
    imagePath: "/icons/SQL.svg",
    color: "#FFF",
    priority: 2
  },
  {
    id: 13,
    name: "Unit Testing",
    imagePath: "/icons/UnitTesting.svg",
    color: "#0ACF83",
    priority: 3
  },
  {
    id: 14,
    name: "Angular",
    imagePath: "/icons/Angular.svg",
    color: "#B52E31",
    priority: 2
  },
  {
    id: 15,
    name: "RxJS",
    imagePath: "/icons/RxJS.svg",
    color: "#F80090",
    priority: 3
  },
];
