import React, { useRef, useEffect } from "react";
import { about_img, blackstar, hero_img, man } from "../utils";
import { hero_text } from "../constants";
import { fadeIn } from "../utils/animations";

const Hero = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    fadeIn(titleRef.current);
  }, []);
  return (
    <section className="sm:mt-20">
      <header className="inset-0 flex items-center justify-center z-0">
        <div className="text-center overflow-hidden">
          <p className="font-sub tracking-[-0.7px] text-[15px] xl:text-[18px] lg:text-[18px]">
            Hello I'm
          </p>
          <h1 className=" text-[2.3rem] md:text-[1.7rem] md:max-w-[550px] md:leading-[32px] max-w-[700px] sm:max-w-[380px] sm:w-auto sm:text-[1.3rem] leading-[42px] sm:leading-[24px] -tracking-[0.015em]">
            <span className="font-logo">E</span>mmanuel{" "}
            <span className="font-logo">N</span>waiwu a creative{" "}
            <span className="font-sub">developer for websites</span> and digital
            experiences.
          </h1>
        </div>
      </header>
      <div className="grid sm:grid-cols-1 grid-cols-3 mt-14 gap-2">
        <div className="flex-col flex items-center justify-center gap-1 sm:order-1">
          <img src={blackstar} alt="" className="sm:w-[12px] w-[14px]" />
          <p className="sm:text-[10px] text-center sm:w-[230px] md:w-[202px] md:text-[12px] text-[14px] max-w-[350px] leading-snug">
            {hero_text[0].text1}
          </p>
        </div>
        <div className="flex justify-center sm:my-8 sm:order-3">
          <img
            src={man}
            alt=""
            className="rounded-[10px] sm:w-[180px] w-[250px]"
          />
        </div>
        <div className="flex-col flex items-center justify-center sm:mt-4 gap-1 sm:order-2">
          <img src={blackstar} alt="" className="sm:w-[12px] w-[14px]" />
          <p className="sm:text-[10px] text-center sm:w-[150px] md:w-[202px] md:text-[12px] w-[240px] text-[14px] md:h-[72px] lg:h-[84px] leading-snug">
            {hero_text[1].text2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
