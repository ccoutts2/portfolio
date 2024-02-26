import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../../styles/globals.module.scss";

const Inner = ({ children }) => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className={styles.inner}>
      <motion.div {...anim(slide)} className={styles.slide}></motion.div>
      <motion.div {...anim(opacity)} className={styles.page}>
        {children}
      </motion.div>
    </div>
  );
};

export default Inner;
