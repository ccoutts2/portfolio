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

export default function Triangulate() {
  const [techStack, setTechStack] = useState(null);

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
        <title>Chris | Full Stack Dev</title>
      </Head>
      <Inner>
        <NavBar />
        <section className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.heading}>/ gollum's cave</h1>
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
          </div>
          <div className={styles.spacer}></div>

          <div className={styles.video_container}>
            <video controls={false} autoPlay loop muted className={styles.video}>
              <source src="/videos/gollum.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.spacer}></div>
          <section className={styles.about}>
            <p>
              Enter Gollum's cave and answer all the riddles to leave with the
              ring...alive. 24 Hour Pair Programming Hackathon
            </p>
            <article className={styles.card}>
              {techStack[2].techStack.map((tech, index) => (
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
