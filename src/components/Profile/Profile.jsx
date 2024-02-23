"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/globals.module.scss";
import Button from "../Button/Button";
import Image from "next/image";
import chris from "../../assets/images/chris-profile.svg";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const About = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.2 * direction;
  };

  return (
    <main className={styles.profile}>
      <h1 className={styles.title}>/ about</h1>
      <div className={styles.slider_container}>
        <div ref={slider} className={styles.slider}>
          <h2 ref={firstText}>Full Stack Developer -</h2>
          <h2 ref={secondText}>Full Stack Developer -</h2>
        </div>
      </div>
      {/* <div className={styles.image_container}>
        {" "}
        <Image src={chris} alt="profile picture of me" className={styles.image} />
      </div> */}
      <section className={styles.text_section}>
        <p>Hey I'm Chris. A full stack developer based in London</p>
        <p className={styles.text}>
          I come from a varied background having initially studied chemical
          engineering, before moving into a Product Manager role and then finally
          landing a job as a tech and design recruiter
        </p>
        {/* <p>
          My diverse experience across technology recruitment, product management and
          engineering has provided me with a versatile skill set, positioning me as a
          valuable Software Engineer to future teams
        </p> */}
        <p>
          My knowledge of design from recruiting influences my web applications, as I
          look to create intuitive designs which bring out a creative aesthetic
        </p>
        <section></section>
      </section>
    </main>
  );
};

export default About;
