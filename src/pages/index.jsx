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
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Triangulate",
      description:
        "Step into the map with your friends and discover pubs in your city. Triangulate makes planning fun.",
      techStack: ["React", "Node", "Express", "Knex", "MySQL", "MapBox"],
      imageSrc: "/images/triangulate-4.svg",
      link: "/projects/triangulate",
      color: "black",
    },
    {
      id: 2,
      title: "Deliveroo",
      description:
        "How might we enhance the experience of sending and receiving a gift for any occasion? 24 Hour Hackathon with UX Designers.",
      techStack: ["React", "Scss"],
      imageSrc: "/images/deliveroo-1.svg",
      link: "/projects/deliveroo",
      color: "black",
    },
    {
      id: 3,
      title: "Gollum",
      description:
        "Enter Gollum's cave and answer all the riddles to leave with the ring...alive",
      techStack: ["React", "Node", "Express", "Scss"],
      imageSrc: "/images/gollum-1.svg",
      link: "/projects/gollum",
      color: "black",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
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
                  setModal={setModal}
                />
              );
            })}
          </div>

          <Modal modal={modal} projects={projects} />
        </div>
        {/* <Projects /> */}
        <Contact />
      </Inner>
    </main>
  );
}
