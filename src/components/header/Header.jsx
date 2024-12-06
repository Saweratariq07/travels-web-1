'use client';
import React from 'react'; 
import Component from '../slider/Component';
import Slide from '../slide/Slide';
import Main from '../main/Main';
import HeroSection from '../hero/HeroSection';
import News from '../news/News';
import Scrol from '../scroll/Scrol';

function Header() {
  return (
    <div>
      {/* Component Section */}
      <div className="relative z-50"> {/* Ensure higher z-index for dropdown */}
        <Component />
      </div>

     

     
      <Scrol />
      <div className="sect2 relative w-full h-screen sm:h-auto sm:py-10 ">
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <img
            src="right.png"
            alt="Background 1"
            className="w-1/2 h-auto object-contain"
          />
          <img
            src="right.png"
            alt="Background 2"
            className="w-1/2 h-auto object-contain"
          />
        </div>
        <div className="relative z-10 flex justify-center items-center">
          <Slide />
        </div>
      </div>

      {/* Main Section */}
      <div className="sect1 relative w-full h-screen sm:h-auto sm:py-10 ">
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <img
            src="right.png"
            alt="Background 1"
            className="w-1/2 h-auto object-contain"
          />
          <img
            src="right.png"
            alt="Background 2"
            className="w-1/2 h-auto object-contain"
          />
        </div>
        <div className="relative z-10 justify-center items-center">
          <Main />
        </div>
      </div>

      <div className="sect3 relative w-full py-20">
        <HeroSection />
      </div>

      {/* News Section */}
      <News />
    </div>
  );
}

export default Header;
