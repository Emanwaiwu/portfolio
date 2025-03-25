import React from "react";
import { smiling, whitestar } from "../utils";

const Contact = () => {
  return (
    <section
      className="px-10 sm:px-5 smm:px-10 h-screen sm:h-[65vh] sm:my-8"
      id="contact"
    >
      <div className="flex justify-center sm:items-start items-center h-full">
        <div className="rounded-[10px] h-fit sm:w-[500px] w-[600px] bg-dark_grey pt-24 pb-8 sm:px-4 grain">
          <div className="flex flex-col items-center h-full justify-center">
            <div>
              <p className="font-sub text-text_grey tracking-[-0.7px] sm:text-[14px]">
                I can't wait
              </p>
            </div>
            <div>
              <h1 className="text-white text-center text-[2rem] md:text-[1.7rem] w-[450px] md:leading-[32px] sm:max-w-[280px] sm:w-auto sm:text-[1.3rem] leading-[40px] sm:leading-[24px] -tracking-[0.015em]">
                Let's collab and make something awesome together!
              </h1>
            </div>
            <div className="my-20">
              <a href="https://calendly.com/eman-designs/15min-discovery" target="_blank" rel="noopener noreferrer">
              <button className="relative overflow-hidden rounded-[10px] bg-white w-[120px] h-[35px] sm:w-[100px] sm:h-[30px] group">
              <span className="absolute top-full h-[200%] w-[150%] -translate-x-1/2 bg-blue rounded-t-full transition-all duration-700 ease-out group-hover:top-[-10px]" />
                <p className="relative font-logo text-blue group-hover:text-white transition-all duration-700 sm:text-[12px] text-[14px]">
                  Book a call
                </p>
              </button>
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-4 cursor-pointer">
            <div className="grid grid-cols-2 sm:gap-8 gap-8 sm:order-1 order-2">
              <div className="flex gap-2 justify-center">
                <p className="text-[10px] font-light text-text_grey">
                  Socials:
                </p>
                <div className="text-[12px] text-white">
                  <p>Instagram</p>
                  <p>Linkedin</p>
                  <p>Github</p>
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <p className="text-[10px] font-light text-text_grey">
                  Projects:
                </p>
                <div className="text-[12px] text-white">
                  <p>Behance</p>
                  <p>Dribble</p>
                </div>
              </div>
            </div>
            <div className="order-1">
              <p className="text-[10px] font-light text-text_grey">
                Feel free to reach out via:
              </p>
              <p className="flex items-center text-[12px] text-white">
                  <span className="pl-4 pr-1">
                    <img src={whitestar} alt="" className="w-[10px] h-[10px]" />
                  </span>
                  <span className="transition-all duration-100">
                    <a href="mailto:28emmanueln@gmail.com">28emmanueln@gmail.com</a>
                  </span>
                </p>
            </div>
            </div>
          </div>
        </div>
        <div className="flex items-end h-[480px] absolute ml-[70vw] md:hidden sm:hidden">
          <img src={smiling} alt="" className="w-14 -rotate-12"/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
