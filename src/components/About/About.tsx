import { revalia } from "@/utils/fonts";
import getCodingTime from "@/utils/getCodingTime";
import Image from "next/image";

export default function About() {
  const [years, months, days] = getCodingTime();

  return (
    <section id="about">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="flex items-start gap-4">
            <Image
              alt="Sebastian's Photo"
              src="/photo.png"
              width={200}
              height={300}
              className="rounded-xl border-4 border-white"
            />
            <div className={`${revalia.className} flex flex-col gap-4`}>
              <h3 className="text-shadow-vicePink">
                Hello!
                <br /> My name is Sebastian, but you might know me as{" "}
                <span className="text-vicePink">BBualdo</span> online.
              </h3>
              <h4>
                I'm a freelance developer with a passion for both front-end and
                back-end technologies, steering towards becoming a full-stack
                developer.
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center text-xl">
            <div
              className={`${revalia.className} flex flex-col items-center gap-2 p-4 uppercase`}
            >
              <p>My Code Journey began:</p>
              <p className="text-3xl text-vicePink">
                {years > 0 && `${years} years `}
                {`${months} months ${days} days ago`}
              </p>
            </div>
            <p>
              My journey into the world of development was sparked by my{" "}
              <span className="font-bold text-viceCyan">
                natural inclination for detail
              </span>{" "}
              and{" "}
              <span className="font-bold text-viceCyan">
                creative problem-solving
              </span>{" "}
              skills I honed while deeply enjoying mathematics during my school
              years. This analytical background complements my artistic side,
              particularly in music production, where the{" "}
              <span className="font-bold text-viceCyan">
                nuances make all the difference
              </span>
              .
            </p>
            <p>
              I embarked on my coding adventure by mastering <span>HTML</span>{" "}
              and <span>CSS</span>, swiftly feeling at home with these
              technologies. My curiosity led me to <span>JavaScript</span>, my
              first programming language, where I invested countless hours
              mastering everything from basic constructs to complex algorithms
              and project building. My exploration continued with{" "}
              <span>React</span>, which quickly became a favorite due to its
              dynamic capabilities. To enhance my projects, I integrated
              libraries and tools such as <span>TailwindCSS</span>,{" "}
              <span>NextJS</span>, <span>Framer Motion</span>, <span>MUI</span>{" "}
              and <span>TypeScript</span>, each adding robustness and efficiency
              to my code.
            </p>
            <p>
              In November 2023, I expanded my horizons into{" "}
              <span className="font-bold text-viceCyan">
                back-end development
              </span>{" "}
              to fully round out my skill set. Choosing <span>C#</span> over
              Node.js — inspired by a friend's experience and the powerful
              capabilities of the language — I swiftly adapted to new paradigms,
              delving into <span>Unity</span> for game development, and
              mastering <span>ASP.NET Core</span>. My recent stint with the{" "}
              <span className="font-bold text-viceCyan">C# Academy</span>{" "}
              expanded my understanding of <span>.NET</span>,{" "}
              <span className="font-bold text-viceCyan">SQL databases</span>,
              CRUD operations, and building{" "}
              <span className="font-bold text-viceCyan">Web APIs</span>.
            </p>
            <p>
              Currently, I am channeling my efforts into{" "}
              <span className="font-bold text-viceCyan">
                full-stack applications
              </span>
              , merging my refined React expertise with my burgeoning back-end
              skills, aiming to create seamless,{" "}
              <span className="font-bold text-viceCyan">
                robust digital experiences
              </span>
              . As I continue to grow and evolve in this ever-changing field, I
              remain{" "}
              <span className="font-bold text-viceCyan">
                committed to the meticulous craftsmanship
              </span>{" "}
              that coding, much like music, demands.
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
}
