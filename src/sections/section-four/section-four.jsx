import React, { useContext, useRef, useState } from "react";
import { customData } from "../../data/customData";
import SectionFourSwiper from "./section-four-additional/section-four-swiper/section-four-swiper";
import "./section-four.css";
import { contex } from "./section-four-additional/section-four-swiper/section-four-swiper";

function SectionFour() {
  const [isFiltered, setisFiltered] = useState(false);
  const [country, setCountry] = useState(null);
  const date = new Date();
  function formSubmit(e) {
    e.preventDefault();
    setisFiltered(true)
  }
  function selectChange(i) {
    setCountry(i.target.value);
  }
  return (
    <section
      id="section-four"
      className="w-full min-h-[70vh] flex flex-col items-center gap-5 p-5"
    >
      <h5 className="text-sm">BEAUTIES</h5>
      <h3 className="font-semibold text-2xl">Hotels and Appartements</h3>
      <SectionFourSwiper isFilteredToggle={isFiltered} country = {country}/>
      <form
        onSubmit={formSubmit}
        className="flex flex-col items-center gap-3 w-full xs:w-11/12 sm:w-5/6 md:gap-0 md:w-10/12 md:flex-row justify-between md:items-end"
      >
        <div className="flex flex-col gap-1 w-3/5 sm:w-2/5 md:w-40 lg:w-48 xl:w-56">
          <label htmlFor="date">
            <p className="text-[10px]">Date</p>
          </label>
          <select name="date" id="date" className="w-full">
            <option>
              <p>{date.toLocaleDateString()}</p>
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-1 w-3/5 sm:w-2/5 md:w-40 lg:w-48 xl:w-56">
          <label htmlFor="location">
            <p className="text-[10px]">Location</p>
          </label>
          <select
            onChange={selectChange}
            name="location"
            id="location"
            className="w-full"
          >
            {customData.map((location) => (
              <option>{location.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1 w-3/5 sm:w-2/5 md:w-44">
          <label htmlFor="place">
            <p className="text-[10px]">Place</p>
          </label>
          <select name="place" id="place" className="w-full">
            {customData.map((place) => (
              <option value={place.name}>{place.name}</option>
            ))}
          </select>
        </div>
        <button
          id="section-four-submit-button"
          className="bg-stone-800 text-white w-3/5 sm:w-2/5 md:w-40 lg:w-48 xl:w-56 py-[14px] rounded-md mt-5 md:mt-0"
        >
          SEARCH
        </button>
      </form>
    </section>
  );
}

export default SectionFour;
