import { cybersecurityArticles } from "@/constants/cybersecurityArticles";
import Article from "@/components/blogs/Cybersecurity/Article";
import { BiLeftArrow } from "react-icons/bi";

export default function Cybersecurity() {
  return (
    <>
      <nav
        className="p-6 relative flex xs:max-md:flex-col-reverse items-center w-full border-b-2 border-matrixGreen/20 z-50 bg-black">
        <div className="inline-block md:absolute">
          <a href=".." className="flex items-center gap-2 hover:text-matrixGreen hover:font-bold">
            <BiLeftArrow />
            <span className="text-xl">Back to Portfolio</span>
          </a>
        </div>
        <h1 className="text-matrixGreen text-4xl w-full cursor-default user-select-none text-center">Cybersecurity</h1>
      </nav>
      <header className="mt-12">
        <h2 className="text-center">Be my companion in Cybersecurity <span className="font-bold text-lightMatrixGreen">#100_Days_Challenge</span> 😁</h2>
      </header>
      <main className="min-h-screen px-2 md:px-20 py-20">
        <div className="flex flex-col gap-6 place-items-center lg:grid lg:grid-cols-2 xl:grid-cols-3">
          {cybersecurityArticles.map(article => (
            <Article key={article.day} article={article} />
          ))}
        </div>
      </main>
    </>
  )
}