import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface EditorialAnimationParams {
  section: HTMLElement | null;
  heading: HTMLElement | null;
  listContainer: HTMLElement | null;
  previewContainer: HTMLElement | null;
}

export const animateProjectsSection = ({
  section,
  heading,
  listContainer,
  previewContainer,
}: EditorialAnimationParams) => {
  if (!section) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    if (heading) {
      tl.from(heading, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    if (listContainer) {
      tl.from(
        listContainer.children,
        {
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          clearProps: "all", // Clears inline GSAP styles after entry so hover states work cleanly
        },
        "-=0.3"
      );
    }

    if (previewContainer) {
      tl.from(
        previewContainer,
        {
          scale: 0.96,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }
  }, section);

  return () => ctx.revert();
};

export const animateImageSwitch = (
  images: HTMLElement[],
  activeIdx: number
) => {
  images.forEach((img, index) => {
    if (index === activeIdx) {
      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(img, {
        opacity: 0,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  });
};