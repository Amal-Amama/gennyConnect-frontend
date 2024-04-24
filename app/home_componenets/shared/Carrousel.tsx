"use client";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayInterval, setAutoplayInterval] =
    useState<NodeJS.Timeout | null>(null);

  const images = [
    "/carrousel1.png",
    "/one_technician.jpeg",
    "/technicians.jpeg",
    "/worried_doctor.jpeg",
    "/health_concept.jpeg",
    "/medical_equi.jpeg",
  ];

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      setAutoplayInterval(interval);
    } else {
      if (autoplayInterval !== null) {
        clearInterval(autoplayInterval);
        setAutoplayInterval(null);
      }
    }
    return () => {
      if (autoplayInterval !== null) {
        clearInterval(autoplayInterval);
      }
    };
  }, [autoplay, autoplayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    if (autoplay) {
      setAutoplay(false);
    }
  };

  return (
    <div
      id="default-carousel"
      className="relative  mt-4 ml-8 mr-8 "
      data-carousel="slide"
      style={{ width: "96%", height: "475px" }}
    >
      <div className="relative h-full overflow-hidden rounded-lg ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? "" : "hidden"
            } duration-700 ease-in-out `}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-fill bg-slate-600"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-300"
            }`}
            aria-current={currentSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      ></button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      ></button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => setAutoplay((prevState) => !prevState)}
      ></button>
    </div>
  );
};

export default Carousel;
