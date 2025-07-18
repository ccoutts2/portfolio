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
  const [showText, setShowText] = useState(false);

  const images = [
    "triangulate-2.svg",
    "triangulate-12.svg",
    "triangulate-4.svg",
    "triangulate-5.svg",
    "triangulate-6.svg",
    "triangulate-7.svg",
    "triangulate-8.svg",
    "triangulate-9.svg",
    "triangulate-10.svg",
    "triangulate-11.svg",
  ];

  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.8]);
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
            <h1 className={styles.heading}>/ triangulate</h1>
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
                  href="https://github.com/ccoutts2/triangulate-project"
                  target="_blank">
                  <Button label={`GitHub \u2198`} />
                </Link>
                <Link
                  className={styles.link}
                  href="https://www.linkedin.com/posts/chris-coutts_hey-linkedin-introducing-you-to-triangulate-activity-7165049293173682176-0-de?utm_source=share&utm_medium=member_desktop"
                  target="_blank">
                  <Button label={`Video Demo \u2198`} />
                </Link>
              </div>
            </section>
            <div className={styles.summary}>
              <p>
                Meet up effortlessly with your friends. Triangulate let&apos;s you
                step into the map where you can discover the nearest and best pubs to
                you.
              </p>
            </div>
          </div>
          <div className={styles.spacer}></div>
          <article ref={container} className={styles.gallery}>
            <Column images={[images[0], images[2], images[1]]} y={y} />
            <Column images={[images[3], images[6], images[5]]} y={y2} />
            <Column images={[images[4], images[7], images[8]]} y={y3} />
          </article>
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
                  I initially kicked off this project with Figma mockups to nail down
                  the visual flow. Opting for a clean look, I saved styling for
                  later, ensuring a smooth process. Next up, I tackled the backend
                  using Node.js and Express.js. With a dataset of 30 pubs from my
                  friend&apos;s collection, I started with a GeoJSON format API.
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  To plot these pubs on a map, I tapped into Mapbox&apos;s
                  Geolocation API to convert the addresses to coordinates. Once my
                  Pub API was set, I built a user API and created basic endpoints for
                  the frontend. I built out the font end using React.js and used
                  several components to achieve this - where possible, I created
                  reusable components to keep my application as maintainable as
                  possible. When I successfully plotted the pubs and users from the
                  back end, I realised it was time to migrate to a database. Enter
                  Knex.js and MySQL, allowing me to expand functionality by adding
                  tables for groups, users in groups, and pubs in groups.
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  Adding a pub crawl feature was a must. I used a node package to
                  sort pubs by distance from the user&apos;s location, enhancing the
                  app&apos;s usability. The same package helped calculate the best
                  meeting spot for groups, further enhancing the user experience.
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  I created user authnetication so that a user could sign up and
                  login, which saw me integrate JWT tokens. The user had to login to
                  access specific features of the app, such as a profile page which
                  showed them their favourite drink and groups they&apos;re part of.
                  The intention was to create a more personal touch to the app to
                  improve the user experience.
                </motion.p>
                <motion.p variants={item} className={styles.process_text}>
                  Finally, I polished the frontend with features like pub forms and
                  group creation. Users can now effortlessly create and join groups,
                  adding pubs to their group map. The frontend communicates with the
                  backend, ensuring real-time updates.
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
