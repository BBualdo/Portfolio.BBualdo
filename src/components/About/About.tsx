"use client";

import { revalia } from "@/utils/fonts";
import Info from "./Info";
import Tech from "./Tech";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

export default function About() {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="flex flex-col gap-20">
        <motion.h2
          variants={fadeIn("down", 0.5, 1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${revalia.className} title`}
        >
          About
        </motion.h2>
        <div className="flex items-center gap-4 xs:max-lg:flex-col lg:items-start">
          <Info />
          <Tech />
        </div>
      </div>
    </section>
  );
}
