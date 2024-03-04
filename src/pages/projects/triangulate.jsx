import globalStyles from "../../styles/globals.module.scss";
import navBarStyles from "../../components/NavBar/NavBar.module.scss";
import styles from "./index.module.scss";
import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Inner from "@/components/Inner/Inner";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/Image";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/hooks/useDimension";

export default function Triangulate() {
  const images = [
    "triangulate-11.svg",
    "triangulate-2.svg",
    "triangulate-3.svg",
    "triangulate-4.svg",
    "triangulate-5.svg",
    "triangulate-6.svg",
    "triangulate-7.svg",
    "triangulate-8.svg",
    "triangulate-9.svg",
    "triangulate-10.svg",
  ];

  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.7]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={`${globalStyles.globals} ${navBarStyles}`}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
      <Inner>
        <NavBar />
        <section className={styles.main}>
          <div className={styles.spacer}></div>
          <div ref={container} className={styles.gallery}>
            <Column images={[images[0], images[1], images[2]]} y={y} />
            <Column images={[images[3], images[4], images[5]]} y={y2} />
            <Column images={[images[6], images[7], images[8]]} y={y3} />
          </div>
          <div className={styles.spacer}></div>
        </section>
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
