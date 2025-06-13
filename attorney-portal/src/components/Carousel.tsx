"use client";
import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
  images: string[]; // Array of image URLs
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <div className="relative w-full max-w-lg mx-auto ">
      <div className="overflow-hidden rounded-lg ">
        <Image
          width={2000}
          height={2000}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full md:h-96 h-52 object-fill transition-opacity duration-500 ease-in-out opacity-100 transform"
          key={currentIndex} // Ensure the transition applies when the image changes
        />
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        aria-label="Previous"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        aria-label="Next"
      >
        &#8250;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
