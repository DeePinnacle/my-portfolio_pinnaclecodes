import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Phone, Mail, MapPin } from "lucide-react"
import { SquareMenu } from "lucide-react";
import NavMenu from "./NavMenu";
import Link from "next/link"

const SheetNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SquareMenu className="w-10 h-10 text-acetext" />
      </SheetTrigger>
      <SheetContent className="z-[20000] bg-[#050505e3]">
        <SheetHeader>
          <SheetTitle className="nav-logo">Acelux</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <NavMenu />
        </div>
        <SheetFooter>
          <div className="w-full">
          <ul>
            <li className="text-acetext text-xl md:text-2xl my-3">
              <Link href="tel:+234-802-604-3410" className="footer-contact">
                <Phone /> +234-802-604-3410
              </Link>
            </li>
            <li className="text-acetext text-xl md:text-2xl my-3">
              <Link href="mailto:zainnyzyy@gmail.com" className="footer-contact">
                <Mail />zainnyzyy@gmail.com
              </Link>
            </li>
            <li className="text-acetext text-xl md:text-2xl my-3">
              <Link href="" className="footer-contact">
              <MapPin />Kubwa Arab road
              </Link>
            </li>
          </ul>{" "}
          <ul className="flex flex-row items-center gap-4 mt-8">
              <li className="text-acetext text-xl md:text-2xl">
                <Link href="">
                  <FaFacebook />
                </Link>
              </li>
              <li className="text-acetext text-xl md:text-2xl">
                <Link href="">
                  <FaInstagram />
                </Link>
              </li>
              <li className="text-acetext text-xl md:text-2xl">
                <Link href="wa.me/2348026043410">
                  <FaWhatsapp />
                </Link>
              </li>{" "}
              <li className="text-acetext text-xl md:text-2xl">
                <Link href="mailto:zainnyzyy@gmail.com">
                  <SiGmail />
                </Link>
              </li>
            </ul>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetNavbar;
