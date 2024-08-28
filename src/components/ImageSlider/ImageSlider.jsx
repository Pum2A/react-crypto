import React, { useState } from "react";

export default function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  const imagesPerSlide = 4;

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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {displayedImages.map((imageUrl, idx) => (
          <img
            key={idx}
            src={imageUrl}
            alt={`Logo ${imageIndex + idx + 1}`}
            style={{ width: "24%" }}
          />
        ))}
      </div>
      <div>
        <button onClick={showPrevImages}>-</button>
        <button onClick={showNextImages}>+</button>
      </div>
    </div>
  );
}
