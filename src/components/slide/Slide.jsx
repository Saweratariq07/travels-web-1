import React, { useState } from "react";
import { IoPlayCircle } from "react-icons/io5";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: "1st.png", alt: "Slide 1" },
    { src: "1t.png", alt: "Slide 2" },
    { src: "th.png", alt: "Slide 3" },
    { src: "4.png", alt: "Slide 4" },
    { src: "5.png", alt: "Slide 5" },
    { src: "6.png", alt: "Slide 6" },
  ];

  const totalSlides = slides.length;

  const scrollCarousel = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + totalSlides) % totalSlides);
  };

  return (
    <div className="flex items-center  justify-center min-h-screen bg-transparent">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="overflow-hidden relative rounded-lg h-[300px] sm:h-[400px] lg:h-auto">
          <h1 className="font-bold text-2xl text-orange-500 mb-4">
            Colinda vd Maagdenberg's favorite travel stories
          </h1>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                className="min-w-full sm:min-w-[100%] lg:min-w-[33.33%] text-center"
                key={index}
              >
                <div className="p-4 bg-transparent shadow-lg rounded-lg h-full">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-[180px] sm:h-[250px] lg:h-auto object-cover mb-4 rounded-md"
                    style={{ maxHeight: "300px" }}
                  />
                
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
          onClick={() => scrollCarousel(-1)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
          onClick={() => scrollCarousel(1)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};



export default Slide;
