"use client";

import { skills } from "@/constants/skills";
import Image from "next/image";
import { useState } from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex h-full flex-col items-center justify-center gap-10">
        {skills.map((skill) => {
          const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

          return (
            <Image
              alt={skill.name}
              src={skill.imagePath}
              height={100}
              width={100}
              className="cursor-pointer rounded-3xl bg-black transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: `0 4px ${isMouseOver ? "50px" : 0} ${skill.color}`,
              }}
              onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
            />
          );
        })}
      </div>
    </section>
  );
}
