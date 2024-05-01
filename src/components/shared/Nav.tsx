"use client";

import { Link } from "react-scroll";

import { HiHome } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function Nav() {
  return (
    <nav className="fixed bottom-8 z-50 w-full">
      <div className="gradient-bw mx-auto h-[70px] max-w-[500px] rounded-full p-1">
        <div className="mx-auto flex h-full w-full items-center justify-center gap-14 rounded-full bg-black p-4 text-3xl text-white/50">
          <Link
            to="hero"
            smooth
            spy={true}
            activeClass="active"
            className="cursor-pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <HiHome />
          </Link>
          <Link
            to="about"
            smooth
            spy={true}
            activeClass="active"
            className="cursor-pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <BsPersonFill />
          </Link>
          <Link
            to="skills"
            smooth
            spy={true}
            activeClass="active"
            className="cursor-pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <FaToolbox />
          </Link>
          <Link
            to="projects"
            smooth
            spy={true}
            activeClass="active"
            className="cursor-pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <FaLaptopCode />
          </Link>
          <Link
            to="contact"
            smooth
            spy={true}
            activeClass="active"
            className="cursor-pointer transition-all duration-200 hover:scale-125 hover:text-white"
          >
            <BiSolidMessageDetail />
          </Link>
        </div>
      </div>
    </nav>
  );
}
