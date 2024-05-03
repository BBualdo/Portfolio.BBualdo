"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";

const Popup = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0, 1, 0.5)}
      initial="hidden"
      whileInView="show"
      className="fixed top-4 w-full"
    >
      <p className="mx-auto max-w-[300px] rounded-xl border-4 border-white bg-black px-6 py-2 text-center font-bold text-white">
        Email coppied to clipboard.
      </p>
    </motion.div>
  );
};

export default Popup;
