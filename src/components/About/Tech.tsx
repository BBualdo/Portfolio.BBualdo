"use client";

import { skills } from "@/constants/skills";
import { revalia } from "@/utils/fonts";
import getCodingTime from "@/utils/getCodingTime";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import CTA from "../shared/CTA";

const Tech = () => {
  const [years, months, days] = getCodingTime();

  return (
    <motion.div
      variants={fadeIn("left", 0.5, 1, 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-1 flex-col items-center"
    >
      <div
        className={`${revalia.className} flex w-full flex-col gap-4 rounded-xl border-4 border-zinc-800 p-4 lg:p-10`}
      >
        <div
          className={`${revalia.className} flex flex-col items-center gap-2 uppercase`}
        >
          <p>My Code Journey began:</p>
          <p className="text-center text-xl text-vicePink xl:text-3xl">
            {years > 1 ? `${years} years ` : years === 1 ? `${years} year ` : null}
            {months > 1 ? `${months} months ` : months === 1 ? `${months} month ` : null}
            {days > 1 ? `${days} days ` : days === 1 ? `${days} day ` : null}
            ago
          </p>
        </div>
        <h3 className="mt-2">Tech</h3>
        <ul className="md:max-lg:grid xs:max-md:flex flex-col gap-2 grid-cols-2">
          {skills.sort((a, b) => a.priority - b.priority).map((skill, index) => (
            <motion.li
              variants={fadeIn("left", (index + 1) / 4, 1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={skill.id}
              className="m-2 inline-block px-4 py-2"
              style={{ boxShadow: `0 4px 0 ${skill.color}` }}
            >
              <div className="flex items-center gap-2">
                <div className="relative flex-shrink-0 h-[30px] w-[30px] xl:h-[50px] xl:w-[50px]">
                  <Image alt={skill.name} src={skill.imagePath} fill />
                </div>
                <p className="text-sm xl:text-base">{skill.name}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="mt-4 lg:mt-10">
        <CTA href="projects">Check out my work</CTA>
      </div>
    </motion.div>
  );
};

export default Tech;
