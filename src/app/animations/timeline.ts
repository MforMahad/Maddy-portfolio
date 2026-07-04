
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function timelineAnimation(elements:any){

if(!elements.section || !elements.line ||!elements.cards ||!elements.heading  
) return;

    const {section, line, cards, heading} = elements

    const tl = gsap.timeline({
        defaults:{
    
            duration:1,
    
            ease:"power4.out"
    
        },

        scrollTrigger:{
    
            trigger:section,
    
            start:"top 75%",
    
            once:true,
    
        }


    });

    const exp = gsap.utils.toArray(cards.children);

    tl

    .from(heading,{

        y:80,
        opacity:0,


    })

    .from(line,{

            scaleY:0,
            transformOrigin:"top",


        })

    .from(exp,{
        x:80,
        opacity:0,
        stagger:0.2,
          
        })



}