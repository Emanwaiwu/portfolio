import React from "react";
import { smiling, happy } from "../utils";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <nav className="px-10 sm:px-3">
      <section className="h-screen relative">
        {" "}
        <div className="flex justify-between my-5">
          <div className="flex gap-2 items-center">
            <img src={happy} alt="" className="w-7 sm:w-5" />
            <div className="flex w-[70px] leading-3 text-[10px] sm:text-[8px] sm:w-[60px] sm:leading-none">
              <p>Open for work Hit me up :)</p>
            </div>
          </div>
          <h1 className="font-logo text-[20px] flex items-center">[Eman]</h1>
          <div className="w-[120px] h-[35px] sm:w-[100px] sm:h-[30px]"></div>
          <div className="fixed right-10 sm:right-3 top-5">
          <a href="https://calendly.com/eman-designs/15min-discovery" target="_blank" rel="noopener noreferrer">
            <button className="relative overflow-hidden rounded-[10px] bg-white w-[120px] h-[35px] sm:w-[100px] sm:h-[30px] group fadein">
              <span className="absolute top-full h-[200%] w-[150%] -translate-x-1/2 bg-blue rounded-t-full transition-all duration-700 ease-out group-hover:top-[-10px]" />
              <p className="relative font-logo text-blue group-hover:text-white transition-all duration-700 sm:text-[12px] text-[14px] z-10">
                Book a call
              </p>
            </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center h-[80%] items-center">
          <Hero />
          <div className="font-logo space-x-1 bg-white px-2 rounded-[15px] py-[5px] flex items-center text-blue text-[14px] sm:text-[11px] fixed bottom-10 fadein">
            <a
              href="#services"
              className="hover:bg-blue hover:text-white rounded-[10px] px-3 py-[2px] duration-[400ms] transition-all"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:bg-blue hover:text-white rounded-[10px] px-3 py-[2px] duration-[400ms] transition-all flex justify-center"
            >
              Work
            </a>
            <a
              href="#about"
              className="hover:bg-blue hover:text-white rounded-[10px] px-3 py-[2px] duration-[400ms] transition-all"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:bg-blue hover:text-white rounded-[10px] px-3 py-[2px] duration-[400ms] transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
