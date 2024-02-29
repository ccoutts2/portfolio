import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
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
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
