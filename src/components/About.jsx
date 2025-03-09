import React from "react";
import { about_text } from "../constants";
import { about_img, hero_img } from "../utils";

const About = () => {
  return (
    <section
      className="px-10 mt-80 sm:px-5 smm:px-10 smm:mt-32 sm:mt-0 h-[80vh] pt-24"
      id="about"
    >
      <header>
        <h1 className="sm:text-[1.3rem] text-[2.3rem] md:text-[1.7rem]">
          <span className="font-logo">G</span>et to know me a little..
        </h1>
      </header>
      <div className="flex smm:flex-row sm:flex-col gap-40 xl:gap-60 md:gap-20 smm:gap-8 sm:gap-2 sm:mt-10 mt-28 justify-center">
        <div className="max-w-[300px] smm:w-[250px] sm:mx-auto smm:mx-0">
          <p className="text-balan md:text-[12px] text-[14px] sm:text-[12px]">
            I've been driven by a passion for design and a desire to make a
            positive impact since I was young. Today, I help businesses thrive
            by curating exceptional designs that bring value to others. <br />{" "}
            <br />
            Outside coding, I enjoy researching random topics, photography,
            reading, and sports – especially soccer, and I'm a big Chelsea fan.{" "}
          </p>
        </div>
        <div className="sm:mx-auto smm:mx-0 sm:mt-10 smm:mt-0">
          <img
            src={hero_img}
            alt=""
            className="w-[201px] h-[300px] md:h-[230px] object-cover rounded-[10px] sm:w-[150px] sm:h-[170px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
