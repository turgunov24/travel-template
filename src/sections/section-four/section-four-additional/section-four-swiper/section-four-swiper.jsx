import React, { useRef, useState, createContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./section-four-swiper.css";

//additional
import { customData } from "../../../../data/customData";

export default function SectionFourSwiper({ isFilteredToggle, country }) {
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
        }}
        className="sectionFourSwiper w-full xs:w-11/12 sm:w-5/6 md:w-10/12"
      >
        {isFilteredToggle
          ? customData
              .filter((item) => item.name == country)
              .map((selectedCountry) => (
                <SwiperSlide>
                  <img
                    src={selectedCountry.full}
                    alt={selectedCountry.name}
                    className="w-full h-64 object-cover sm:h-80 md:h-56"
                  />
                  <h5 className="font-bold text-lg mt-1">{selectedCountry.name}</h5>
                  <p>
                    {selectedCountry.hotels.map((item) => item.price).slice(0, 1)}
                  </p>
                </SwiperSlide>
              ))
          : customData.map((suggestion) => (
              <SwiperSlide>
                <img
                  src={suggestion.full}
                  alt={suggestion.name}
                  className="w-full h-64 object-cover sm:h-80 md:h-56"
                />
                <h5 className="font-bold text-lg mt-1">{suggestion.name}</h5>
                <p>{suggestion.hotels.map((item) => item.price).slice(0, 1)}</p>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}
