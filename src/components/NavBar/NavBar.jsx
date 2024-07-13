import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { AnimatePresence, motion } from "framer-motion";
import BurgerNav from "../BurgerNav/BurgerNav";

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
      let hours = d.getHours();
      let conversion = hours < 12 ? "AM" : "PM";

      if (hours > 12) {
        hours = hours - 12;
      } else if (hours === 0) {
        hours = 12;
      }

      return (
        hours + " : " + d.getMinutes().toString().padStart(2, "0") + " " + conversion
      );
    }

    return <>{currentTime}</>;
  };

  const header = useRef(null);
  const walk = 50;

  const shadow = (e) => {
    const { offsetWidth: width, offsetHeight: height } = header.current;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round(x / width + walk - walk / 2);
    const yWalk = Math.round(y / height + walk - walk / 2);

    header.current.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
  };

  useEffect(() => {
    if (header.current) {
      header.current.addEventListener("mousemove", shadow);
    }

    if (!header.current) {
      header.current.removeEventListener("mousemove", shadow);
    }
  }, []);

  return (
    <header className={styles.nav}>
      <div className={styles.title_container}>
        <Link href="/" className={styles.link}>
          <h1 ref={header} className={styles.title}>
            Chris Coutts
          </h1>
        </Link>
        <Clock />
      </div>

      <div className={styles.list_container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link
              href="https://github.com/ccoutts2/"
              target="_blank"
              className={styles.link}>
              GitHub
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/posts" className={styles.link}>
              Blog
            </Link>
          </li>

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
