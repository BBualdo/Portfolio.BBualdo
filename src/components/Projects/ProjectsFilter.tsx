"use client";

import { skills } from "@/constants/skills";
import { fadeIn } from "@/utils/fadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import hexToRgb from "@/utils/hexToRgb";

interface ProjectsFilterProps {
  currentFilters: string[],
  setCurrentFilters: (value: (((prevState: string[]) => string[]) | string[])) => void
}

const ProjectsFilter = ({ currentFilters, setCurrentFilters }: ProjectsFilterProps) => {

  const toggleFilter = (filter:string) => {
    if (currentFilters.includes('highlighted')) setCurrentFilters([]);
    if (currentFilters.includes(filter)) setCurrentFilters(prev => prev.filter(p => p !== filter));
    else setCurrentFilters(prev => [...prev, filter]);
  }

  return (
    <motion.div
      variants={fadeIn("down", 0.7, 1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="lg:flex grid grid-cols-2 items-center gap-4">
      <button
        onClick={() => setCurrentFilters(['highlighted'])}
        className={`${currentFilters.includes('highlighted') ? 'bg-yellow-300/50' : ''} flex items-center gap-2 rounded-xl border-2 border-yellow-300 pointer bg-viceCyan/10 px-4 py-3 font-bold text-white shadow-[0_4px_0] shadow-yellow-300 transition-all duration-200`}>
        <FaRegStar className="text-2xl text-yellow-300" /> Highlighted
      </button>
      <button
        onClick={() => setCurrentFilters([])}
        className={`${currentFilters.length === 0 ? 'bg-viceCyan/50' : ''} flex items-center justify-center gap-2 rounded-xl border-2 border-viceCyan pointer bg-viceCyan/10 px-6 py-3 font-bold text-white shadow-[0_4px_0] shadow-viceCyan transition-all duration-200`}>
        <BsStack className="text-2xl text-viceCyan" /> All
      </button>
      {skills.filter(s => s.filterable).sort((a, b) => a.filterOrder! - b.filterOrder!).map(skill => (
        <button key={skill.id}
                className="flex items-center justify-center gap-2 rounded-xl border-2 pointer px-4 py-2 font-bold text-white transition-all duration-200"
                style={{ boxShadow: `0 4px 0 ${skill.color}`, borderColor: skill.color, backgroundColor: currentFilters.includes(skill.name) ? `rgba(${hexToRgb(skill.color)}, 0.5)` : '' }}

                onClick={() => toggleFilter(skill.name)}
        >
          <Image src={skill.imagePath} alt={skill.name + " Icon"} width={32} height={32} /> {skill.name}
        </button>
      ))}
    </motion.div>
  );
};

export default ProjectsFilter;