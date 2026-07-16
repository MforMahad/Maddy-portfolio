import gsap from "gsap";

export function MobileAnimation(elements: any, action: "open" | "close", onComplete?: () => void) {
  const { overlay, menuItems, closeBtn } = elements;

  if (!overlay) return;

  // Create an isolated timeline that runs immediately
  const tl = gsap.timeline({
    onComplete: onComplete
  });

  if (action === "open") {
    // 1. Set initial state of elements before animating
    gsap.set(overlay, { 
      autoAlpha: 1,
      // Start as a tiny 0px circle pinned to the top-right corner where the burger menu is
      clipPath: "circle(0px at 85% 8%)" 
    });
    
    gsap.set(menuItems, { 
      y: 50, 
      rotate: 5, 
      opacity: 0 
    });
    
    gsap.set(closeBtn, { 
      scale: 0, 
      rotate: -180 
    });

    // 2. The "BOOM" expansion sequence
    tl.to(overlay, {
      clipPath: "circle(150% at 85% 8%)", // Expands globally past all screen corners
      duration: 1.0,
      ease: "power4.inOut" // Match your elite preloader ease!
    })
    .to(closeBtn, {
      scale: 1,
      rotate: 0,
      duration: 0.5,
      ease: "back.out(1.7)" // Popping close button with a subtle bounce
    }, "-=0.6")
    .to(menuItems, {
      y: 0,
      rotate: 0,
      opacity: 1,
      stagger: 0.1, // Smooth, cascading link reveal
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.5");

  } else if (action === "close") {
    // 3. Reverse exit sequence
    tl.to(menuItems, {
      y: -30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: "power3.in"
    })
    .to(closeBtn, {
      scale: 0,
      rotate: 180,
      duration: 0.3,
      ease: "power2.in"
    }, "-=0.3")
    .to(overlay, {
      // Shrinks back perfectly into the top-right close circle
      clipPath: "circle(0px at 85% 8%)",
      duration: 0.8,
      ease: "power4.inOut"
    }, "-=0.2");
  }
}