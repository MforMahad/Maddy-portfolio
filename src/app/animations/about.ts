import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function aboutAnimation(elements:any) {

        if(!elements.section || !elements.tech ||!elements.heading1 ||!elements.heading2 ||!elements.text 
        ) return;

    const {section, tech, heading1, heading2, text} = elements

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

    const paragraphs = gsap.utils.toArray(text.children);
    const logos = gsap.utils.toArray(tech.children);

    
    tl
    
    .from(heading1,{
        x:80,
        opacity:0
    })

    .from(heading2,{
        x:-80,
        opacity:0,
    })

   

    .from(paragraphs,{

        x:80,
        opacity:0,
        stagger:0.04,

    })

    

    .from(logos,{

        x:-80,
        opacity:0,
        stagger:0.05,

    })


    
}