import React, { useState } from "react";
import "./section-five.css";

//assets
import microsoftImage from "../../assets/images/section-five-microsoft-logo.png";
import magentoImage from "../../assets/images/section-five-magento-logo.png";
import lakeHouseImage from "../../assets/images/section-five-lakeHouse-logo.png";
import mideaImage from "../../assets/images/section-five-midea-logo.png";

//additional
import { customData } from "../../data/customData"






function SectionFive() {



    const [randomBgNumber, setrandomBgNumber] = useState(Math.floor(Math.random()*4));



  return (
    <section className="w-full min-h-screen py-20 px-10 flex flex-col items-center gap-5">
      <h5 className="text-sm">BEAUTIES</h5>
      <h3 className="font-semibold text-2xl text-center">
        Hotels and Appartements
      </h3>
      <div
        className="p-5 flex flex-col items-center gap-5 
      w-full md:flex-row justify-around"
      >
        <img
          className="w-32 xs:w-40 sm:w-48 md:w-32 lg:w-36"
          src={microsoftImage}
        />
        <img
          className="w-32 xs:w-40 sm:w-48 md:w-32 lg:w-36"
          src={magentoImage}
        />
        <img
          className="w-32 xs:w-40 sm:w-48 md:w-32 lg:w-36"
          src={lakeHouseImage}
        />
        <img
          className="w-32 xs:w-40 sm:w-48 md:w-32 lg:w-36"
          src={mideaImage}
        />
      </div>
      <div className="border w-full h-40 rounded-md overflow-hidden">
        <img src={customData[randomBgNumber].full} className="w-full h-full object-cover"/>
      </div>
    </section>
  );
}

export default SectionFive;
