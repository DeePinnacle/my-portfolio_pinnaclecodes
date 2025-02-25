import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
  const animationVariants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.2,
      },
    },
  };
  return (
    <section className="w-full overflow-hidden lg:flex lg:flex-row lg:gap-6">
      <motion.div
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
        }}
        viewport={{
          once: true,
        }}
        className="relative w-full h-[45rem] bg-gradient-to-br from-primary to-[gray] md:h-[60rem] lg:h-[45rem]"
      >
        <Image
          src="/profile.png"
          alt="profile-image"
          className="-scale-x-100"
          fill
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </motion.div>
      <motion.div
        initial={{
          x: "100%",
          opacity: 0
        }} 
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.8
        }}
        viewport={{
          once: true
        }}
        className="w-full py-4 px-2">
        <motion.h1 
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true
          }}
          className="uppercase text-6xl font-jost font-semibold mt-4 md:text-7xl lg:text-4xl">
          About me
        </motion.h1>
        <div className="mt-6">
          <motion.p
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="md:text-3xl md:leading-snug md:font-jost lg:text-base"
          >
            Hi, I&apos;m{" "}
            <span className="font-bold font-jost text-slate-300">
              Lawal Kamaldeen
            </span>
            , a web developer dedicated to transforming ideas into impactful
            digital experiences. My journey into tech started in{" "}
            <span className="font-bold">2020</span> with a strong determination
            to learn and grow. Through{" "}
            <span className="font-bold font-jost text-slate-300">
              self-learning
            </span>
            , I explored various aspects of web development, mastering the
            foundational skills that form the bedrock of my expertise today.
          </motion.p>
          <motion.p
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="md:text-3xl md:leading-snug md:font-jost lg:text-base"
          >
            In pursuit of deeper knowledge, I joined{" "}
            <span className="font-bold font-jost text-slate-300">
              Youthrive
            </span>
            , where I honed my{" "}
            <span className="font-bold font-jost text-slate-300">
              backend development skills
            </span>
            , gaining hands-on experience in creating scalable APIs, managing
            databases, and integrating server-side technologies. This structured
            training complemented my self-taught journey and empowered me to
            take on more complex challenges.
          </motion.p>
          <motion.p
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="md:text-3xl md:leading-snug md:font-jost lg:text-base"
          >
            Along the way, I&apos;ve built a range of projects, each one adding
            to my understanding of the development process and user-centric
            design. From dynamic websites to functional web applications, my
            work reflects a balance of creativity, precision, and performance
            optimization.
          </motion.p>
          <motion.h1
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="uppercase text-4xl font-jost font-semibold my-3 md:text-5xl lg:text-3xl"
          >
            What drives me
          </motion.h1>
          <motion.ul
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="drive-list"
          >
            <li className="md:text-3xl md:leading-snug md:font-jost lg:text-base">
              <span className="font-bold font-jost text-slate-300">Continuous Learning: </span>I&apos;m
              passionate about staying updated with the latest technologies,
              frameworks, and best practices.
            </li>
            <li className="md:text-3xl md:leading-snug md:font-jost lg:text-base">
              <span className="font-bold font-jost text-slate-300">Problem-Solving: </span>I enjoy
              tackling challenges and finding efficient, elegant solutions.
            </li>
            <li className="md:text-3xl md:leading-snug md:font-jost lg:text-base">
              <span className="font-bold font-jost text-slate-300">User-Centered Design: </span>Ensuring
              that the end-user has a seamless and enjoyable experience is at
              the core of what I do.
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
