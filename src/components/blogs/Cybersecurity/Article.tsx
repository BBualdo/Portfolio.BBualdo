import Image from "next/image";
import { ArticleType } from "@/constants/cybersecurityArticles";
import truncateString from "@/utils/truncateString";

const Article = ( {article}:{article: ArticleType} ) => {
  const { day, title, description, imageUrl, imageAlt, date, slug } = article;

  return (
    <a href={`cybersecurity/${slug}`} className="flex flex-col hover:border-matrixGreen xs:h-[600px] md:h-[500px] border-4 rounded-tr-3xl overflow-hidden rounded-bl-3xl border-matrixGreen/10">
      <div className="relative flex-1">
        <Image alt={imageAlt} src={imageUrl} fill className="object-cover filter-matrix" />
      </div>
      <div className="flex flex-col gap-4 p-4 flex-1">
        <p>{day ? `Day ${day}` : null}</p>
        <h3 className="text-left">{title}</h3>
        <p>{truncateString(description, 250)}</p>
        <p className="mt-auto">{date}</p>
      </div>
    </a>
  )
}

export default Article