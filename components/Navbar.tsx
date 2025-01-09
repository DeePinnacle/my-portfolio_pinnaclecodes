import React from "react";
import Image from "next/image";
import SheetNavbar from "./SheetNavbar";
import NavMenu from "./NavMenu";
const Navbar = () => {
  return (
    <div className="bg-[#312B2B] px-3 py-6 w-full flex flex-row items-center justify-between sticky top-0 z-[1000]">
      <div className="w-10 h-10 relative overflow-hidden">
        <Image
          src={"/logo.png"}
          alt="acelux logo"
          fill
          priority
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="hidden lg:block">
        <NavMenu />
      </div>
      <div className="lg:hidden">
        <SheetNavbar />
      </div>
    </div>
  );
};

export default Navbar;
