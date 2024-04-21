import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Contact.module.scss";
import Button from "../Button/Button";
import chris from "../../assets/images/chris-smart2.svg";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Contact = () => {
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

  const image = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(image.current, {
        scrollTrigger: {
          trigger: image.current,
          scrub: true,
          start: "0px bottom",
          end: "center center",
          once: true,
        },
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power3.Out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.main
      variants={textAnimate}
      initial="hidden"
      animate="visible"
      className={styles.contact}>
      <section className={styles.contact_section}>
        <div className={styles.text_container}>
          <p>
            Want to work <span>together</span> on <span>your</span> project?
          </p>
          <div className={styles.contact_email}>
            <a
              className={styles.contact_button}
              href="mailto:chris.dcoutts@gmail.com">
              <Button
                className={styles.button}
                label={`chris.dcoutts@gmail.com \u2198`}
              />
            </a>
          </div>
        </div>
        <div ref={image} className={styles.image_container}>
          <Image
            className={styles.image}
            src={chris}
            alt="profile picture of me"
            fill={true}
          />
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;
