import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Contact.module.scss";
import Button from "../Button/Button";
import chris from "../../assets/images/chris-smart2.svg";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

  const container = useRef();
  const image = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(image.current, {
        scrollTrigger: {
          trigger: image.current,
          scrub: false,
          start: "top center",
          end: "bottom bottom",
        },

        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        duration: 4,
      });
    },
    { scope: container }
  );

  return (
    <motion.section
      variants={textAnimate}
      initial="hidden"
      animate="visible"
      className={styles.contact}>
      <section ref={container} className={styles.contact_section}>
        <div className={styles.text_container}>
          <p>
            Want to work <span>together</span> on <span>your</span> project?
          </p>
          <div className={styles.contact_email}>
            <a
              className={styles.contact_button}
              href="mailto:chris.dcoutts@gmail.com">
              <Button
                style={{ fontSize: "0.5rem" }}
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
    </motion.section>
  );
};

export default Contact;
