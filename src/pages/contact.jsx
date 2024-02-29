import styles from "../styles/globals.module.scss";
import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Inner from "@/components/Inner/Inner";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

export default function About() {
  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
      <Inner>
        <NavBar />
        <GetInTouch />
      </Inner>
    </main>
  );
}
