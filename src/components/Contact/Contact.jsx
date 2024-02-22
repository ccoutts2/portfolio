import Link from "next/link";
import React from "react";
import styles from "../../styles/globals.module.scss";
import Button from "../Button/Button";
import Image from "next/image";
import GitHub from "../../assets/logos/github-mark.svg";
import LinkedIn from "../../assets/logos/linkedin.svg";

const Contact = () => {
  return (
    <main className={styles.contact}>
      <section className={styles.contact_section}>
        <div className={styles.contact_email}>
          {/* <h3 className={styles.contacts}>Email</h3> */}
          <p className={styles.contact_text}>chris.dcoutts@gmail.com</p>
        </div>
        <div className={styles.contact_details}>
          {/* <h3 className={styles.contacts}>LinkedIn</h3> */}
          <Link href="https://www.linkedin.com/in/chris-coutts/" target="_blank">
            <Image className={styles.contact_image} src={LinkedIn}></Image>
          </Link>
        </div>
        <div className={styles.contact_details}>
          {/* <h3 className={styles.contacts}>GitHub</h3> */}
          <Link target="_blank" href="https://github.com/ccoutts2/">
            <Image className={styles.contact_image} src={GitHub}></Image>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
