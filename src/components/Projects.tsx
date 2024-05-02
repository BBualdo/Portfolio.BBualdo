import { projects } from "@/constants/projects";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projectsElement = projects.map((project, index) => {
    const firstOrder = index % 2 == 0 ? 1 : 2;
    const secondOrder = index % 2 == 0 ? 2 : 1;
    // image desktop
    return (
      <div key={project.id} className="flex rounded-xl border-4">
        <div className="relative flex-1" style={{ order: firstOrder }}>
          <Image src={project.image.desktop} alt="" fill objectFit="contain" />
        </div>
        <div
          className="flex flex-1 flex-col gap-10 px-10 py-6"
          style={{ order: secondOrder }}
        >
          <p className="text-2xl font-black uppercase text-viceCyan">
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
          <div className="flex items-center gap-4">
            <a
              href={project.linkToRepo}
              target="_blank"
              className="flex items-center gap-2 border-2 border-white bg-black px-4 py-2 font-bold uppercase transition-all duration-200 hover:border-vicePink hover:text-vicePink"
            >
              Source Code <FaExternalLinkAlt />
            </a>
            {project.linkToLive ? (
              <a
                href={project.linkToLive}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 font-bold uppercase transition-all duration-200 hover:text-viceCyan"
              >
                Live Site <FaExternalLinkAlt />
              </a>
            ) : null}
          </div>

          <p className="font-bold text-green-500">
            Finished: {project.finishDate}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col items-center gap-20">
        <h4 className="w-[800px] text-center">
          Here you can browse my latest projects. These are result of my hard
          work, everything I'll learn is translated into new project to practice
          new skills.
        </h4>
        <div className="flex flex-col gap-20">{projectsElement}</div>
      </div>
    </section>
  );
}
