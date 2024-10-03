import React, { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
const images = [
  "/assets/1.jpg",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/2.png",

  // Add more images as needed
];
function Announce() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    console.log("Current slide index:", activeIndex);
  }, [activeIndex]);

  return (
    <div>
      <Carousel
        withIndicators
        height={300}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="center"
        slidesToScroll={3}
        onSlideChange={(current) => setActiveIndex(current)}
      >
        {images.map((src, index) => (
          <Carousel.Slide
            key={index}
            className={activeIndex === index ? "zoom" : ""}
          >
            <img
              src={src}
              className="w-full object-contain"
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default Announce;
