import styles from "./Profile.module.scss";
import gsap from "gsap";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const textAnimate = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerDuration = 0.2;

  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    if (firstText.current && secondText.current) {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }

      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      xPercent += 0.18 * direction;
      requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction = -1),
      },
      x: "-300px",
    });
    if (firstText.current && secondText.current) {
      gsap.set(secondText.current, {
        left: secondText.current.getBoundingClientRect().width,
      });
      requestAnimationFrame(animate);
    }
  }, []);

  return (
    <motion.main
      variants={textAnimate}
      initial="hidden"
      animate="visible"
      className={styles.profile}>
      <h1 className={styles.title}>/ about</h1>
      <div className={styles.slider_container}>
        <div ref={slider} className={styles.slider}>
          <h2 ref={firstText}>Full Stack Developer &mdash;</h2>
          <h2 ref={secondText}>Full Stack Developer &mdash;</h2>
        </div>
      </div>

      <section className={styles.text_section}>
        <p>I&apos;m a full stack developer based in London</p>
        <p className={styles.text}>
          I come from a varied background having initially studied chemical
          engineering, before moving into a Product Manager role and then finally
          landing a job as a Tech and Design Recruiter
        </p>

        <p className={styles.text}>
          My knowledge of design from recruiting influences my web applications, as I
          look to create intuitive designs which bring out a creative aesthetic
        </p>
        <section>
          <p className={styles.text}>
            As I&apos;m looking to break into the tech world, you&apos;ll find me
            behind the laptop screen developing my knowledge and skillset
          </p>
          <p className={styles.text}>
            However, in my free time I enjoy playing video games, watching my
            favourite dev YouTubers, going to the gym, or cooking up a storm in the
            kitchen
          </p>
        </section>
        <section className={styles.text}>
          <h3 className={styles.header}>Let&apos;s create something cool!</h3>
          <p className={styles.text}>
            I&apos;m open to perm and contract roles, and looking forward to putting
            my newfound skills to the test
          </p>
          <p className={styles.text}>
            See my{" "}
            <Link className={styles.link} href="/contact">
              {" "}
              <span>[CONTACT] </span>{" "}
            </Link>{" "}
            page or email me now
          </p>
          <div className={styles.button_container}>
            <a className={styles.email} href="mailto:chris.dcoutts@gmail.com">
              <Button
                className={styles.button}
                label={`chris.dcoutts@gmail.com \u2198`}
              />
            </a>
          </div>
        </section>
      </section>
    </motion.main>
  );
};

export default About;
