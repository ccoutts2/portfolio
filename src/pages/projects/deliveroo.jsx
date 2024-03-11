import globalStyles from "../../styles/globals.module.scss";
import navBarStyles from "../../components/NavBar/NavBar.module.scss";
import styles from "./index.module.scss";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Inner from "@/components/Inner/Inner";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/hooks/useDimension";

export default function Triangulate() {
  const [techStack, setTechStack] = useState(null);

  const images = [
    "deliveroo-1.svg",
    "deliveroo-2.svg",
    "deliveroo-3.svg",
    "deliveroo-4.svg",
    "deliveroo-5.svg",
    "deliveroo-6.svg",
  ];

  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.7]);

  const fetchTechStack = async () => {
    try {
      const { data } = await axios.get("/data/projects.json");
      setTechStack(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTechStack();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  if (!techStack) {
    return null;
  }

  return (
    <main className={`${globalStyles.globals} ${navBarStyles}`}>
      <Head>
        <title>Chris | Full Stack Developer</title>
      </Head>
      <Inner>
        <NavBar />
        <section className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.heading}>/ deliveroo</h1>
            <section className={styles.info_container}>
              <div className={styles.info}>
                <h3 className={styles.header}>year</h3>
                <p>2024</p>
              </div>
              <div className={styles.info}>
                <h3 className={styles.header}>role</h3>
                <p>Development</p>
              </div>
              <div className={styles.button_container}>
                <Link
                  className={styles.link}
                  href="https://github.com/ccoutts2/deliveroo-project"
                  target="_blank">
                  <Button label={`GitHub \u2198`} />
                </Link>
              </div>
            </section>
          </div>
          <div className={styles.spacer}></div>
          <article ref={container} className={styles.gallery}>
            <Column images={[images[2], images[3]]} y={y} />
            <Column images={[images[0], images[4]]} y={y2} />
            <Column images={[images[1], images[5]]} y={y3} />
          </article>
          <div className={styles.spacer}></div>
          <section className={styles.about}>
            <p>
              Building a better experience of sending and receiving a gift for any
              occasion. 24 Hour Hackathon with UX Designers
            </p>
            <article className={styles.card}>
              {techStack[1].techStack.map((tech, index) => (
                <div key={index} className={styles.tech_item}>
                  {tech}
                </div>
              ))}
            </article>
          </section>
        </section>
        <Footer />
      </Inner>
    </main>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.image_container}>
            <Image src={`/images/${src}`} fill alt="project image"></Image>
          </div>
        );
      })}
    </motion.div>
  );
};
