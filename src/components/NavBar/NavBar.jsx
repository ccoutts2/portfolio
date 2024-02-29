import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const Clock = () => {
    const d = new Date();
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
      const date =
        "GMT " + d.getHours() + " : " + d.getMinutes().toString().padStart(2, "0");
      const timer = setInterval(() => {
        setCurrentTime(date);
      }, 1000);

      return () => clearInterval(timer);
    }, [currentTime]);

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
          <Link href="#" className={styles.links}>
            {" "}
            <li className={styles.link}>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
