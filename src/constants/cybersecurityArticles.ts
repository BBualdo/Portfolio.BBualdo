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
  },
  {
    day: 5,
    title: "How the Web Works - Part II",
    description: "HTTP (HyperText Transfer Protocol) is the protocol that enables communication between a user’s browser and a server. Think of it as a waiter in a restaurant: the user places an order (request), and the server responds by delivering the dish (response). HTTPS is the secure version of this protocol, using encryption (SSL/TLS) to protect data from eavesdropping.",
    imageUrl: "/cybersecurity-articles-images/5.avif",
    imageAlt: "",
    date: "08-01-2024",
    slug: "how-the-web-works-2"
  },
  {
    day: 6,
    title: "Linux Fundamentals",
    description: "My 1.5-year journey into programming has often brought me across terms like Apache, Ubuntu, and the general idea that Linux is essential for software developers, especially in backend development. However, I never felt the need to explore it deeply—until now. It's time to fulfill my destiny!",
    imageUrl: "/cybersecurity-articles-images/6.avif",
    imageAlt: "",
    date: "09-01-2024",
    slug: "linux-fundamentals"
  },
  {
    day: 7,
    title: "Windows Fundamentals",
    description: "Raise your hand if you&apos;ve never used Windows... Alright, probably no one! Windows 95, 98, XP (😍), Vista (🤢), 7, 8, 10, 11... Everyone has used at least one version. Some still cling to the good old XP, and honestly, who can blame them? A reliable classic. Back in the day, all that mattered was running Counter-Strike 1.6 and a Mozilla icon copied from a USB stick. Anyway, now it&apos;s time to dive into the mysteries of this system—well, the newer versions, because they have more options 😁.",
    imageUrl: "/cybersecurity-articles-images/7.avif",
    imageAlt: "",
    date: "10-01-2024",
    slug: "windows-fundamentals"
  }
];