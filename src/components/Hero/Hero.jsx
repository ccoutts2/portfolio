import React from "react";
import styles from "../../styles/globals.module.scss";
import Image from "next/image";
import axios from "axios";

const Hero = ({ images }) => {
  return (
    <main>
      <div>
        <p>Hello World</p>
        <div>
          {images &&
            images.map((image) => (
              <Image
                key={image.id}
                src={`${image.src}`}
                alt={`Project ${image.id}`}
                width={200}
                height={200}
                priority // Add this line
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  try {
    const { data } = await axios.get("/data/images.json");
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
