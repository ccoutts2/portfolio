import styles from "../styles/globals.module.scss";
import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "@/components/Profile/Profile";
import Inner from "@/components/Inner/Inner";

export default function About() {
  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
      <Inner>
        <NavBar />
        <Profile />
      </Inner>
    </main>
  );
}