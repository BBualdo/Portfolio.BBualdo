"use client";

import { revalia } from "@/utils/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadeIn";
import CTAAnchor from "@/components/shared/CTAAnchor";

const Info = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.5, 1, 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex-1"
    >
      <div className="flex gap-4 xs:items-center xs:max-lg:flex-col lg:items-start">
        <Image
          alt="Sebastian's Photo"
          src="/photo.png"
          width={200}
          height={300}
          className="rounded-xl border-4 border-white"
        />
        <div className={`${revalia.className} flex flex-col gap-4`}>
          <h3 className="text-shadow-vicePink">
            Hello!
            <br /> My name is Sebastian, but you might know me as{" "}
            <span className="text-vicePink">BBualdo</span> online.
          </h3>
          <h4>
            I&#39;m a freelance developer with a passion for both front-end and
            back-end technologies, steering towards becoming a full-stack
            developer.
          </h4>
        </div>
      </div>
      <div className="mt-8 w-full flex items-center justify-center">
        <CTAAnchor
          id="linkToDetailedBio"
          ariaLabel="Link To Details About Me"
          href="/my-story"
          target="_self"
        >
          Read details about me
        </CTAAnchor>
      </div>
    </motion.div>
  );
};

export default Info;
