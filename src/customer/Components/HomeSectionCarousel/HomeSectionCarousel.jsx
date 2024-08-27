
import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/mens_kurta";
import { HomeCarouselData } from "../Carousel/HomeCarouselData";

const HomeSectionCarousel = ({data,sectionName}) => {
 const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  // const slidePrev = () =>  setActiveIndex(activeIndex-1);
  // const slideNext = () => setActiveIndex(activeIndex+1);

  const slidePrev = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  const slideNext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  console.log(syncActiveIndex);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className=" border ">
      <h2 className=" text-2xl font-extrabold text-gray-800"> {sectionName} </h2>
      <div className=" relative p-5">
        <AliceCarousel
        ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}

        />
        {activeIndex !== items.length - 5 && 
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0",
              transform: "translateX(50%) rotate(90deg)",
              backgroundColor: "white",
            }}
            aria-label="next"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        }

        {activeIndex !== 0 && 
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0",
              transform: "translateX(-50%) rotate(-90deg)",
              backgroundColor: "white",
            }}
            aria-label="next"
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        }
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
