"use client";

import { useEffect, useRef, useState } from "react";

import { Image } from "./types";

type Props = {
  images: Image[];
};

const PhotoCarrousel = ({ images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const startXRef = useRef<number | null>(null);

  useEffect(() => {
    const playImagesAutomatically = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000);

    return () => clearInterval(playImagesAutomatically);
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startXRef.current) {
      return;
    }

    const deltaX = e.touches[0].clientX - startXRef.current;

    if (deltaX > 50) {
      handlePrev();
      startXRef.current = null;
    } else if (deltaX < -50) {
      handleNext();
      startXRef.current = null;
    }
  };

  const handlePrev = () =>
    setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));

  const handleNext = () =>
    setCurrentImageIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));

  return (
    <div className="relative max-w-[70rem] m-auto">
      <div className="aspect-[4/2]" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        {images.map((image, index) => (
          <div
            className={`absolute inset-0 transition-[200ms_opacity_ease-in-out] delay-200 ${currentImageIndex === index ? "opacity-100 delay-0" : "opacity-0"}`}
            key={image?.id}>
            <img
              className="object-cover object-center w-full h-full rounded-lg shadow-[0_1.5rem_3rem_-0.75rem_hsla(0,_0%,_0%,_0.25)]"
              src={image?.src}
              alt={image?.alt}
              id={image?.id}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-x-4 absolute bottom-5 left-2/4 translate-x-[-50%] z-[1]">
        {images.map((image, index) => (
          <div
            className={`w-2 sm:w-3 h-2 sm:h-3 cursor-pointer rounded-[50%] bg-white transition-[opacity_ease_250ms] hover:opacity-100 ${currentImageIndex === index ? "opacity-100" : "opacity-50"}`}
            onClick={() => setCurrentImageIndex(index)}
            key={image?.id}
          />
        ))}
      </div>
    </div>
  );
};

export { PhotoCarrousel };
