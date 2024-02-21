import React from "react";
import styles from "../../styles/globals.module.scss";

const Hero = ({ image }) => {
  return (
    <main>
      <div>
        <p>Hello World</p>
        {image.map((data) => (
          <img key={data.id} src={`${data.src}`} alt={`Project ${data.id}`} />
        ))}
      </div>
    </main>
  );
};

export default Hero;
