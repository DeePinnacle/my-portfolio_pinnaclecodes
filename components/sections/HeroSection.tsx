"use client";
import React from "react";
import MaxWidthWrapper from "../ui/max-width";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { WordFlip } from "@/components/WordFlip";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiShadcnui, SiFramer } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import {  } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className="w-full lg:flex lg:flex-col lg:items-center lg:justify-center">
      <MaxWidthWrapper>
        <div className="hero-section-style">
          <div className="hero-section-content">
            <ul className="flex flex-row items-center justify-between my-5">
              <motion.li
                initial={{
                  x: "-50%",
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                }}
                className="md:text-3xl lg:text-base"
              >
                Hello World!
              </motion.li>
              <span className="flex flex-row items-center justify-center gap-4">
                <motion.li
                  initial={{
                    y: "50%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2.4,
                  }}
                  className="flex flex-row items-center gap-3"
                >
                  <Link href={""} className="lg:flex lg:flex-row lg:items-center lg:gap-2">
                    <FaLinkedin className="md:w-9 h-9 lg:w-5" />{" "}
                    <span className="hidden lg:block">Linkedin</span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: "-50%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2.7,
                  }}
                  className="flex flex-row items-center gap-3"
                >
                  <Link href={""} className="lg:flex lg:flex-row lg:items-center lg:gap-2">
                    <FaGithub className="md:w-9 h-9 lg:w-5" />{" "}
                    <span className="hidden lg:block">Github</span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: "50%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2.4,
                  }}
                  className="flex flex-row items-center gap-3"
                >
                  <Link href={""} className="lg:flex lg:flex-row lg:items-center lg:gap-2">
                    <FaInstagram className="md:w-9 h-9 lg:w-5" />{" "}
                    <span className="hidden lg:block">Instagram</span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    y: "-50%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2.7,
                  }}
                  className="flex flex-row items-center gap-3"
                >
                  <Link href={""} className="lg:flex lg:flex-row lg:items-center lg:gap-2">
                    <FaWhatsapp className="md:w-9 h-9 lg:w-5" />{" "}
                    <span className="hidden lg:block">Whatsapp</span>
                  </Link>
                </motion.li>
              </span>
            </ul>
            <motion.p
              initial={{
                y: "20%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2.2,
              }}
              className="text-center bg-primary text-[gray] p-2 rounded-full md:py-4 md:w-3/4 md:text-xl md:mx-auto md:my-4 lg:w-1/2 lg:text-base"
            >
              Transforming Ideas into Digital Experiences 🚀
            </motion.p>
            <motion.p
              initial={{
                y: "20%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2.2,
              }}
              className="name-style md:text-7xl md:mb-2 lg:text-8xl lg:font-jost"
            >
              LAWAL KAMALDEEN.
            </motion.p>
            <div className="w-full p-2 my-4 rounded-full flex flex-row flex-wrap items-center justify-evenly gap-4 md:gap-5 lg:gap-6">
            <FaHtml5 className="text-2xl md:text-3xl lg:text-5xl" />
            <FaCss3 className="text-2xl md:text-3xl lg:text-5xl" />
            <IoLogoJavascript className="text-2xl md:text-3xl lg:text-5xl" />
            <FaReact className="text-2xl md:text-3xl lg:text-5xl" />
            <RiNextjsLine className="text-2xl md:text-3xl lg:text-5xl" />
            <RiTailwindCssFill className="text-2xl md:text-3xl lg:text-5xl" />
            <SiFramer className="text-2xl md:text-3xl lg:text-5xl" />
            <SiShadcnui className="text-2xl md:text-3xl lg:text-5xl" />
            <FaNodeJs className="text-2xl md:text-3xl lg:text-5xl" />
            <FaGitAlt className="text-2xl md:text-3xl lg:text-5xl" />
            <FaGit className="text-2xl md:text-3xl lg:text-5xl" />
            <DiMongodb className="text-2xl md:text-3xl lg:text-5xl" />
            <BiLogoPostgresql className="text-2xl md:text-3xl lg:text-5xl" />
            </div>
            <WordFlip />
            <motion.div
              initial={{
                y: "20%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2.7,
              }}
              className="flex flex-row items-center justify-center gap-4 my-6"
            >
              <Button className="w-3/4 h-12 py-4 bg-[gray] text-primary rounded-full text-xl hover:bg-[gray] md:w-1/2 md:py-8 md:text-3xl lg:w-1/4 lg:text-base">
                Get in Touch
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{
              y: "20%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2.7,
            }}
            className="hero-img-wrapper mx-auto"
          >
            <div className="relative w-full h-80 overflow-hidden md:h-[40.625rem]">
              <Image
                src="/hero-img.jpg"
                alt="coding-image"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
                className="rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
