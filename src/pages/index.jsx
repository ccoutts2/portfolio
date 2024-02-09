import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Head>
        <title>Chris | Full Stack</title>
      </Head>
      <NavBar />
    </main>
  );
}
