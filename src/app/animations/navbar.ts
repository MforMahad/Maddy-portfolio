
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function navbarAnimation(elements: any){

    if (
        !elements.nav ||
        !elements.logo ||
        !elements.navitems ||
        !elements.menubt 
      )
        return;


    const {nav, logo, navitems, menubt} = elements
    const rect = logo.getBoundingClientRect();
    const centerX = window.innerWidth / 1;
    const centerY = window.innerHeight / 1;
    const x = centerX - (rect.left + rect.width / 8);
    const y = centerY - (rect.top + rect.height / 8);

const tl = gsap.timeline({});


gsap.set(logo,{
    x,
    y,
    scale:20
});

// tl.to(logo,{
//     x:0,
//     y:0,
//     scale:1,
//     duration:2,
//     ease:"power4.inOut"
// });




}