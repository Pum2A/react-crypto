import React, { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css"; // Import the CSS Module
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function ImageSlider({ imageUrls, imageNames }) {
  const [imageIndex, setImageIndex] = useState(0);

  const imagesPerSlide =
    window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 4 : 2;
  const autoClickInterval = 5000;

  function showNextImages() {
    setImageIndex((index) => {
      if (index + imagesPerSlide >= imageUrls.length) return 0;
      return index + imagesPerSlide;
    });
  }

  function showPrevImages() {
    setImageIndex((index) => {
      if (index - imagesPerSlide < 0) return imageUrls.length - imagesPerSlide;
      return index - imagesPerSlide;
    });
  }

  const displayedImages = imageUrls.slice(
    imageIndex,
    imageIndex + imagesPerSlide
  );
  const displayedNames = imageNames.slice(
    imageIndex,
    imageIndex + imagesPerSlide
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImages();
    }, autoClickInterval);

    return () => clearInterval(intervalId);
  }, [imageIndex]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageWrapper}>
        {displayedImages.map((imageUrl, idx) => (
          <div key={idx} className={styles.imageItem}>
            <img
              src={imageUrl}
              alt={`Logo ${imageIndex + idx + 1}`}
              className={styles.image}
            />
            <div className={styles.imageName}>{displayedNames[idx]}</div>
          </div>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <ArrowBackIos className={styles.sliderBtn} onClick={showPrevImages} />
        <ArrowForwardIos
          className={styles.sliderBtn}
          onClick={showNextImages}
        />
      </div>
    </div>
  );
}
