import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function footerAnimation(elements: any) {
  if (
    !elements.section ||
    !elements.heading1 ||
    !elements.smpara ||
    !elements.heading2 ||
    !elements.text ||
    !elements.socials ||
    !elements.foot1
  )
    return;

  const { section, smpara, heading1, heading2, text, socials, foot1 } = elements;
  


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

  const social = gsap.utils.toArray(socials.children);
  const foot = gsap.utils.toArray(foot1.children);

    tl

    .from(smpara,{
        y:-80,
        opacity:0
    })

    .from(heading1,{

        x:80,
        opacity:0,

    })

    .from(heading2,{

        x:-80,
        opacity:0,

    })

    .from(text,{

        y:80,
        opacity:0,

    })

    .from(social,{
    scale: 0.3,
    y: 30,
    opacity: 0,
    duration: 1.2,
    stagger:0.1,
    ease: "power4.out"
    })

    .from(foot,{
    
        y:50,
        opacity:0,
        stagger:0.05
    })



  
}
