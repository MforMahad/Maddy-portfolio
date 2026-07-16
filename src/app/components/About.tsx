"use client";

import { useRef } from "react";
import { techStack } from "../data/techStack";
import { useGSAP } from "@gsap/react";
import { aboutAnimation } from "../animations/about";

export default function About() {
  const sectionRef = useRef(null);
  const techRef = useRef(null);
  const textRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);


  useGSAP(() => {
    aboutAnimation({
      section: sectionRef.current,
      tech: techRef.current,
      text: textRef.current,
      heading1: heading1Ref.current,
      heading2: heading2Ref.current,
    });
  });

  return (
    <section ref={sectionRef} className="min-h-screen bg-white px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto text-center md:text-start">
        <div className="flex flex-col">
          <div  className="flex flex-col pl-0 md:pl-80">
            <h2 ref={heading1Ref} className="text-4xl md:text-7xl font-bold leading-none text-zinc-700">
              The Developer
            </h2>
          </div>
          <div className="flex flex-col mb-16">
            <h2 ref={heading2Ref}
              className="
    text-4xl
    md:text-7xl
    font-bold
    leading-none
    text-zinc-700
    mt-6
  "
            >
              Behind The Code
            </h2>
          </div>
        </div>

        <div  className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={techRef}
            className="
            
    bg-zinc-700
    rounded-3xl
    p-8
    min-h-[450px]
    grid
    grid-cols-2
    md:grid-cols-3
    gap-5
  "
          >
            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="
          group
          bg-white
          rounded-2xl
          p-5
          flex
          flex-col
          items-center
          justify-center
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          cursor-pointer
        "
                >
                  <Icon
                    className="
            text-4xl
            text-zinc-900
            transition-transform
            duration-300
            group-hover:rotate-6  
            group-hover:scale-110
          "
                  />

                  <p
                    className="
            font-sans
            mt-4
            text-sm
            font-medium
            text-zinc-700
          "
                  >
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div ref={textRef} className="space-y-8">
            <p className="text-lg text-zinc-600 leading-relaxed">
              I'm Mahad Khan, a Creative Web Developer focused on building
              modern, interactive and high-performance digital experiences.
            </p>

            <p className="font-sans text-lg text-zinc-600 leading-relaxed">
              Over the past 2+ years, I've worked across WordPress, React,
              Next.js and frontend technologies helping businesses transform
              ideas into products people actually enjoy using.
            </p>

            <p className="font-sans text-lg text-zinc-600 leading-relaxed">
              Currently pursuing my MS in Computer Science while exploring
              creative development, full-stack engineering and modern web
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
