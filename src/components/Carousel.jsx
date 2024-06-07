import { useEffect, useRef, useState } from 'react';
import oneplus from '../assets/One-Plus.png';
import nothing from '../assets/nothing.png';
import motorola from '../assets/motorola.png';
import lava from '../assets/lava.png';
import itel from '../assets/itel.png';
import nokia from '../assets/Nokia.png';
import vivo from '../assets/vivo.png';
import apple from '../assets/apple.png';
import dell from '../assets/dell.png';
import lenovo from '../assets/lenovo.png';
import xiaomi from '../assets/xiaomi.png';
import lg from '../assets/LG.png';
import portronics from '../assets/portronics.png';
import noise from '../assets/Noice.png';
import { MiniSlide } from '../data/slideimage';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const images = [oneplus, nothing, motorola, lava, itel, nokia, vivo, apple, dell, lenovo, xiaomi, lg, portronics, noise, oneplus, nothing, motorola, lava, itel, nokia];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    const track = carouselRef.current;
    const slideWidth = track.children[0].clientWidth;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }, [currentIndex]);

  return (
    <div className="flex relative justify-center items-center w-full bg-gray-100 py-10 overflow-hidden">
      <div className="relative w-[99vw] bg-slate-100 rounded-lg shadow-lg overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" ref={carouselRef}>
  {images.map((image, index) => (
    <div className="min-w-[150px] mx-4 flex justify-center items-center" key={index}>
      <img src={image} alt="Logo" className="max-w-24 h-24 object-contain p-2 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out rounded-full" />
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Carousel;
