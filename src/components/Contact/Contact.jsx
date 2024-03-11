import React from "react";
import Image from "next/image";
import styles from "./Contact.module.scss";
import Button from "../Button/Button";
import chris from "../../assets/images/chris-smart3.svg";
import { motion } from "framer-motion";

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

  return (
    <motion.main
      variants={textAnimate}
      initial="hidden"
      animate="visible"
      className={styles.contact}>
      <section className={styles.contact_section}>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src={chris}
            alt="profile picture of me"
            width={110}
            height={95}
          />
        </div>
        <div className={styles.contact_email}>
          <a className={styles.contact_button} href="mailto:chris.dcoutts@gmail.com">
            <Button
              className={styles.button}
              label={`chris.dcoutts@gmail.com \u2198`}
            />
          </a>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;
