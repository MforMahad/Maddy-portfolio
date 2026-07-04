import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function contactAnimation(elements: any) {
  if (
    !elements.section ||
    !elements.heading ||
    !elements.text ||
    !elements.buttons
  )
    return;

  const { section, heading, text, buttons } = elements;
  


  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power4.out",
    },

    scrollTrigger: {
      trigger: section,

      start: "top 75%",

      once: true,
    },
  });

  const btns = gsap.utils.toArray(buttons.children);

  tl
  
  .from(heading, {
    scale: 0.8,
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  })

  .from(text,{
    y:80,
    opacity:0
  })

  .from(btns,{

    y:-80,
    opacity:0,
    stagger:0.08,


  })
}
