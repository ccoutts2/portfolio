import styles from "./Footer.module.scss";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={styles.links}>
      <div className={styles.links_container}>
        <h4 className={styles.container_header}>Sitemap</h4>
        <Link href="/" className={styles.nav_link}>
          <h5 className={styles.container_text}>home</h5>
        </Link>
        <Link href="/about" className={styles.nav_link}>
          <h5 className={styles.container_text}>about</h5>
        </Link>
        <Link href="/contact" className={styles.nav_link}>
          <h5 className={styles.container_text}>contact</h5>
        </Link>
      </div>
      <div className={styles.links_container}>
        <h4 className={styles.container_header}>Let's connect</h4>
        <Link
          href="https://www.linkedin.com/in/chris-coutts/"
          target="_blank"
          className={styles.nav_link}>
          <h5 className={styles.container_text}>linkedin</h5>
        </Link>
        <Link
          target="_blank"
          href="https://github.com/ccoutts2/"
          className={styles.nav_link}>
          <h5 className={styles.container_text}>github</h5>
        </Link>
        <Link href="/" className={styles.nav_link}>
          <h5 className={styles.container_text}>instagram</h5>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
