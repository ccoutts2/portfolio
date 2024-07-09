import globalStyles from "../../styles/globals.module.scss";
import navBarStyles from "../../components/NavBar/NavBar.module.scss";
import styles from "./index.module.scss";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Inner from "@/components/Inner/Inner";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useTransform, useScroll, motion, useInView } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import ProjectPageHeading from "@/components/ProjectPageHeading/ProjectPageHeading";
import RevealProjectInfo from "@/components/RevealProjectInfo/RevealProjectInfo";
import ProjectTechStack from "@/components/ProjectTechStack/ProjectTechStack";

export default function Page() {
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

  const paragraphs = [
    "I wanted to further develop my immersive animation skillset by creating an image gallery from one of my favourites trips. I started off the project by collating a series of images from each city and built up an assets folder",

    "Since I've been experimenting with GSAP and Framer Motion, I thought I'd use both for this project. I decided which parts of the site would use which animation style. I also switched from Lenis Scroll to Locomotive Scroll v5, which is still in beta, because it's easier to use",

    "GSAP makes it super simple to do a parallax scroll, so I used that for the landing page. And for the rest of the scrolling animations, Framer Motion was my go-to",

    "At first, I thought I'd make this just for desktops because of all the cool scroll effects, but it didn't quite sit right with me, as people might want to view on mobile. So, I went back and made it work for all screen sizes. But honestly, I still think it looks best on a desktop",

    "Lastly, I jazzed up the footer with my info and links to my sites. I thought it'd be fun to animate the characters spreading out from the links",
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
    const lenis = new Lenis({
      smooth: true,
      speedRatio: 0.001,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  if (!techStack) return null;

  return (
    <main className={`${globalStyles.globals} ${navBarStyles}`}>
      <Head>
        <title>Chris | Full Stack Developer</title>
      </Head>
      <Inner>
        <NavBar />
        <ProjectPageHeading
          title="france 2k23"
          year="2024"
          role="Design & Development"
          gitHubLink="https://github.com/ccoutts2/rugby-world-cup"
          websiteLink="https://france2k23.chris-coutts.com/"
          summary="An immersive image gallery experience of my trip around France for
                the Rugby World Cup in 2023. Witness what I witnessed."
          liveWebsite={true}
        />
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
        <ProjectTechStack projectIndex={1} />
        <RevealProjectInfo paragraphs={paragraphs} />
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
