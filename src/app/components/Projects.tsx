"use client";

import { useState, useRef, useEffect } from "react";
import { projects } from "../data/projects";
import { useGSAP } from "@gsap/react";
import {
  animateProjectsSection,
  animateImageSwitch,
} from "../animations/projects";

export default function EditorialProjects() {
  const [activeIdx, setActiveIdx] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      animateProjectsSection({
        section: sectionRef.current,
        heading: headingRef.current,
        listContainer: listRef.current,
        previewContainer: previewRef.current,
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const validImages = imageRefs.current.filter(
      Boolean
    ) as HTMLImageElement[];
    if (validImages.length > 0) {
      animateImageSwitch(validImages, activeIdx);
    }
  }, [activeIdx]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-zinc-950 text-white py-20 px-6 md:px-16 flex flex-col justify-center"
    >
      {/* Centered Section Heading */}
      <div className="text-center mb-16">
        <h2
          ref={headingRef}
          className="text-zinc-400 text-4xl md:text-6xl font-extrabold tracking-tight uppercase font-syne inline-block pb-4 px-8"
        >
          PROJECTS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Project List */}
        <div
          ref={listRef}
          className="lg:col-span-5 flex flex-col divide-y divide-zinc-800/80 z-10"
        >
          {projects.map((project, index) => {
            const isActive = activeIdx === index;
            return (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveIdx(index)}
                className={`py-5 transition-transform duration-300 group cursor-pointer flex flex-col ${
                  isActive ? "translate-x-2" : "hover:translate-x-1"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-zinc-500">
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-base md:text-lg font-bold font-syne uppercase tracking-wider transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <span
                    className={`text-sm transform transition-transform duration-300 ${
                      isActive
                        ? "text-white translate-x-1 -translate-y-1"
                        : "text-zinc-600 group-hover:text-zinc-400"
                    }`}
                  >
                    ↗
                  </span>
                </div>

                {/* Subtitle / Tech Tags */}
                {isActive && (
                  <div className="mt-2 pl-8 flex items-center gap-2 flex-wrap">
                    {project.tech?.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Right Column: Floating Viewport Frame */}
        <div className="lg:col-span-7 sticky top-28">
          <div
            ref={previewRef}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            {projects.map((project, index) => (
              <img
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}