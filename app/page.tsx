"use client";
import SplashScreen from "@/components/screens/splash-screen";
import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/sections/HeroSection";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolios from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import { Testimonials } from "@/components/sections/Testimonial"
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
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
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Portfolios />
          <Services />
          <CTA />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default IndexPage;
