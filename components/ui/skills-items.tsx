import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconType } from "react-icons";

interface SkillProps {
  name: string,
  level: number,
  icon: IconType,
  delay: number;
}

const SkillItem:React.FC<SkillProps> = ({ name, level, delay, icon:Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = level / 100; // Smooth increment value
      const duration = 2000; // Animation duration in milliseconds
      const interval = 10; // Interval for updating counter

      const intervalId = setInterval(() => {
        start += increment;
        if (start >= level) {
          start = level;
          clearInterval(intervalId);
        }
        setCounter(Math.ceil(start));
      }, (duration / level) * interval);

      return () => clearInterval(intervalId);
    }
  }, [isInView, level]);

  return (
    <>
      <span className="flex flex-row items-center justify-between">
        <span className="flex flex-row items-center gap-2 text-lg"><Icon className="w-8 h-8" /> {name}</span>
        <span className="skill-level">
          {counter}
          <span style={{ fontSize: "0.8rem", marginLeft: "4px" }}>%</span>
        </span>
      </span>
      <motion.div
        ref={ref}
        className={`h-1 bg-[gray] my-3 box-border rounded-full`}
        initial={{ width: 0 }} // Start from 0 width
        animate={isInView ? { width: `${counter}%` } : {}} // Animate to the target width
        transition={{ duration: 2, delay }} // Smooth transition
      >
      </motion.div>
    </>
  );
};

export default SkillItem;
