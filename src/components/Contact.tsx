"use client";

import { revalia } from "@/utils/fonts";
import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Popup from "./shared/Popup";

export default function Contact() {
  const [isCoppied, setIsCoppied] = useState<boolean>(false);
  const timeoutRef = useRef<any>();

  const copyEmail = () => {
    const email = "sebastian.opozda.2305@gmail.com";

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    navigator.clipboard.writeText(email).then(() => {
      setIsCoppied(true);

      timeoutRef.current = setTimeout(() => {
        setIsCoppied(false);
        timeoutRef.current = null;
      }, 2000);
    });
  };

  return (
    <>
      {isCoppied ? <Popup /> : null}
      <section id="contact" className={`${revalia.className} py-10 xl:py-20`}>
        <div className="flex flex-col justify-center gap-20">
          <h2 className="title">Contact</h2>
          <div className="flex items-center gap-10 xs:max-xl:flex-col xl:mt-40">
            <div className="flex-1">
              <p className="text-center text-vicePink">Get in touch</p>
              <h3 className="text-4xl">Let's work together</h3>
            </div>
            <div className="flex flex-1 flex-col items-center gap-10">
              <h3>How do you want to contact me?</h3>
              <div className="flex items-center justify-center gap-10 rounded-xl border p-10 text-white/50 xl:gap-20">
                <a
                  href="mailto:sebastian.opozda.2305@gmail.com"
                  className="pointer transition-all duration-200 hover:scale-110 hover:text-white"
                >
                  <MdEmail className="text-4xl xl:text-6xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sebastian-opozda/"
                  className="pointer transition-all duration-200 hover:scale-110 hover:text-white"
                >
                  <FaLinkedin className="text-3xl xl:text-5xl" />
                </a>
                <button className="pointer border border-white/50 px-2 py-2 text-xs shadow-[0_4px_0] shadow-white/50 duration-200 hover:scale-110 hover:border-white hover:text-white hover:shadow-white hover:transition-all active:mt-2 active:shadow-none xl:px-4 xl:text-base xl:shadow-[0_8px_0] xl:active:mt-4">
                  Copy Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
