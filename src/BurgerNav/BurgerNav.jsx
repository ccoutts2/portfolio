import styles from "./BurgerNav.module.scss";
import React from "react";
import { Links, FooterLinks } from "./data";
import Link from "next/link";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,

    transition: {
      duration: 0.65,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
      delay: 0.5 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,

    transition: {
      duration: 0.65,
      ease: [0.215, 0.61, 0.355, 1],

      delay: 0.75 + i * 0.1,
    },
  }),
  exit: {
    opacit: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const BurgerNav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <div key={i} className={styles.link_container}>
              <motion.div
                custom={i}
                variants={slideIn}
                animate="enter"
                exit="exit"
                initial="initial">
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        {FooterLinks.map((link, i) => {
          return (
            <motion.a
              key={`f_${i}`}
              href={link.href}
              custom={i}
              variants={perspective}
              animate="enter"
              exit="exit"
              initial="initial">
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default BurgerNav;
