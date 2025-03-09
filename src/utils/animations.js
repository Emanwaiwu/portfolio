import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


export const fadeIn = () => {
  gsap.fromTo(".fadein", { y:30, opacity:0}, {
    opacity: 1,
    duration: 1.2,
    y:0,
    delay: 0.3,
  });
}; 

const setInitialState = () => {
  gsap.set()
}