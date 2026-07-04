
"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { contactAnimation } from "../animations/contact";

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() =>{

    contactAnimation({

      section:sectionRef.current,
      heading:headingRef.current,
      text:textRef.current,
      buttons:buttonsRef.current,

    });
  });
    return (
      <section  className="min-h-screen bg-white flex items-center justify-center px-6">
        <div ref={sectionRef} className="max-w-7xl mx-auto text-center">
          
          <h2 ref={headingRef} className="
            font-syne
            text-4xl
            md:text-[7vw]
            leading-none
            text-zinc-700
          ">
            READY TO<br />
            CREATE?
            <br />
            SOMETHING AMAZING.
          </h2>
  
          {/* Description */}
          <p ref={textRef} className="
          font-sans
            text-zinc-500
            text-lg
            max-w-2xl
            mx-auto
            mt-8
            leading-relaxed
          ">
            Have a project in mind, a freelance opportunity,
            or just want to connect? Let's create something
            memorable together.
          </p>
  
          {/* Links */}
          <div ref={buttonsRef} className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-6
            mt-16
          ">
            <a 
              href="mailto:your@email.com"
              className="
                px-8
                py-4
                border
                border-zinc-900
                hover:bg-zinc-700
                hover:text-white
                
              "
            >
              Email Me
            </a>
  
            <a
              href="#"
              className="
                px-8
                py-4
                border
                border-zinc-900
                hover:bg-zinc-700
                hover:text-white
                
              "
            >
              LinkedIn
            </a>
  
            <a
              href="#"
              className="
                px-8
                py-4
                border
                border-zinc-900
                
                hover:bg-zinc-700
                hover:text-white
                
              "
            >
              GitHub
            </a>
          </div>
  
        </div>
      </section>
    );
  }