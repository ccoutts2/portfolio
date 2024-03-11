import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { AnimatePresence, motion } from "framer-motion";
import BurgerNav from "../BurgerNav/BurgerNav";
import Inner from "../Inner/Inner";

const variants = {
  open: {
    width: 160,
    height: 320,
    top: "-1.5rem",
    right: "-0.4rem",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 40,
    height: 16,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const Clock = () => {
    const [currentTime, setCurrentTime] = useState(getFormattedTime());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(getFormattedTime());
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    function getFormattedTime() {
      const d = new Date();
      return (
        "GMT " + d.getHours() + " : " + d.getMinutes().toString().padStart(2, "0")
      );
    }

    return <>{currentTime}</>;
  };

  return (
    <header className={styles.nav}>
      <div className={styles.title_container}>
        <Link href="/" className={styles.links}>
          <h1 className={styles.title}>Chris Coutts</h1>
        </Link>
        <Clock />
      </div>
      <div className={styles.list_container}>
        <ul className={styles.list}>
          <Link href="/about" className={styles.links}>
            <li className={styles.link}>About</li>
          </Link>
          <Link href="/contact" className={styles.links}>
            {" "}
            <li className={styles.link}>Contact</li>
          </Link>

          <div className={styles.menu_header}>
            <motion.div
              className={styles.menu}
              variants={variants}
              animate={isActive ? "open" : "closed"}
              initial="closed">
              <AnimatePresence> {isActive && <BurgerNav />}</AnimatePresence>
            </motion.div>

            <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
          </div>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
