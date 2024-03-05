import styles from "../styles/globals.module.scss";
import React, { useEffect } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Inner from "@/components/Inner/Inner";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Footer from "@/components/Footer/Footer";
import Lenis from "@studio-freight/lenis";

export default function About() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
      <Inner>
        <NavBar />
        <GetInTouch />
        <Footer />
      </Inner>
    </main>
  );
}
