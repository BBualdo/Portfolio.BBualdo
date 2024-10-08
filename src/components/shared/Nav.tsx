"use client";

import { Link } from "react-scroll";

import { HiHome } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="fixed bottom-10 md:bottom-16 z-50 w-full opacity-50 transition-all duration-500 hover:opacity-100">
      <div className="gradient-bw mx-auto h-[70px] max-w-[340px] rounded-full p-1 lg:max-w-[440px]">
        <div className="mx-auto flex h-full w-full items-center justify-center gap-8 rounded-full bg-black p-4 text-2xl text-white/50 lg:gap-10 lg:text-3xl">
          <Link
            to="hero"
            smooth
            spy={true}
            activeClass="active"
            className="pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <HiHome />
          </Link>
          <Link
            to="about"
            smooth
            spy={true}
            activeClass="active"
            className="pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <BsPersonFill />
          </Link>
          <Link
            to="projects"
            smooth
            spy={true}
            activeClass="active"
            className="pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <FaLaptopCode />
          </Link>
          <Link
            to="contact"
            smooth
            spy={true}
            activeClass="active"
            className="pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <BiSolidMessageDetail />
          </Link>
          |
          <a
            href="https://github.com/BBualdo/"
            target="_blank"
            id="linkToGithub"
            aria-label="Link to Github"
            className="pointer text-viceCyan transition-all duration-200 hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}
