import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./section-one-swiper.css";

//additional
import { customData } from "../../../../data/customData";


//assets
import { GoLocation } from "react-icons/go";


export default function SectionOneSwiper({ randomNumber }) {
  

  

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
        className="sectionOneSwiper"
      >
        { customData
          .filter((three) => three != customData[randomNumber])
          .map((slide, key) => (
            <SwiperSlide key={key} onClick={()=> console.log(slide)} >
              <p className="text-2xl">
                <GoLocation />
              </p>
              <div className="flex-grow flex flex-col items-start justify-center">
                <h6 className="text-sm">{slide.name}</h6>
                <p className="text-sm">Plan a trip</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
