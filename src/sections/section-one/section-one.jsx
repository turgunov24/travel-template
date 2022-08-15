import React, { useState, useRef } from "react";
import "./section-one.css";

//additional
import { customData } from "../../data/customData";
import NavbarTop from "../../components/navbar/navbar-top/navbar-top"
//animation
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

//assets
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { CgArrowLongDown } from "react-icons/cg";
import SectionOneSwiper from "./section-one-additional/section-one-swiper/section-one-swiper";

function SectionOne() {
  const [randomNumber, setrandomNumber] = useState(
    Math.floor(Math.random() * 4)
  );
  const [randomBgData, setrandomBgData] = useState(
    customData[randomNumber]
  );
  const indicator = useRef(null);
  const pagination = useRef(null);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <NavbarTop />
      <img src={randomBgData.full} className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-5 md:px-10">
        <div className="relative w-10 h-full text-white text-sm flex flex-col items-center justify-center gap-5">
          <span className="cursor-pointer hover:text-blue-600 duration-200">
            <FaFacebookF />
          </span>
          <span className="cursor-pointer hover:text-blue-400 duration-200">
            <FaTwitter />
          </span>
          <span className="cursor-pointer hover:text-pink-300 duration-200">
            <FaInstagram />
          </span>
          <div className="absolute left-0 bottom-10 flex flex-col items-start justify-between w-full gap-3 cursor-pointer">
            <h6 className="flex flex-col items-center gap-1 w-full text-[9px]">
              <span className="w-full rotate-90">SEE</span>{" "}
              <span className="w-full rotate-90">MORE</span>
            </h6>
            <motion.span
              animate={{
                opacity: [0.8, 0.5, 0.8],
                y: [0, 4, 0, 4, 0],
                transition: {
                  delay: 1,
                  duration: 2,
                  repeat: "Infinity",
                },
              }}
              className="text-4xl w-full flex justify-center"
            >
              <CgArrowLongDown />
            </motion.span>
          </div>
        </div>
        <div
          id="section-one-text-div"
          className="relative flex-grow h-full flex flex-col justify-center items-center"
        >
          <Fade cascade delay={1500} duration={1000}>
            EXPLORE
          </Fade>
          <Fade
            bottom
            cascade
            delay={1500}
            duration={1000}
            className="font-bold tracking-widest text-6xl sm:text-8xl md:text-9xl"
          >
            {randomBgData.name}
          </Fade>
          <SectionOneSwiper randomNumber = {randomNumber}/>
        </div>
        <div className="relative w-10 h-full flex flex-col justify-center items-end">
          <div className="relative flex flex-col justify-center items-end w-1 h-56 rounded-md">
            <div
              onClick={() => {
                indicator.current.style.top = "0px";
                indicator.current.style.transitionDuration = "0.5s";
                pagination.current.textContent = "01";
              }}
              className="w-full h-1/4 bg-slate-600"
            ></div>
            <div
              onClick={() => {
                indicator.current.style.top = "56px";
                indicator.current.style.transitionDuration = "0.5s";
                pagination.current.textContent = "02";
              }}
              className="w-full h-1/4 bg-slate-600"
            ></div>
            <div
              onClick={() => {
                indicator.current.style.top = "112px";
                indicator.current.style.transitionDuration = "0.5s";
                pagination.current.textContent = "03";
              }}
              className="w-full h-1/4 bg-slate-600"
            ></div>
            <div
              onClick={() => {
                indicator.current.style.top = "178px";
                indicator.current.style.transitionDuration = "0.5s";
                pagination.current.textContent = "04";
              }}
              className="w-full h-1/4 bg-slate-600"
            ></div>
            <div
              ref={indicator}
              className="absolute top-0 w-full h-1/4 bg-white rounded-md"
            ></div>
          </div>
          <div className="absolute bottom-10 right-0 w-full flex items-end">
            <h6 ref={pagination} className="text-sm">
              01
            </h6>
            <p className="text-[10px] text-gray-400">/04</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
