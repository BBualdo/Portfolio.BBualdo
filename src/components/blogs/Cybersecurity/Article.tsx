import Image from "next/image";
import { ArticleType } from "@/constants/cybersecurityArticles";

const Article = ( {article}:{article: ArticleType} ) => {
  const { day, title, imageUrl, imageAlt, date, slug } = article;

  return (
    <a href={`cybersecurity/${slug}`} className="hover:text-lightMatrixGreen hover:animate-pulse">
      <div>
        <h3>{day ? `Day ${day} - ` : null}{title}</h3>
        <p>{date}</p>
      </div>
    </a>
  )
}

export default Article