import styles from "../styles/globals.module.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Inner from "@/components/Inner/Inner";
import Modal from "@/components/Modal/Modal";
import Lenis from "@studio-freight/lenis";
import PreLoader from "@/components/PreLoader/PreLoader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [projects, setProjects] = useState(null);
  const [isError, setIsError] = useState(false);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get("/data/projects.json");
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const isFirstLoad = sessionStorage.getItem("isFirstLoad");

    if (!isFirstLoad) {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
        sessionStorage.setItem("isFirstLoad", "false");
      }, 3850);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (!projects) {
    return null;
  }

  if (isError) {
    return <p>There&apos;s something wrong, contact me</p>;
  }

  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Developer</title>
      </Head>
      <AnimatePresence mode="mount">
        {isLoading && <PreLoader key="loader" />}
      </AnimatePresence>
      <Inner>
        <NavBar />
        <Hero />
        <About />
        <h2 className={styles.header}>/ projects</h2>
        <div className={styles.projects_main}>
          <div className={styles.projects_body}>
            {projects.map((project, index) => {
              return (
                <Projects
                  key={index}
                  index={index}
                  title={project.title}
                  description={project.description}
                  setModal={setModal}
                />
              );
            })}
          </div>
          <Modal modal={modal} projects={projects} />
        </div>
        <Contact />
        <Footer />
      </Inner>
    </main>
  );
}
