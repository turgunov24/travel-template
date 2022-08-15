import React, { useEffect, useState,useRef } from "react";
import "./navbar-top.css";

//assets
import navbarLogo from "../../../assets/images/navbar-logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

//additional
import { navLinks } from "../navbar-additional/navlinks";
import { motion } from "framer-motion";

//router
import { Link } from "react-router-dom";


function NavbarTop() {

//   useEffect(() => {
//     window.addEventListener("scroll",()=>{
//       if (scrollY > 100) {
//         setnavbarBg(true)
//     }
//     else{
//         setnavbarBg(false)
//     }
//     setnavbarBg ? (
//         navbarBgColor.current.style.backgroundColor = "#fff"
//         navbarBgColor.current.style.color = "#000"
//     ) :
//     navbarBgColor.current.style.backgroundColor = "transparent"
// })
//   }, []);


//   const navbarBgColor = useRef(null)
//   const [navbarBg, setnavbarBg] = useState(false);



  const [navbarToggle, setnavbarToggle] = useState(false);
  return (
    <nav
      id="navbar"
      className={
        navbarToggle
          ? "fixed z-50 w-full flex items-center justify-between py-3 px-5 shadow-lg bg-white md:py-5 md:px-10 md:bg-transparent"
          : "fixed z-50 w-full flex items-center justify-between py-3 px-5 shadow-lg bg-transparent md:py-5 md:px-10 md:bg-transparent"
         
      }
    >
      <div className="flex items-center gap-2">
        <img width={40} height={40} src={navbarLogo} alt="navbar-logo" />
        <h4
          className={
            navbarToggle
              ? "text-[14px] font-semibold text-black"
              : "text-[14px] font-semibold text-white"
          }
        >
          TRAVELx
        </h4>
      </div>
      <ul
        id="nav"
        className={
          navbarToggle
            ? "absolute top-[100%] left-1/2  -translate-x-1/2 duration-200 flex flex-col items-center w-full bg-white shadow-2xl shadow-zinc-500 md:flex-row md:top-1/2 md:-translate-y-1/2 md:w-max md:gap-10 md:bg-transparent md:shadow-none"
            : "absolute top-0 -translate-y-full left-1/2 -translate-x-1/2 duration-200 flex flex-col items-center w-full bg-white md:flex-row md:top-1/2 md:-translate-y-1/2 md:w-max md:gap-10 md:bg-transparent"
        }
      >
        {navLinks &&
          navLinks.slice(0, 4).map((navLink, key) => (
            <li
              id="navlink"
              key={key}
              className="text-sm text-center text-black w-full py-3 md:text-white"
            >
              <span>{navLink.name}</span>
            </li>
          ))}
        <li
          id="navlink"
          className="text-sm text-center text-black w-full py-3 md:hidden"
        >
          <span>Profile</span>
        </li>
      </ul>
      <button
        className={
          navbarToggle
            ? "text-3xl text-black md:hidden"
            : "text-3xl text-white md:hidden"
        }
        onClick={() => setnavbarToggle(!navbarToggle)}
      >
        {navbarToggle ? <MdClose /> : <BiMenuAltRight />}
      </button>
      <button className="hidden md:inline text-2xl text-white">
        <AiOutlineUser />
      </button>
    </nav>
  );
}

export default NavbarTop;
