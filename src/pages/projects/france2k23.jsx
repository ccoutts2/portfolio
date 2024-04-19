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
import { useTransform, useScroll, motion, useInView } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/hooks/useDimension";

export default function Triangulate() {
  const [techStack, setTechStack] = useState(null);
  const [showText, setShowText] = useState(false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ ref });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-68%"]);

  const cards = [
    {
      src: "/images/france2k23-6.svg",
      id: 1,
    },
    {
      src: "/images/france2k23-1.svg",
      id: 2,
    },
    {
      src: "/images/france2k23-3.svg",
      id: 3,
    },
    {
      src: "/images/france2k23-4.svg",
      id: 4,
    },

    {
      src: "/images/france2k23-2.svg",
      id: 6,
    },
  ];

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

  const onClick = () => {
    setShowText(!showText);
  };

  if (!techStack) {
    return null;
  }

  const textContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delayChildren: 0.2,
    },
  };

  return (
    <main className={`${globalStyles.globals} ${navBarStyles}`}>
      <Head>
        <title>Chris | Full Stack Developer</title>
      </Head>
      <Inner>
        <NavBar />
        <section className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.heading}>/ france2k23</h1>
            <section className={styles.info_container}>
              <div className={styles.info}>
                <h3 className={styles.header}>year</h3>
                <p>2024</p>
              </div>
              <div className={styles.info}>
                <h3 className={styles.header}>role</h3>
                <p>Design and Development</p>
              </div>
              <div className={styles.button_container}>
                <Link
                  className={styles.link}
                  href="https://github.com/ccoutts2/rugby-world-cup"
                  target="_blank">
                  <Button label={`GitHub \u2198`} />
                </Link>
                <Link
                  className={styles.link}
                  href="https://rugby-world-cup.vercel.app/"
                  target="_blank">
                  <Button label={`Live Website \u2198`} />
                </Link>
              </div>
            </section>
            <div className={styles.summary}>
              <p>
                An immersive image gallery experience of my trip around France for
                the Rugby World Cup in 2023. Witness what I witnessed.
              </p>
            </div>
          </div>
          <div className={styles.spacer}></div>

          <section ref={ref} className={styles.horizontalScroll}>
            <div className={styles.sticky}>
              <motion.div style={{ x }} className={styles.cards}>
                {cards.map((card) => {
                  return <Card card={card} key={card.id} />;
                })}
              </motion.div>
            </div>
          </section>

          <div className={styles.spacer}></div>
          <section className={styles.about}>
            <h4>Tech Stack</h4>
            <article className={styles.card}>
              {techStack[0].techStack.map((tech, index) => (
                <div key={index} className={styles.tech_item}>
                  {tech}
                </div>
              ))}
            </article>
          </section>
          <section className={styles.process}>
            <div className={styles.process_button}>
              <Button
                label={
                  showText ? `Hide the Process \u2198` : `Show the Process  \u2198`
                }
                onClick={onClick}
              />
            </div>

            {showText ? (
              <motion.div
                variants={textContainer}
                initial="hidden"
                animate="visible">
                <motion.p variants={item} className={styles.process_text}>
                  I wanted to further develop my immersive animation skillset by
                  creating an image gallery from one of my favourites trips. I
                  started off the project by collating a series of images from each
                  city and built up an assets folder
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  I've been using both GSAP and Framer Motion, so I wanted to use
                  both in this project and decided which parts of the site would use
                  which animation framework. I've also used Lenis Scroll before for a
                  smooth scroll, however I decided to try Locomotive Scroll v5 (which
                  is currently in beta) as it offers easy implementation, and is
                  built off of Lenis Scroll
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  GSAP has a seriously easy method of implementing a parallax scroll
                  so I decided to use this for the landing page. Framer Motion took
                  up the rest of the scrolling animations
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  I decided to make this a desktop only website, because of the
                  scroll animations implemented and I felt the user would get more
                  out of looking at images on a larger screen
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  Finally I created a footer with my details and links to my sites. I
                  wanted to jazz this up so implement an animation to spread out each
                  character from the links to my sites
                </motion.p>
              </motion.div>
            ) : null}
          </section>
        </section>
        <Footer />
      </Inner>
    </main>
  );
}

const Card = ({ card }) => {
  return (
    <div key={card.id} className={styles.cardContainer}>
      <Image fill={true} src={card.src} className={styles.image} />
    </div>
  );
};
