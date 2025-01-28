import React from "react";
import Link from "next/link"
const Navbar = () => {
  return (
    <div className="bg-[#202020] px-3 py-6 w-full flex flex-row items-center justify-between sticky top-0 z-[1000]">
      <Link href="" className="font-jost">LA. Deen</Link>
      <ul className="flex flex-row items-center justify-between gap-2 lg:gap-6">
        <li>
          <Link href="#home">About</Link>
        </li>{" "}
        <li>
          <Link href="#about">Services</Link>
        </li>{" "}
        <li>
          <Link href="#services">Projects</Link>
        </li>{" "}
        <li>
          <Link href="#footer">Contact</Link>
        </li>
      </ul>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row items-center justify-center w-4 h-4 bg-green-300 rounded-full animate-pulse md:w-6 md:h-6">
          <div className="w-2 h-2 bg-green-600 rounded-full md:w-3 md:h-3"></div>
        </div>
        <p className="font-jost hidden lg:block">Available for work</p>
      </div>
    </div>
  );
};

export default Navbar;
