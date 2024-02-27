"use client";
import React from "react";
import styles from "../../styles/globals.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Link from "next/link";

const About = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

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
      xPercent += 0.2 * direction;
      requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (firstText.current && secondText.current) {
      gsap.set(secondText.current, {
        left: secondText.current.getBoundingClientRect().width,
      });
      requestAnimationFrame(animate);
    }
  }, []);

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
        <p>I'm a full stack developer based in London</p>
        <p className={styles.text}>
          I come from a varied background having initially studied chemical
          engineering, before moving into a Product Manager role and then finally
          landing a job as a tech and design recruiter
        </p>

        <p className={styles.text}>
          My knowledge of design from recruiting influences my web applications, as I
          look to create intuitive designs which bring out a creative aesthetic
        </p>
        <section>
          <p className={styles.text}>
            As I'm looking to break into the tech world, you'll find behind the
            laptop screen developing my knowledge and skillset
          </p>
          <p className={styles.text}>
            However, in my free time I enjoy playing video games, watching my
            favourite dev YouTubers, going to the gym or cooking up a storm in the
            kithen
          </p>
        </section>
        <section className={styles.text}>
          <h3 className={styles.header}>Want to hire me?</h3>
          <p className={styles.text}>Let's create something cool!</p>
          <p className={styles.text}>
            I'm open to perm and contract roles, and looking forward to putting my
            newfound skills to the test
          </p>
          <p className={styles.text}>
            See my{" "}
            <Link className={styles.link} href="/contact">
              {" "}
              <span>[CONTACT] </span>{" "}
            </Link>{" "}
            page or email me now!
          </p>
          <div className={styles.button_container}>
            <Button
              className={styles.button}
              label={`chris.dcoutts@gmail.com \u2198`}
              // onClick={onClick}
            />
          </div>
        </section>

        <section className={styles.links}>
          <div className={styles.links_container}>
            <h4 className={styles.container_header}>Sitemap</h4>
            <Link href="/" className={styles.nav_link}>
              <h5 className={styles.container_text}>home</h5>
            </Link>
            <Link href="/about" className={styles.nav_link}>
              <h5 className={styles.container_text}>about</h5>
            </Link>
            <Link href="/contact" className={styles.nav_link}>
              <h5 className={styles.container_text}>contact</h5>
            </Link>
          </div>
          <div className={styles.links_container}>
            <h4 className={styles.container_header}>Let's connect</h4>
            <Link
              href="https://www.linkedin.com/in/chris-coutts/"
              target="_blank"
              className={styles.nav_link}>
              <h5 className={styles.container_text}>linkedin</h5>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/ccoutts2/"
              className={styles.nav_link}>
              <h5 className={styles.container_text}>github</h5>
            </Link>
            <Link href="/" className={styles.nav_link}>
              <h5 className={styles.container_text}>instagram</h5>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
