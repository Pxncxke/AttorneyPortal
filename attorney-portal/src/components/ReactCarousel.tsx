"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

type ReactCarouselProps = {
  images: { src: string; alt?: string; legend?: string }[];
};

const ReactCarousel: React.FC<ReactCarouselProps> = ({ images }) => (
  <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
  >
    {images.map((img, idx) => (
      <div key={idx}>
        <Image
          src={img.src}
          alt={img.alt || `Carousel image ${idx + 1}`}
          width={2000}
          height={2000}
          className="w-full h-96 object-cover  transition-opacity duration-500 ease-in-out rounded-lg"
        />
      </div>
    ))}
  </Carousel>
);

export default ReactCarousel;
