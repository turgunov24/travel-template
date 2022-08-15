import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./section-two-swiper.css";

//additional
import { customData } from "../../../../data/customData";
import Fade from "react-reveal/Fade";
//assets


export default function SectionTwoSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="sectionTwoSwiper w-4/5"
      >
        {customData.map((slide, key) => (
          <SwiperSlide key={key}>
            <img src={slide.full} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col ">
              <h4 className="font-semibold tracking-wide text-2xl md:text-lg"><Fade right cascade>{slide.name}</Fade></h4>
              <p className="flex gap-2">
                {customData.map((item) => item.name == slide.name)
                  .length / customData.length}
                <p>activities</p>
              </p>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
