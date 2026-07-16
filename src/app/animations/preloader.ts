import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function preloaderAnimation(elements: any){

    if (
        !elements.preloaderLogo ||
        !elements.navbarLogo ||
        !elements.overlay
    ) return;

    const {
        preloaderLogo,
        navbarLogo,
        overlay,
        setLoading,
    } = elements;

    const startRect =
preloaderLogo.getBoundingClientRect();

const endRect =
navbarLogo.getBoundingClientRect();

const startX = startRect.left + startRect.width / 2;
const startY = startRect.top + startRect.height / 2;

const endX = endRect.left + endRect.width / 2;
const endY = endRect.top + endRect.height / 2;

const x = endX - startX;
const y = endY - startY;
// const logo = gsap.utils.toArray(preloaderLogo.children);
const letters = preloaderLogo.querySelectorAll("span");
const m = letters[0];
const dot = letters[1];
const tl = gsap.timeline({
    onComplete: () => {
      if (setLoading) setLoading(false); 
    }
  });

  tl
    
    .from(m,{
    scale:0,
    rotation:-15,
    duration:0.8,
    ease:"back.out(2)"
})

.from(dot,{
    x:40,
    opacity:0,
    rotateX:360,
    duration:0.4
},"-=0.2")

   .to(preloaderLogo,{
       x,
       y,
       scale:0.10,
       duration:2,
       ease:"power4.inOut"
   })
   
   .to(overlay,{
    autoAlpha:0,
    duration:0.8
},"-=0.4")  

.to(navbarLogo,{
    opacity:1,
    duration:0.1
},"-=0.1")

.set(preloaderLogo,{
    opacity:0
})


};