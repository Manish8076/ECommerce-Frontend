import React from "react";
import { HomeCarouselData } from "./HomeCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeCarousel = () => {
  const item = HomeCarouselData.map((items) => 
    <div className=" w-full h-48 md:h-96 lg:h-[500px]">
      <img
        className=" cursor-pointer object-fill w-full h-full"
        role="presentation"
        src={items.image}
      />
    </div>
  );
  return (
    <div className=" w-full h-48 md:h-96 lg:h-[500px] ">
      <AliceCarousel
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        items={item}
        animationDuration={800}
      />
    </div>
  );
};

export default HomeCarousel;
