import React, { useState, useEffect } from "react";
import styles from "../../styles/globals.module.scss";
import axios from "axios";

const Hero = () => {
  const [images, setImages] = useState(null);
  const [imageInterval, setImageInterval] = useState(0);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get("/data/images.json");
      setImages(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (images) {
        setImageInterval((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 800);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <main className={styles.hero}>
      <div className={styles.image_container}>
        {images && (
          <img
            src={`${images[imageInterval].imageSrc}`}
            alt={`Project ${images[imageInterval].id}`}
            className={styles.images}
          />
        )}
      </div>
    </main>
  );
};

export default Hero;
