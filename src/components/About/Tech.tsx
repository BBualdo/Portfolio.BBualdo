import { skills } from "@/constants/skills";
import { revalia } from "@/utils/fonts";
import Image from "next/image";

const Tech = () => {
  return (
    <div
      className={`${revalia.className} flex flex-col gap-4 rounded-xl border-4 border-zinc-800 p-10`}
    >
      <h3>Tech</h3>
      <ul>
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="m-2 inline-block px-4 py-2"
            style={{ boxShadow: `0 4px 0 ${skill.color}` }}
          >
            <div className="flex items-center gap-2">
              <Image
                alt={skill.name}
                src={skill.imagePath}
                width={50}
                height={50}
              />
              <p>{skill.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
