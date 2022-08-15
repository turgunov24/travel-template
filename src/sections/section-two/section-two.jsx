import React from "react";
import SectionTwoSwiper from "./section-two-additional/section-two-swiper/section-two-swiper";
import "./section-two.css";

function SectionTwo() {
  return (
    <section className="w-full h-screen flex flex-col items-center py-16 gap-5">
        <h5 className="text-sm">HUNDREDS OF</h5>
        <h3 className="font-semibold text-2xl">Activities for Everyoune</h3>
        <SectionTwoSwiper />
    </section>
  );
}

export default SectionTwo;
