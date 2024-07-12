import NavBar from "@/components/NavBar/NavBar";
import { getPostsData } from "../../../lib/posts";
import globalStyles from "../../styles/globals.module.scss";
import styles from "./PostId.module.scss";
import Footer from "@/components/Footer/Footer";

const Post = ({ postData }) => {
  return (
    <section className={globalStyles.globals}>
      <NavBar />
      <section className={styles.main}>
        <h1>{postData.title}</h1>
        <p>{postData.category}</p>
        <p>{postData.date}</p>
        <article
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </section>
      <Footer />
    </section>
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      "/posts/blog-post-1",
      "/posts/pre-rendering",
      "/posts/ssg-ssr",
      "/posts/test-blog",
    ],
  };
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const postData = await getPostsData(postId);

  console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
