import gsap from "gsap";


export function heroAnimation(elements:any){

  
    // const letters = elements.title.querySelectorAll("span");
  const { title, subtitle, theimg, hpara, hbutton } = elements;
  const heroSection = title.closest("section");

    const tl = gsap.timeline({

        defaults:{

            duration:1,
    
            ease:"power4.out"
    
        }
});

if (heroSection) {
    tl.set(heroSection, { autoAlpha: 1 });
  }

     tl
     

     .from(title,{

        y:100,
        opacity:0,
        stagger:0.85,
     })


    .from(subtitle,{
        y:40,
        opacity:0,

    })


    .from(hpara,{
        y:40,
        opacity:0

    })

    .from(hbutton,{
        scale:1.5,
        opacity:0
    })

    .from(theimg,{
        scale:10,
        opacity:1,
        duration:2,
        
    })

    // .set("#hero-section", { opacity: 0 })




}