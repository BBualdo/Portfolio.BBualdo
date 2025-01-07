import { BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import { cybersecurityArticles } from "@/constants/cybersecurityArticles";
import { FaKey } from "react-icons/fa";

export default function Page() {
  const currentArticle = cybersecurityArticles.find(art => art.day === 1)!;

  return (
    <>
      <header className="relative h-[200px] w-full flex items-center justify-center">
        <Image alt={currentArticle.imageAlt} src={currentArticle.imageUrl} fill className="filter-matrix opacity-20 object-cover xl:object-[0_-360px]" />
        <h1 className="absolute text-lightMatrixGreen text-center">{currentArticle.title}</h1>
      </header>
      <main className="py-4 px-4 xl:px-40  text-xl md:text-2xl">
        <div className="inline-block">
          <a href="." className="flex items-center gap-2 hover:text-matrixGreen hover:font-bold border-2 px-2 py-1 hover:border-matrixGreen">
            <BiLeftArrow />
            <span className="text-xl">Back</span>
          </a>
        </div>
        <div className="flex flex-col gap-10 py-6 lg:py-16">
          <h2 className="font-bold text-lightMatrixGreen">Day 1</h2>
          <p>You can&apos;t talk about learning cybersecurity without first understanding certain key concepts and how networks work. Even the best cop can&apos;t catch a criminal unless they know the area of operation at least as well as the criminal does. <span className="font-bold text-lightMatrixGreen">But what exactly is cybersecurity?</span></p>
          <p>In short, cybersecurity is a field focused on maintaining <span className="font-bold text-lightMatrixGreen">safety in cyberspace</span> — that is, on the internet. Every day, countless attacks are carried out by &quot;the bad guys&quot; against &quot;the good guys&quot;. The outcome of these battles often depends on <span className="font-bold text-lightMatrixGreen">how
            secure the latter&apos;s networks are</span>.</p>
          <p>Positions in cybersecurity can be divided into two sides — <span className="font-bold text-red-400">red</span> and <span className="font-bold text-blue-400">blue</span>. The job
            of the red side is to test security measures, stepping into the role of a &quot;bad guy&quot; to try to breach systems, steal data, and so on. These are known as <span className="font-bold text-red-400">penetration
            tests</span> because the goal is to penetrate the system. The blue side, on the other hand, takes a more <span className="font-bold text-blue-400">defensive
            approach</span> — analyzing security measures, assessing risks, studying malware, preparing reports, and responding to attacks (sometimes in real time, like guards on digital walls).</p>
          <div className="flex flex-col gap-6">
            <p>Click below to see cybersecurity careers on <span
              className="font-bold text-lightMatrixGreen">TryHackMe</span> platform. It&apos;s my recent discover and
              these articles and my entire learning path are theirs credit! 😁 (You can also take a fun quiz to find out which position suits you the most!)</p>
            <a className="cyber-btn mx-auto" href="https://tryhackme.com/r/room/careersincyber" target="_blank">Learn about careers</a>
          </div>
        </div>
        <div>
          <h3 className="text-matrixGreen font-bold"><FaKey className="inline-block" /> Key words</h3>
          <ul className="flex flex-col gap-6 my-6">
            <li><span className="font-bold text-lightMatrixGreen">SOC (Security Operations Center)</span> - a team of cyber security professionals that monitors the network to detect any malicious events like vulnerabilities, policy violations, unauthorized activity or network intrusions.</li>
            <li><span className="font-bold text-lightMatrixGreen">Threat Intelligence</span> - just organised and acknowledged treats that can specific company can encounter.</li>
            <li><span className="font-bold text-lightMatrixGreen">DFIR (Digital Forensics and Incident Response)</span> - focuses on digital crimes investigation and learning how to fix them and most importantly - how to prevent them in the future.</li>
            <li><span className="font-bold text-lightMatrixGreen">Malware Analysis</span> - investigating malicious software (viruses, trojans, ransomware) in controlled environment to learn how they work and how to defend against them.</li>
          </ul>
        </div>
      </main>
    </>
  )
}