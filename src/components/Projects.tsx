"use client";

import { projects } from "@/constants/projects";
import { revalia } from "@/utils/fonts";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import CTAAnchor from "./shared/CTAAnchor";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

export default function Projects() {
  const projectsElement = projects.map((project, index) => {
    const firstOrder = index % 2 == 0 ? 1 : 2;
    const secondOrder = index % 2 == 0 ? 2 : 1;

    return (
      <motion.div
        variants={fadeIn(`${firstOrder == 1 ? "right" : "left"}`, 0.2, 1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        key={project.id}
        className="flex rounded-xl border-4"
      >
        <div
          className="relative flex-1 xs:max-lg:hidden"
          style={{ order: firstOrder }}
        >
          <Image
            src={project.image.desktop}
            alt=""
            fill
            sizes={"100%"}
            className="object-contain"
          />
        </div>
        <div
          className="flex flex-1 flex-col gap-10 px-6 py-6 xl:px-10"
          style={{ order: secondOrder }}
        >
          <p className="text-xl font-black uppercase text-viceCyan lg:text-2xl">
            {project.name}
          </p>
          <p>{project.description}</p>
          <div>
            <p className="font-bold uppercase">Technologies:</p>
            <ul>
              {project.technologies.map((t, index) => (
                <li
                  key={index}
                  className="my-2 mr-2 inline-block rounded-xl border-2 border-viceCyan bg-viceCyan/10 px-4 py-2 font-bold text-white shadow-[0_4px_0] shadow-viceCyan"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:gap-4">
            <a
              href={project.linkToRepo}
              target="_blank"
              className="pointer flex items-center gap-2 border-2 border-white bg-black px-4 py-2 text-xs font-bold uppercase transition-all duration-200 hover:border-vicePink hover:text-vicePink lg:text-base"
            >
              Source Code <FaExternalLinkAlt />
            </a>
            {project.linkToLive ? (
              <a
                href={project.linkToLive}
                target="_blank"
                className="pointer flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase transition-all duration-200 hover:text-viceCyan lg:text-base"
              >
                Live Site <FaExternalLinkAlt />
              </a>
            ) : null}
          </div>

          <p className="font-bold text-green-500">
            Finished: {project.finishDate}
          </p>
        </div>
      </motion.div>
    );
  });

  return (
    <section id="projects" className="py-10 lg:py-20">
      <div className="flex flex-col gap-20">
        <motion.h2
          variants={fadeIn("down", 0.5, 1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${revalia.className} title`}
        >
          Projects
        </motion.h2>
        <div className="flex flex-col items-center gap-20">
          <motion.div
            variants={fadeIn("down", 0.7, 1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className={`${revalia.className} text-center lg:w-[800px]`}>
              Here you can browse my latest projects. These are result of my
              hard work and everything I'll learn is translated into new project
              to practice new skills.
            </h4>
            <CTAAnchor href="https://github.com/BBualdo?tab=repositories">
              View All Projects
            </CTAAnchor>
          </motion.div>
          <div className="flex flex-col gap-20">{projectsElement}</div>
        </div>
      </div>
    </section>
  );
}
