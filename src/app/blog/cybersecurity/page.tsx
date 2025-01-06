import { cybersecurityArticles } from "@/constants/cybersecurityArticles";
import Article from "@/components/blogs/Cybersecurity/Article";

export default function Cybersecurity() {
  return (
    <main className="min-h-screen px-2 md:px-20 py-32">
      <div className="flex flex-col gap-6 place-items-center lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {cybersecurityArticles.map(article => (
          <Article key={article.day} article={article} />
        ))}
      </div>
    </main>
  )
}