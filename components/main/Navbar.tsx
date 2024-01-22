import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Portfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href={"#about"} className="cursor-pointer">
              About me
            </Link>
            <Link href={"#skills"} className="cursor-pointer">
              Skills
            </Link>
            <Link href={"#projects"} className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-5 font-medium text-lg text-white">
        <Link href={"#footer"}>
        <p className="px-4 py-1 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-pink-500 border-2  border-[#7042f8b3]  hover:scale-110 transition-all">Contact</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;