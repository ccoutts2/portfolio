import styles from "../styles/globals.module.scss";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import axios from "axios";

export default function Home() {
  const [image, setImage] = useState([]);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get("/data/images.json");
      setImage(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (!image) {
    return null;
  }

  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
      <NavBar />
      <Hero image={image} />
    </main>
  );
}
