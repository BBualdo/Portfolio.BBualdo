"use client";

import { revalia } from "@/utils/fonts";
import CodeBackground from "./backgrounds/CodeBackground";
import CTA from "./shared/CTA";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import PreviewCV from "./shared/PreviewCV";

export default function Hero() {
  return (
    <>
      <CodeBackground />
      <motion.section
        id="hero"
        className={revalia.className}
        variants={fadeIn("", 0.7, 1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <h1>Sebastian Opozda</h1>
          <h2 className="uppercase">
            I am a <span className="text-viceCyan">Web Developer</span>
          </h2>
          <div className="mt-4 flex items-center gap-4 xs:max-lg:flex-col lg:mt-10">
            <CTA href="projects">Check out my work</CTA>
            <PreviewCV />
          </div>
        </div>
      </motion.section>
    </>
  );
}
