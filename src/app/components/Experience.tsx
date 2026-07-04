"use client"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { timelineAnimation } from "../animations/timeline";
export default function Experience() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() =>{
    timelineAnimation({

      section:sectionRef.current,
      line:lineRef.current,
      cards:cardsRef.current,
      heading:headingRef.current,

    });
  });


    const experiences = [
      {
        year: "2024",
        role: "Frontend Developer Intern",
        company: "Logic Tech",
        description:
          "Started my journey in web development, working on WordPress websites and frontend projects.",
      },
      {
        year: "2025",
        role: "Junior Frontend Developer",
        company: "Logic Tech",
        description:
          "Built responsive websites and worked on client projects using HTML, CSS, JavaScript and WordPress.",
      },
      {
        year: "2026",
        role: "Web Developer",
        company: "Nexiq Lab",
        description:
          "Developed modern web experiences and collaborated on production-ready projects.",
      },
      {
        year: "2026+",
        role: "Creative Developer",
        company: "MforMaddy",
        description:
          "Building modern web experiences with React, Next.js, TypeScript and creative development.",
      },
    ];
  
    return (
      <section ref={sectionRef} className="min-h-screen bg-zinc-900 px-6 md:px-12 py-10 rounded-b-2xl">
        <div className="max-w-6xl mx-auto">
  
          {/* <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
            Experience
          </p>
   */}
          <h2 ref={headingRef} className="text-4xl md:text-7xl font-bold text-white mb-20">
            The Journey So Far
          </h2>
  
          <div className="relative">
  
            {/* Timeline Line */}
            <div ref={lineRef} className="absolute left-4 top-0 h-full w-[2px] bg-zinc-700"></div>
            <div ref={cardsRef} className="">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-16 pb-16"
              >
                {/* Dot */}
                <div className="absolute left-[5px] top-2 w-5 h-5 rounded-full bg-white"></div>
  
                <p className="text-zinc-400 text-sm mb-2">
                  {exp.year}
                </p>
  
                <h3 className="text-white text-2xl font-bold">
                  {exp.role}
                </h3>
  
                <p className="text-zinc-300 font-medium mt-1">
                  {exp.company}
                </p>
  
                <p className="font-sans text-zinc-400 mt-4 max-w-xl leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
            </div>  
          </div>
  
        </div>
      </section>
    );
  }