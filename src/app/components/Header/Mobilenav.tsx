"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { MobileAnimation } from "../../animations/mobilemenu"; // adjust your path


interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLSpanElement>(null);
  const itemsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger GSAP whenever isOpen state changes
  useEffect(() => {
    if (!mounted || !overlayRef.current) return;

    const elements = {
      overlay: overlayRef.current,
      closeBtn: closeBtnRef.current,
      menuItems: itemsRef.current.filter(Boolean),
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Lock viewport scroll
      MobileAnimation(elements, "open");
    } else {
      MobileAnimation(elements, "close", () => {
        document.body.style.overflow = ""; // Unlock viewport scroll
        gsap.set(overlayRef.current, { autoAlpha: 0 }); // completely hide from screen reader
      });
    }
  }, [isOpen, mounted]);

  const navItems = [
    { title: "Home" },
    { title: "Projects" },
    { title: "About" },
    { title: "Journey" },
    { title: "Contact" },
  ];

  if (!mounted) return null;

  return createPortal(
    <div 
      ref={overlayRef}
      className="fixed top-0 left-0 z-[9999] h-screen w-screen flex justify-between p-6 bg-zinc-950 text-white md:hidden invisible"
      style={{ clipPath: "circle(0px at 85% 8%)" }} // Initial state hidden
    >
      {/* Left Side: Menu Items (Vertically Centered) */}
      <div className="flex flex-col gap-6 justify-center items-start my-auto"> 
        {navItems.map((item, index) => (
          <span 
            ref={(el) => { if (el) itemsRef.current[index] = el; }}
            className="text-4xl font-bold uppercase tracking-tight hover:cursor-pointer" 
            key={index}
            onClick={onClose}
          >
            {item.title}
          </span>
        ))}
      </div>

      {/* Right Side: Close Button */}
      <div className="pt-2">
        <span 
          ref={closeBtnRef}
          onClick={onClose}
          className="flex items-center justify-center w-12 h-12 border border-zinc-700 rounded-full text-lg font-light hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
        >
          ✕
        </span>
      </div>
    </div>,
    document.body
  );
}