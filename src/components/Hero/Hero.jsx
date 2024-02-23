import React, { useState, useEffect } from "react";
import styles from "../../styles/globals.module.scss";
import Image from "next/image";
import axios from "axios";

const Hero = ({ images }) => {
  // const [images, setImages] = useState(null);

  // const fetchImages = async () => {
  //   try {
  //     const { data } = await axios.get("/data/images.json");
  //     setImages(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchImages();
  // }, []);
  console.log(images);
  return (
    <main>
      <div>
        {images &&
          images.map((image) => (
            <img
              key={image.id}
              src={`${image.imageSrc}`}
              alt={`Project ${image.id}`}
              width={500}
              height={500}
              className={styles.images}
            />
          ))}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  try {
    const { data } = await axios.get("/public/data/images.json");
    console.log(data);
    return {
      props: {
        images: data,
      },
    };
  } catch (error) {
    console.error("Error fetching images:", error.message);
    return {
      props: {
        images: [],
      },
    };
  }
}

export default Hero;
