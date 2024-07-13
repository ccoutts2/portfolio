import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData() {
  const fileNames = await fs.readdir(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFile(fullPath, "utf-8");

    const matterResult = matter(fileContents);
    console.log(matterResult);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export const getCategorisedPosts = async () => {
  const sortedPosts = await getSortedPostsData();
  const categorisedPosts = {};

  sortedPosts.forEach((post) => {
    if (!categorisedPosts[post.category]) {
      categorisedPosts[post.category] = [];
    }
    categorisedPosts[post.category].push(post);
  });

  return categorisedPosts;
};

export const getPostsData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const fileContents = await fs.readFile(fullPath, "utf-8");

  const matterResult = matter(fileContents);
  const processContent = await remark().use(html).process(matterResult.content);

  const contentHtml = processContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    category: matterResult.data.category,
    date: matterResult.data.date,
  };
};
