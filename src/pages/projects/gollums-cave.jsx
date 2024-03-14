import globalStyles from "../../styles/globals.module.scss";
import navBarStyles from "../../components/NavBar/NavBar.module.scss";
import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Inner from "@/components/Inner/Inner";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

export default function Triangulate() {
  const [techStack, setTechStack] = useState(null);
  const [showText, setShowText] = useState(false);

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
            <h1 className={styles.heading}>/ gollum&apos;s cave</h1>
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
                  href="https://github.com/ccoutts2/lotr-riddle-game-client"
                  target="_blank">
                  <Button label={`GitHub \u2198`} />
                </Link>
              </div>
            </section>

            <div className={styles.summary}>
              <p>
                Enter Gollum&apos;s cave and answer all the riddles to leave with the
                ring. 24 Hour Pair Programming Hackathon
              </p>
            </div>
          </div>
          <div className={styles.spacer}></div>

          <div className={styles.video_container}>
            <video controls={false} autoPlay loop muted className={styles.video}>
              <source src="/videos/gollum.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.spacer}></div>
          <section className={styles.about}>
            <h4>Tech Stack</h4>
            <article className={styles.card}>
              {techStack[1].techStack.map((tech, index) => (
                <div key={index} className={styles.tech_item}>
                  {tech}
                </div>
              ))}
            </article>
          </section>
          <section className={styles.process}>
            <Button
              label={
                showText ? `Hide the Process \u2198` : `Show the Process  \u2198`
              }
              onClick={onClick}
            />

            {showText ? (
              <motion.div
                variants={textContainer}
                initial="hidden"
                animate="visible">
                <motion.p variants={item} className={styles.process_text}>
                  We began by creating our own API using Node.js and Express.js. This
                  API housed all the questions, answer options, and correct answers
                  for our quiz within a JSON file. Before diving into frontend
                  development, we tested our API endpoint with Postman to ensure
                  functionality.
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  Once our API was up and running, we turned our attention to
                  building the game using React.js. Our main goal was to develop an
                  enjoyable and engaging game where players had to answer all the
                  questions correctly. We built functions to verify if the
                  player&apos;s selected answer matched the correct one from our API,
                  which also kept track of the scores.
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  Whenever a player clicked on a correct answer, we rendered a new
                  question and updated their score accordingly. If the player clicked
                  on an incorrect answer at any point, we rendered UI to let the
                  player know they sadly lost the game.
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  Throughout the game, we maintained a simple and user-friendly
                  interface. Upon successfully answering all the questions and
                  achieving a score of 8, we celebrated their victory with a winning
                  message displayed on the screen.
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
