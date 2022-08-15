import React from "react";
import "./section-six.css";

//assets
import logoImage from "../../assets/images/navbar-logo.png";

//additional
import { navLinks } from "../../components/navbar/navbar-additional/navlinks";

function SectionSix() {
  return (
    <section className="border border-indigo-700 flex flex-col items-center gap-5 w-full min-h-screen bg-[#F4F4F4]">
      <img
        src={logoImage}
        className="bg-black rounded-full border-3 border-black"
      />
      <h3 className="font-bold">TRAVELx</h3>
      <ul>
        {navLinks.filter((item,index) => )}
      </ul>
    </section>
  );
}

export default SectionSix;
