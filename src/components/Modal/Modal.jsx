import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import styles from "../../styles/globals.module.scss";
import styles from "./Modal.module.scss";
import Image from "next/Image";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        ref={container}
        initial="initial"
        animate={active ? "open" : "closed"}
        className={styles.modal_container}>
        <div style={{ top: index * -100 + "%" }} className={styles.modal_slider}>
          {projects.map((project, index) => {
            const { imageSrc, color } = project;
            return (
              <div
                key={`modal_${index}`}
                className={styles.modal}
                style={{ backgroundColor: color }}>
                <Image src={imageSrc} width={50} height={0} alt="project image" />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}></motion.div>
      <motion.div
        ref={cursorLabel}
        className={styles.cursor_label}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}>
        View
      </motion.div>
    </>
  );
};

export default Modal;
