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
    <section
      ref={sectionRef}
      className="min-h-screen bg-white px-6 md:px-12 py-6"
    >
      <div className="max-w-7xl mx-auto text-center md:text-start">
        <div className="flex flex-col">
          <div className="flex flex-col pl-0 md:pl-80">
            <h2
              ref={heading1Ref}
              className="text-4xl md:text-7xl font-bold leading-none text-zinc-700"
            >
              The Developer
            </h2>
          </div>
          <div className="flex flex-col mb-16">
            <h2
              ref={heading2Ref}
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

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            ref={techRef}
            className="
            
    bg-zinc-700
    rounded-3xl
    p-8
    min-h-[450px]
    grid
    grid-cols-2
    md:grid-cols-4
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
          text-center
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          cursor-pointer
        "
                >
                  <Icon
                    className="
            text-3xl
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

<div
  ref={textRef}
  className="space-y-6 text-zinc-600 font-sans text-base md:text-lg leading-relaxed"
>
  <p className="font-syne text-xl md:text-2xl font-bold text-zinc-800 tracking-tight leading-snug">
    I'm Mahad Khan — a Creative Developer & Full-Stack Engineer building
    digital products where thoughtful engineering meets expressive design.
  </p>

  <p>
    I work across the full stack, from scalable Next.js and TypeScript
    architectures to APIs, databases, and production-ready web platforms.
    At the same time, I care deeply about how those systems feel — crafting
    interactive interfaces with motion, GSAP, 3D, and carefully considered
    visual systems that make complex products feel simple and intuitive.
  </p>

  <p>
    Through <span className="text-zinc-800 font-bold">ALYOXA</span>, I've
    been building both client experiences and my own digital products,
    including <span className="text-zinc-800 font-bold">Alyoxa Signal</span>
    {" "}— a web telemetry platform designed to turn application activity
    into meaningful insight. These projects have pushed me beyond simply
    building interfaces and into thinking about architecture, product
    systems, performance, and the experience as a whole.
  </p>

  <p>
    I'm currently pursuing a{" "}
    <span className="text-zinc-800 font-bold">
      Master of Science in Computer Science
    </span>
    , continuing to deepen my understanding of software engineering,
    algorithms, and modern web technologies while building products that sit
    at the intersection of technology, design, and interaction.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}
