import styles from "../styles/globals.module.scss";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <main className={styles.globals}>
      <Head>
        <title>Chris | Full Stack Dev</title>
      </Head>
      <NavBar />
    </main>
  );
}
