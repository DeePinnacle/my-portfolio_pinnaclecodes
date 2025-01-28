"use client";
import Link from "next/link";
import { motion } from "framer-motion";
interface propsType {
  href: string;
  children: string;
}

const MediaLinks = ({ href, children }: propsType) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.li
      initial="initial"
      whileHover="hovered"
      className="my-6 border-b border-solid border-[gray] relative block overflow-hidden whitespace-nowrap uppercase md:my-9"
    >
      <Link
        href={href}
        className="my-2 text-3xl font-jost font-light md:text-5xl lg:text-4xl"
      >
        <p>
          {children?.split("").map((alp, i) => (
            <motion.span
              key={i}
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {alp}
            </motion.span>
          ))}
        </p>
        <p className="absolute inset-0">
          {children?.split("").map((alp, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {alp}
            </motion.span>
          ))}
        </p>
      </Link>
    </motion.li>
  );
};
export default MediaLinks;
