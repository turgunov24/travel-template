import React, { useState } from "react";
import "./section-three.css";
//additional
import { customData } from "../../data/customData";

import Fade from "react-reveal/Fade";

function SectionThree() {
  const [randomNumber, setrandomNumber] = useState(
    Math.floor(Math.random() * 4)
  );

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center gap-5 py-5">
      <h5>About Us</h5>
      <h3 className="font-semibold text-2xl">Our Philosophy</h3>
      <div className="w-4/5 flex flex-col items-center gap-10 xl:flex-row ">
        <iframe
          src={ customData[randomNumber].video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-56 sm:h-72 md:h-[460px] lg:h-[560px] xl:h-[350px]"
        ></iframe>
        <div className="flex flex-col gap-5 w-full h-full">
          <div className="flex gap-4">
            <p>01</p>
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="text-lg font-bold sm:text-xl">
                <Fade cascade>Sustainable</Fade>
              </h3>
              <p className="text-sm md:text-[16px]">
                <Fade right cascade delay={1000}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam
                  eu scelerisque quam, ac tristique dolor. Aliquam nulla risus,
                </Fade>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <p>02</p>
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="text-lg font-bold sm:text-xl">
                <Fade cascade>Fair & Share</Fade>
              </h3>
              <p className="text-sm md:text-[16px]">
                <Fade right cascade delay={1000}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam
                  eu scelerisque quam,
                </Fade>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <p>03</p>
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="text-lg font-bold sm:text-xl">
                <Fade cascade>Experience</Fade>
              </h3>
              <p className="text-sm md:text-[16px]">
                <Fade right cascade delay={1000}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam
                  eu scelerisque quam, ac tristique
                </Fade>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
