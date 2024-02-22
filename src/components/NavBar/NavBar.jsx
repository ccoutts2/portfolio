import Link from "next/link";
import React from "react";
import styles from "../../styles/globals.module.scss";

const NavBar = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Chris Coutts</h1>
      </div>
      <div className={styles.list_container}>
        <ul className={styles.list}>
          <Link href="#" className={styles.links}>
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
