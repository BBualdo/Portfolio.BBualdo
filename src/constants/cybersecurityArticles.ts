export type ArticleType = {
  day?: number,
  title: string,
  description: string,
  imageUrl: string,
  imageAlt: string,
  date: string,
  slug: string,
  article?: ArticleType
}

export const cybersecurityArticles: ArticleType[] = [
  {
    day: 1,
    title: "Introduction to Cyber Security",
    description: "Grasped and refreshed knowledge about IP/TCP, DNS and protocols and enrolled to TryHackMe platform, where I could learn about cyber security concepts basics and read about various career directions.",
    imageUrl: "/cybersecurity-articles-images/1.avif",
    imageAlt: "",
    date: "04-01-2024",
    slug: "introduction-to-cyber-security"
  },
  {
    day: 2,
    title: "Network Fundamentals - Part I",
    description: "Dived deeper into networking, understood how devices communicate with each other and learnt about types of networks and their pros/cons.",
    imageUrl: "/cybersecurity-articles-images/2.avif",
    imageAlt: "",
    date: "05-01-2024",
    slug: "network-fundamentals-1"
  }
];