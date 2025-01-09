"use client";
import SplashScreen from "@/components/screens/splash-screen";
import React from "react";
import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection"
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolios from "@/components/sections/Works";


const IndexPage = () => {
  const [count, setCount] = useState(0);

  const handleCountTimer = () => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    if (count === 8) {
      clearInterval(timer);
    }
  };

  handleCountTimer();
  return (
    <>
      {count <= 7 ? (
        <SplashScreen />
      ) : (
        <>
         <HeroSection /> 
         <About />
         <Skills />
         <Portfolios />
        </>
      )}
    </>
  );
};

export default IndexPage;
