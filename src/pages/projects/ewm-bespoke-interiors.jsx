import React from "react";
import Head from "next/head";
import Inner from "@/components/Inner/Inner";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import globalStyles from "../../styles/globals.module.scss";
import navBarStyles from "../../components/NavBar/NavBar.module.scss";
import styles from "./index.module.scss";
import ProjectPageHeading from "@/components/ProjectPageHeading/ProjectPageHeading";
import RevealProjectInfo from "@/components/RevealProjectInfo/RevealProjectInfo";
import ProjectTechStack from "@/components/ProjectTechStack/ProjectTechStack";

export default function Page() {
  const paragraphs = [
    "Hello this is a test",
    "hello another test is making its way here",
    "another one for good measure",
    "last one",
  ];

  return (
    <main className={`${globalStyles.globals} ${navBarStyles}`}>
      <Head>
        <title>Chris | Full Stack Developer</title>
      </Head>
      <Inner>
        <NavBar />
        <ProjectPageHeading
          title="ewm bespoke interiors"
          year="2024"
          role="Design & Development"
          gitHubLink="https://github.com/ccoutts2/ewm-bespoke-interiors"
          liveWebsite={false}
          summary="A commercial website showcasing EWM Bespoke Interior's services. Website is currently in development but feel free to view the GitHub repo."
        />
        <div className={styles.spacer}></div>
        <ProjectTechStack projectIndex={0} />
        <RevealProjectInfo paragraphs={paragraphs} />
        <Footer />
      </Inner>
    </main>
  );
}
