import React from 'react';
import img1 from '../assets/hero1.jpg'; 
import img2 from '../assets/hero2.jpg'; 
import img3 from '../assets/hero3.jpg'; 
import "../../public/scroll.css"

const Hero = () => {
  const scrollContainerRef = React.useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -scrollContainerRef.current.clientWidth : scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className=" py-2">
      {/* <h1 className="text-white text-4xl font-bold text-center mb-6">Our Amazing Gallery</h1> */}
      <div className="relative">
      <div
  ref={scrollContainerRef}
  className="flex space-x-0 p-4 overflow-x-auto scroll-smooth w-[calc(100%)] scrollbar-hidden"
  style={{ scrollSnapType: 'x mandatory' }}
>
          <img
            src={img1}
            alt="Hero Image 1"
            className="flex-shrink-0 w-full h-80 object-cover rounded-lg shadow-lg"
            style={{ scrollSnapAlign: 'center' }}
          />
          <img
            src={img2}
            alt="Hero Image 2"
            className="flex-shrink-0 w-full h-80 object-cover rounded-lg shadow-lg"
            style={{ scrollSnapAlign: 'center' }}
          />
          <img
            src={img3}
            alt="Hero Image 3"
            className="flex-shrink-0 w-full h-80 object-cover rounded-lg shadow-lg"
            style={{ scrollSnapAlign: 'center' }}
          />
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={() => handleScroll('left')}
        >
          &#9664;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          onClick={() => handleScroll('right')}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Hero;
