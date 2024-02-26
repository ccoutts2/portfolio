import styles from "../styles/globals.module.scss";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import { motion } from "framer-motion";
import Inner from "@/components/Inner/Inner";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentSection = calculateCurrentSection(scrollPosition);
  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
      <Inner>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <div
          className={styles.scrollingBackground}
          style={{
            backgroundColor: currentSection === "contact" ? "green" : "#cdcdcd",
          }}
        />
        <Contact />
      </Inner>
    </main>
  );
}

const calculateCurrentSection = (scrollPosition) => {
  const contactSectionPosition = 2000;
  return scrollPosition > contactSectionPosition ? "contact" : "default";
};
