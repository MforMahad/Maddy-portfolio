"use client";

import { useRef } from "react";
import { projects } from "../data/projects";
import { useGSAP } from "@gsap/react";
import { projectAnimation } from "../animations/projects";
export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      projectAnimation({
        section: projectsRef.current,
        grid: gridRef.current,
        heading: headingRef.current,
      });
    },
    { scope: projectsRef }
  );
  
  return (
    <section ref={projectsRef} className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center rounded-b-2xl">
      <h2 ref={headingRef} className="text-zinc-400 text-4xl md:text-7xl m-6 uppercase font-syne font-extrabold tracking-tight">
        Projects
      </h2>

      <div ref={gridRef} className="grid md:grid-cols-3 gap-5 auto-rows-[400px] md:auto-rows-[280px] max-w-7xl mx-auto pb-5 w-full px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-fullh-full bg-zinc-950 object-contain transition-transform duration-700 group-hover:scale-105"
            />
          
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/20" />
          
            {/* CONTENT */}
            <div className="absolute bottom-2 left-0 z-20 p-6 w-full">
              <h5 className="text-white text-sm md:text-lg font-bold font-syne uppercase">
                {project.title}
              </h5>
              <p className="font-sans hidden md:block text-zinc-400 mt-2 text-sm max-w-md">
                {project.description}
              </p>
              <div className="font-sans flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, techIdx) => (
                  <div key={techIdx} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}