import React from "react";
import { projects_text } from "../constants";
import { proj, proj2 } from "../utils";

const repeatSpace = (space = 20) => Array(space).fill("\u00A0").join("");
const Portfolio = () => {
  return (
    <section
      className="px-10 smm:px-10 sm:px-5 sm:mt-24 h-full pt-24"
      id="portfolio"
    >
      <div className="h-fit">
        <div className="sticky sm:static top-10">
          <h1 className="sm:text-[1.3rem] text-[2.3rem] md:text-[1.7rem]">
            <span className="font-logo">S</span>ome of my best work yet!
          </h1>
          <p className="sm:text-[12px] sm:max-w-[420px] text-[14px] md:text-[12px] max-w-[500px] leading-snug">
            {repeatSpace()}
            {projects_text[0].subheader}
          </p>
        </div>
        <div className="flex justify-end sm:justify-center mt-40 sm:mt-24 gap-[300px]">
          <div className="sm:hidden">
            <p className="text-[20px] sticky top-60 cursor-default">[01]</p>
          </div>
          <div className="w-[520px] h-[324px] sm:max-w-[500px]">
          <a href="https://essentia-neon.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={proj} alt="" className="rounded-[10px]" />
          </a>
            <div className="flex justify-between mt-4">
              <div className="flex-col cursor-default">
                <p className="text-[10px] font-light text-text_grey">
                  Architechture & Engineering
                </p>
                <p className="text-[12px] font-medium">ESSENTIA ENGINEERING</p>
              </div>
              <div className="flex gap-2 items-end sm:flex-col cursor-default">
                {" "}
                <div className="bg-light_grey px-3 py-1 text-[10px] rounded-[50px]">
                  <p>2024</p>
                </div>
                <div className="bg-light_grey px-3 py-1 text-[10px] rounded-[50px]">
                  <p>Web Design</p>
                </div>
                <div className="bg-light_grey px-3 py-1 text-[10px] rounded-[50px]">
                  <p>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end sm:justify-center mt-40 sm:mt-20 smm:mt-40 gap-[300px]">
          <div className="sm:hidden">
            <p className="text-[20px] sticky top-60 cursor-default">[02]</p>
          </div>
          <div className="w-[520px] h-[324px] sm:max-w-[500px]">
          <a href="https://www.figma.com/proto/4WB83Vv4cDGzCuPuK43zaT/Untitled?page-id=0%3A1&node-id=170-5&p=f&viewport=-207%2C220%2C0.08&t=BuaGLiT7jBeqH36S-1&scaling=min-zoom&content-scaling=fixed" target="_blank" rel="noopener noreferrer">
            <img src={proj2} alt="" className="rounded-[10px]" />
          </a>
            <div className="flex justify-between mt-4">
              <div className="flex-col cursor-default">
                <p className="text-[10px] font-light text-text_grey">
                  Marketing, Fashion & more..
                </p>
                <p className="text-[12px] font-medium">FIGMA</p>
              </div>
              <div className="flex gap-2 items-end sm:flex-col cursor-default">
                {" "}
                <div className="bg-light_grey px-3 py-1 text-[10px] rounded-[50px]">
                  <p>2024</p>
                </div>
                <div className="bg-light_grey px-3 py-1 text-[10px] rounded-[50px]">
                  <p>Web Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
