"use client";
import React from "react";
import MaxWidthWrapper from "../ui/max-width";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { WordFlip } from "@/components/WordFlip";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
const HeroSection = () => {
  return (
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
                <Link href={""}>
                  <FaLinkedin /> <span className="hidden">Linkedin</span>
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
                <Link href={""}>
                  <FaGithub /> <span className="hidden">Github</span>
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
                <Link href={""}>
                  <FaInstagram /> <span className="hidden">Instagram</span>
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
                <Link href={""}>
                  <FaWhatsapp /> <span className="hidden">Whatsapp</span>
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
            className="text-center bg-primary text-[gray] p-2 rounded-full"
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
            className="name-style"
          >
            LAWAL KAMALDEEN.
          </motion.p>
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
            <Button className="w-3/4 h-12 py-4 bg-[gray] text-primary rounded-full text-xl hover:bg-[gray]">
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
          className="hero-img-wrapper"
        >
          <div className="relative w-full h-80 overflow-hidden">
            <Image
              src="/code-1.png"
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
  );
};

export default HeroSection;
