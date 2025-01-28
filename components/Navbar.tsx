import React from "react";
import Link from "next/link"
const Navbar = () => {
  return (
    <div className="bg-[#202020] px-3 py-6 w-full flex flex-row items-center justify-between sticky top-0 z-[1000]">
      <Link href="" className="font-jost">LA. Deen</Link>
      <ul className="flex flex-row items-center justify-between gap-6">
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
        <div className="flex flex-row items-center justify-center w-6 h-6 bg-green-300 rounded-full animate-pulse">
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <p className="font-jost hidden lg:block">Available for work</p>
      </div>
    </div>
  );
};

export default Navbar;
