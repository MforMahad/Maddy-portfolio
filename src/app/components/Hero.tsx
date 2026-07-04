"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { heroAnimation } from "../animations/hero";

interface HeroProps {
  loading: boolean;
}

export default function Hero({ loading }: HeroProps) {
  // 1. Keep ALL useState hooks tracked right at the very top
  const [loaded, setLoaded] = useState(false);

  // 2. Track your useRef hooks sequentially right under them
  const titleref = useRef(null);
  const subtitleref = useRef(null);
  const theimgref = useRef(null);
  const thebuttonref = useRef(null);
  const hpararef = useRef(null);

  // 3. Fire your standard lifecycle effects
  useEffect(() => {
    if (!loading) {
      setLoaded(true);
    }
  }, [loading]);

  
  useGSAP(() => {
    if (loading) return;

    heroAnimation({
      title: titleref.current,
      subtitle: subtitleref.current,
      theimg: theimgref.current,
      hbutton: thebuttonref.current,
      hpara: hpararef.current,
    });
  }, [loading]); 

  const name = "Mahad Khan";
  const letters = name.split("");

  return (
    <section className="opacity-0 bg-white relative h-screen flex flex-col items-center justify-center text-center overflow-hidden pb-4 md:pb-0">
      <div
        className="
    absolute
    right-0
    top-0
    h-full
    w-[40%]
   
  "
      />
      <Image
        src="/images/mahad.png"
        ref={theimgref}
        alt="Mahad Khan"
        width={1000}
        height={1000}
        className="
    hidden
    md:block
    absolute
    bottom-0
    right-[-220px]
    h-[95vh]
    w-auto
    object-contain
    opacity-90
    pointer-events-none
    select-none
  "
        priority
      />

      <div className="flex flex-col gap-4 mb-6 md:mb-5 ">
        <p
          ref={subtitleref}
          className="font-syne text-xs md:text-sm tracking-[0.4em] text-zinc-500 uppercase"
        >
          Creative Developer
        </p>

        {/* 2. THE HERO TITLE */}
        <h1
          ref={titleref}
          className="text-6xl md:text-[7vw] uppercase font-black tracking-tighter text-zinc-700 leading-[0.85] "
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              className={`
          inline-block
          hover:-translate-y-3
          hover:scale-110
          hover:text-zinc-400
          transition-all
          duration-300

        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
            >
              {" "}
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:mt-2 z-10">
        <p
          ref={hpararef}
          className="font-sans text-xl md:text-lg text-zinc-600 max-w-md leading-tight md:leading-loose"
        >
          I build modern, interactive, and high-performance web experiences.
        </p>

        <button
          ref={thebuttonref}
          className="relative px-8 py-4 font-medium text-zinc-800 uppercase hover:cursor-pointer tracking-wider text-sm border border-zinc-900  bg-transparent overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-white transition-colors text-zinc-900 text-sm duration-500">
            View My Work
          </span>

          <span className="absolute inset-0 w-full h-full bg-zinc-700 scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-bottom-left z-0"></span>
        </button>
      </div>

      {/* <div className="absolute hidden md:flex flex-col items-center bottom-0 left-0 w-full h-100 md-100 bg-gradient-to-tr from-zinc-600 via-zinc-500 to-zinc-700 shadow-lg border-white  border-r-60 rounded-tr-full">

  <div className="bg-white w-full h-60 mt-8"></div>
</div> */}
    </section>
  );
}
