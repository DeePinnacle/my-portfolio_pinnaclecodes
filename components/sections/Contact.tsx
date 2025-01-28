"use client";
import Link from "next/link";
import MaxWidthWrapper from "../ui/max-width";
import { motion } from "framer-motion";
import FlipLink from "@/components/ui/contact-media-link";
const Contact = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full px-4 py-14 overflow-hidden">
        <motion.span
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          viewport={{
            once: true,
          }}
          className="my-9 inline-block"
        >
          <p className="text-7xl font-jost font-semibold md:text-9xl">
            Let&apos;s Connect
          </p>
          <p className="text-7xl font-jost font-semibold md:text-9xl lg:ml-72">
            And Work...
          </p>
        </motion.span>
        <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-9 lg:items-center lg:mt-9">
          <motion.ul
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{
              once: true,
            }}
            className="my-7"
          >
            <FlipLink href="">Github</FlipLink>
            <FlipLink href="">LinkedIn</FlipLink>
            <FlipLink href="">instagram</FlipLink>
            <FlipLink href="">Whatsapp</FlipLink>
          </motion.ul>
          <motion.span
            initial={{
              x: "100%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="uppercase font-jost text-semibold text-2xl mt-8 mb-4 md:text-5xl">
              Contact info
            </p>
            <p className="md:text-2xl md:leading-normal lg:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, cupiditate quasi. Doloremque delectus iure cum! Labore
              aperiam, omnis excepturi.
            </p>
            <br />
            <Link
              href="mailto:officialdeepinnacle@gmail.com"
              className="my-9 font-jost font-semibold text-xl md:text-4xl lg:text-3xl"
            >
              officialdeepinnacle@gmail.com
            </Link>
          </motion.span>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact;
