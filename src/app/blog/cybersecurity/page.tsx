import { cybersecurityArticles } from "@/constants/cybersecurityArticles";
import Article from "@/components/blogs/Cybersecurity/Article";

export default function Cybersecurity() {
  return (
    <main className="flex min-h-screen px-20 py-32">
      <div className="flex flex-col gap-6">
        {cybersecurityArticles.map(article => (
          <Article key={article.day} article={article} />
        ))}
      </div>
    </main>
  )
}