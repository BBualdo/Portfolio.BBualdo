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
    description: "You can't talk about learning cybersecurity without first understanding certain key concepts and how networks work. Even the best cop can't catch a criminal unless they know the area of operation at least as well as the criminal does. But what exactly is cybersecurity?",
    imageUrl: "/cybersecurity-articles-images/1.avif",
    imageAlt: "",
    date: "04-01-2024",
    slug: "introduction-to-cyber-security"
  },
  {
    day: 2,
    title: "Network Fundamentals - Part I",
    description: "Every day, we deal with networks — whether it's in the context of public transportation, electricity, human interactions, or mail. \"Everything is connected\", as my favorite artists Opał and Gibbs say in their album's tagline. 😁",
    imageUrl: "/cybersecurity-articles-images/2.avif",
    imageAlt: "",
    date: "05-01-2024",
    slug: "network-fundamentals-1"
  },
  {
    day: 3,
    title: "Network Fundamentals - Part II",
    description: "To standardize the way devices exchange data in a network, the OSI (Open Systems Interconnection) Model was created. It defines how devices send, receive, and interpret data.",
    imageUrl: "/cybersecurity-articles-images/3.avif",
    imageAlt: "",
    date: "06-01-2024",
    slug: "network-fundamentals-2"
  },
  {
    day: 4,
    title: "How the Web Works - Part I",
    description: "When we want to connect to a website, we simply type its name into the browser, like google.com. Easy, right? But what if we had to type 8.8.8.8 instead? That’s still manageable, but now imagine replacing all the websites we know with their IP addresses. Not so simple anymore, is it? This is where DNS (Domain Name System) comes to the rescue. Just like a postal address points to a specific house, a domain name points to a specific IP address of the website we want to connect to.",
    imageUrl: "/cybersecurity-articles-images/4.avif",
    imageAlt: "",
    date: "07-01-2024",
    slug: "how-the-web-works-1"
  }
];