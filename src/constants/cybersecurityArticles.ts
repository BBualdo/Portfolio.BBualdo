export type ArticleType = {
  day?: number,
  title: string,
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
    imageUrl: "/cybersecurity-articles-images/1.avif",
    imageAlt: "",
    date: "04-01-2024",
    slug: "introduction-to-cyber-security"
  },
  {
    day: 2,
    title: "Network Fundamentals - Part I",
    imageUrl: "/cybersecurity-articles-images/2.avif",
    imageAlt: "",
    date: "05-01-2024",
    slug: "network-fundamentals-1"
  }
];