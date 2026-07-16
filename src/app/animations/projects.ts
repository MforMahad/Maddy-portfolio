import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function projectAnimation(elements: any): void {
  if (!elements.section || !elements.grid || !elements.heading) return;
  
 
  const { section, grid, heading } = elements;
  const cards = gsap.utils.toArray(elements.grid.children);
  // 1. One master ScrollTrigger to orchestrate the entire view entrance
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      toggleActions: "play none none none",
    }
  });

  // 2. Coordinated sequence for all layout elements
  tl.from(section, {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
  .from(heading, {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  }, "-=0.6") // Overlaps smoothly with the section appearance
  
  // 3. 🔥 THE CARDS DROP: Staggering them so they ripple into view beautifully
  .from(cards, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15, // The exact timing gap between each card poping up
    ease: "power3.out",
  }, "-=0.4"); // Starts slightly before the heading finishes animating
}