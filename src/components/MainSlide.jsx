import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../data/slideimage';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MainSlide = () => {
  return (
    <div className="w-full">
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}  // Enable automatic sliding
        autoPlaySpeed={3000} 
      >
        {bannerData.map((data) => (
          <div key={data.id} className="w-full">
            <img src={data.url} alt="banner" className="w-full object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlide;
