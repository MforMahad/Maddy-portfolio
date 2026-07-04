"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { footerAnimation } from "../animations/footer";


export default function Footer() {

  const sectionRef = useRef(null);
  const smparaRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const textRef = useRef(null);
  const socialRef = useRef(null);
  const foot1Ref = useRef(null);


  useGSAP(() =>{

    footerAnimation({

      section:sectionRef.current,
      smpara:smparaRef.current,
      heading1:heading1Ref.current,
      heading2:heading2Ref.current,
      text:textRef.current,
      socials:socialRef.current,
      foot1:foot1Ref.current

    });
  });

    return (
      <footer ref={sectionRef} className="h-screen bg-zinc-900 overflow-hidden px-2 md:px-12 py-12 md:py-0 pt-42 md:pt-42">
        <div className="max-w-7xl mx-auto">
  
          {/* Small Statement */}
          <p ref={smparaRef} className="uppercase tracking-[0.5em] text-xs text-zinc-500 text-center mb-8">
            One Idea • One Pixel • One Experience
          </p>

          <div className="flex flex-col gap-3 md:gap-9 md:pb-6">
          <div className="flex flex-col">
            <h2 ref={heading1Ref} className=" font-black
              uppercase
              leading-[0.85]
              text-center
              md:text-end
              text-4xl
              md:text-[7vw]
              text-white">
            LET'S BUILD
            </h2>
            </div>
            <div className="flex flex-col">
            <h2 ref={heading2Ref}
              className="
              font-black
              uppercase
              leading-[0.85]
              text-start
              md:text-start
              text-4xl
              
              md:text-[7vw]
              text-white"
            > TOGETHER.
            </h2>
            
          </div>
        </div>
  
  
          {/* Description */}
          <p ref={textRef}
            className="
              max-w-2xl
              mx-auto
              text-center
              text-zinc-500
              text-base
              md:text-lg
              leading-relaxed
              mt-8
            "
          >
           Every great product starts with a conversation. Let's build something people will remember.
          </p>
  
          {/* Links */}
          <div ref={socialRef}
            className="
              flex
              flex-wrap
              justify-center
              gap-8
              mt-8 md:mt-16
              text-sm
              uppercase
              tracking-widest
              text-zinc-200
            "
          >
            <a href="#" className=" hover:text-zinc-500 ">
              GitHub →
            </a>
  
            <a href="#" className="hover:text-zinc-500 ">
              LinkedIn →
            </a>
  
            <a
              href="mailto:your@email.com"
              className="hover:text-zinc-500 "
            >
              Email →
            </a>
  
            <a href="#" className="hover:text-zinc-500 ">
              Resume →
            </a>
          </div>
  
          {/* Divider */}
          <div className="w-full bg-white border-1 dashed border-zinc-500 mt-50 md:mt-10"></div>
  
          {/* Copyright */}
          <div ref={foot1Ref}
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              gap-2
              md:gap-0
              items-center
              mt-6
              text-xs
              text-zinc-500
            "
          >
            <p>© 2026 Mahad Khan.</p>
  
            <p className="text-center">Designed & Developed with Next.js + TypeScript.</p>
          </div>
  
        </div>
      </footer>
    );
  } 