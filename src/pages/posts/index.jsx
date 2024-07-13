import React, { useState, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/dist/Flip";

import { getCategorisedPosts } from "../../../lib/posts";
import globalStyles from "../../styles/globals.module.scss";
import styles from "./Index.module.scss";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import BlogListItem from "@/components/BlogListItem/BlogListItem";
gsap.registerPlugin(Flip);

export default function Posts({ allPostsData }) {
  const [showArticles, setShowArticles] = useState(false);

  const container = useRef(null);
  const articles = useRef(null);

  const toggleFlip = () => {
    gsap.to(articles.current, {
      duration: 2,
      ease: "power4.inOut",
      delay: 0.2,
    });
  };

  const onClick = () => {
    setShowArticles(!showArticles);
  };

  useGSAP(
    () => {
      if (articles.current) {
        const initialState = Flip.getState(articles.current);

        Flip.from(initialState, {
          absolute: true,
          duration: 2,
          stagger: 0.05,
          nested: true,
          ease: "power4.inOut",
        });
      }
    },
    { dependencies: [showArticles], scope: container }
  );

  return (
    <section className={globalStyles.globals}>
      <NavBar />
      <section ref={container} className={styles.page_content}>
        <header className={styles.header}>
          <h1>Blog Posts</h1>
        </header>
        <div className={styles.button_container} onClick={onClick}>
          <Button label="See catgeories " />
        </div>
        <section
          ref={articles}
          className={`${styles.articles} ${showArticles ? styles.reorder : ""}`}>
          {allPostsData !== null &&
            Object.keys(allPostsData).map((post) => (
              <BlogListItem category={post} posts={allPostsData[post]} key={post} />
            ))}
        </section>
      </section>
      <Footer />
    </section>
  );
}

export async function getStaticProps() {
  const allPostsData = await getCategorisedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
