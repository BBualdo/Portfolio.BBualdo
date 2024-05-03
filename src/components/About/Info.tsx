"use client";

import { revalia } from "@/utils/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Info = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5, 1, 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex-1"
    >
      <div className="flex gap-4 xs:items-center xs:max-lg:flex-col lg:items-start">
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
      <div className="text-md flex flex-col items-center gap-4 py-4 xs:max-lg:text-center lg:text-lg">
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
          I embarked on my coding adventure by mastering{" "}
          <span className="font-bold text-orange-600">HTML</span> and{" "}
          <span className="font-bold text-blue-600">CSS</span>, swiftly feeling
          at home with these technologies. My curiosity led me to{" "}
          <span className="font-bold text-yellow-400">JavaScript</span>, my
          first programming language, where I invested countless hours mastering
          everything from basic constructs to complex algorithms and project
          building. My exploration continued with{" "}
          <span className="font-bold text-blue-500">React</span>, which quickly
          became a favorite due to its dynamic capabilities. To enhance my
          projects, I integrated libraries and tools such as{" "}
          <span className="font-bold text-cyan-700">TailwindCSS</span>,{" "}
          <span>NextJS</span>,{" "}
          <span className="font-bold text-fuchsia-400">Framer Motion</span>,{" "}
          <span className="font-bold text-blue-600">MUI</span> and{" "}
          <span className="font-bold text-blue-700">TypeScript</span>, each
          adding robustness and efficiency to my code.
        </p>
        <p>
          In November 2023, I expanded my horizons into{" "}
          <span className="font-bold text-viceCyan">back-end development</span>{" "}
          to fully round out my skill set. Choosing{" "}
          <span className="font-bold text-violet-600">C#</span> over Node.js —
          inspired by a friend's experience and the powerful capabilities of the
          language — I swiftly adapted to new paradigms, delving into{" "}
          <span>Unity</span> for game development, and mastering{" "}
          <span className="font-bold text-violet-600">ASP.NET Core</span>. My
          recent stint with the{" "}
          <span className="font-bold text-viceCyan">C# Academy</span> expanded
          my understanding of{" "}
          <span className="font-bold text-violet-600">.NET</span>,{" "}
          <span className="font-bold text-viceCyan">SQL databases</span>, CRUD
          operations, and building{" "}
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
    </motion.div>
  );
};

export default Info;
