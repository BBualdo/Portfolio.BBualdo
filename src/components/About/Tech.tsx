import { skills } from "@/constants/skills";
import { revalia } from "@/utils/fonts";
import getCodingTime from "@/utils/getCodingTime";
import Image from "next/image";

const Tech = () => {
  const [years, months, days] = getCodingTime();

  return (
    <div
      className={`${revalia.className} flex flex-col gap-4 rounded-xl border-4 border-zinc-800 p-4 xl:p-10`}
    >
      <div
        className={`${revalia.className} flex flex-col items-center gap-2 uppercase`}
      >
        <p>My Code Journey began:</p>
        <p className="text-center text-xl text-vicePink xl:text-3xl">
          {years > 0 && `${years} years `}
          {`${months} months ${days} days ago`}
        </p>
      </div>
      <h3>Tech</h3>
      <ul>
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="m-2 px-4 py-2 xs:max-xl:grid xl:inline-block"
            style={{ boxShadow: `0 4px 0 ${skill.color}` }}
          >
            <div className="flex items-center gap-2">
              <div className="relative h-[30px] w-[30px] xl:h-[50px] xl:w-[50px]">
                <Image alt={skill.name} src={skill.imagePath} fill />
              </div>
              <p className="text-xs xl:text-base">{skill.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
