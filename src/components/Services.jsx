import React from "react";
import { hero_text, services_text } from "../constants";
import { blackstar } from "../utils";

const repeatSpace = (space = 20) => Array(space).fill("\u00A0").join("");
const Services = () => {
  return (
    <section className="px-10 smm:px-10 sm:px-5 sm:mt-10 h-screen sm:h-full pt-24" id="services">
      <header>
        <h1 className="sm:text-[1.3rem] text-[2.3rem] md:text-[1.7rem]">
          <span className="font-logo">H</span>ere’s what I can do for you
        </h1>
        <p className="sm:text-[12px] sm:max-w-[420px] text-[14px] md:text-[12px] max-w-[500px] leading-snug">
          {repeatSpace()}
          {services_text[0].subheader}
        </p>
      </header>
      <div className="grid sm:grid-cols-1 grid-cols-3 gap-10 sm:gap-14 mt-40 md:mt-20 sm:mt-20">
          <div className="lg:w-[280px] max-w-[430px] sm:max-w-none mx-auto">
            <h1 className="">Web Design</h1>
            <h2 className="text-[12px] h-[150px] md:h-[200px] flex mt-5">
              {services_text[1].text1}
            </h2>
          <div className="flex flex-col justify-end h-fit">
            <div className="border-b border-black p-2">
              <p className="text-[14px]">3D design and development</p>
            </div>
            <div className="border-b border-black p-2">
              <p className="text-[14px]">Responsive design </p>
            </div>
            <div className="border-b border-black p-2">
              <p className="text-[14px]">Wireframing</p>
            </div>
          </div>
          </div>

        <div className="">
          <div className="lg:w-[280px] max-w-[430px] sm:max-w-none mx-auto">
              <h1 className="">Web Development</h1>
              <h2 className="text-[12px] h-[150px] md:h-[200px] mt-5">
                {services_text[2].text2}
              </h2>
          <div className="flex flex-col justify-end h-fit">
            <div className="border-b border-black p-2">
              <p className="text-[14px]">Custom Coded</p>
            </div>
            <div className="border-b border-black p-2">
              <p className="text-[14px]">Micro animations</p>
            </div>
            <div className="border-b border-black p-2">
              <p className="text-[14px]">CMS integration</p>
            </div>
          </div>
          </div>
        </div>

        <div className="">
          <div className="lg:w-[280px] max-w-[430px] sm:max-w-none mx-auto">
            <h1 className="">SEO</h1>
            <h2 className="text-[12px] h-[150px] md:h-[200px] mt-5">
              {services_text[3].text3}
            </h2>
            <div className="flex flex-col justify-end h-fit">
              <div className="border-b border-black p-2">
                <p className="text-[14px]">On page optimization</p>
              </div>
              <div className="border-b border-black p-2">
                <p className="text-[14px]">Technical SEO</p>
              </div>
              <div className="border-b border-black p-2">
                <p className="text-[14px]">Wireframing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
