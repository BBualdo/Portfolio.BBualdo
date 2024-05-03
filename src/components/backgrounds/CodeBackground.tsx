"use client";

import { motion } from "framer-motion";
import styles from "./glitch.module.css";
import { fadeIn } from "@/utils/fadeIn";

const CodeBackground = () => {
  return (
    <motion.div
      aria-hidden
      className={styles.CodeBackground}
      variants={fadeIn("", 0, 1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className={styles.text}>
        <p className="opacity-0">.</p>
        <span>{"< />"}</span>
        <span>{"< />"}</span>
        <span>{"< />"}</span>
      </div>
    </motion.div>
  );
};

export default CodeBackground;
