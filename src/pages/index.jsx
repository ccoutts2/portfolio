import styles from "../styles/globals.module.scss";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
      <NavBar />
      <Hero />
      <Projects />
    </main>
  );
}
