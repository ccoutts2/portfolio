import React, { useState, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/dist/Flip";

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import BlogListItem from "@/components/BlogListItem/BlogListItem";

import { getCategorisedPosts } from "../../../lib/posts";
import globalStyles from "../../styles/globals.module.scss";
import styles from "./Index.module.scss";

gsap.registerPlugin(Flip);

export default function Posts({ allPostsData }) {
  const articleContanier = useRef(null);
  const [showArticles, setShowArticles] = useState(false);

  const revealArticles = () => {
    const initialState = Flip.getState(articleContanier.current.children);

    setShowArticles(!showArticles);

    requestAnimationFrame(() => {
      Flip.from(initialState, {
        duration: 2,
        ease: "power4.inOut",
        nested: true,
        absolute: true,
        stagger: 0.1,
      });
    });
  };
  return (
    <section className={globalStyles.globals}>
      <NavBar />
      <section className={styles.page_content}>
        <header className={styles.header}>
          <h1>Blog Posts</h1>
        </header>
        <div className={styles.button_container} onClick={revealArticles}>
          <Button label="Reveal All Blog Posts" />
        </div>
        <section
          ref={articleContanier}
          className={`${styles.articles} ${
            showArticles ? styles.reorder : styles.articles
          }`}>
          {allPostsData !== null &&
            Object.keys(allPostsData).map((post) => (
              <BlogListItem
                category={post}
                posts={allPostsData[post]}
                key={post}
                showArticles={showArticles}
              />
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
