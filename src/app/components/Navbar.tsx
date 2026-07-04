"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { navbarAnimation } from "../animations/navbar";


export default function Navbar({ thelogoRef }: any) {
  const navRef = useRef(null);
  const navitemsRef = useRef(null);
  const menubtnRef = useRef(null);


  useGSAP(() =>{
    navbarAnimation({

      nav:navRef.current,
      // logo:logoRef.current,
      navitems:navitemsRef.current,
      menubt:menubtnRef.current

    });
  });

  return (
    <header
      className="
      fixed
      left-1/2
      md:left-1/2
      -translate-x-1/2
      z-50
      w-[80%]
      md:w-[60%]
      md:max-w-3xl 
      md:top-7
      top-6
    "
    >
      <nav ref={navRef}
        className="
        flex
        items-center
        justify-between
        bg-zinc-800 
        backdrop-blur-md
        border border-white/10
        rounded-b-2xl
        px-6
        py-2
      "
      >
        {/* Logo */}

        <a ref={thelogoRef}
          href="#hero"
          className="
          text-3xl
          font-black
          text-white
          tracking-tight
        "
        >
          M.
        </a>

        {/* Links */}

        <div ref={navitemsRef}
          className="
          font-sans
          font-bold
          text-sm     
          text-zinc-300
          py-2
          px-8
          hidden
          md:flex
          gap-10
          uppercase
          tracking-[0.25em]
        "
        >
          <a href="#projects" className="hover:text-zinc-500 transition">
            Projects
          </a>

          <a href="#about" className="hover:text-zinc-500 transition">
            About
          </a>

          <a href="#journey" className="hover:text-zinc-500 transition">
            Journey
          </a>

          <a href="#contact" className="hover:text-zinc-500 transition">
            Contact
          </a>
        </div>



        {/* Mobile */}

        <button ref={menubtnRef}
          className="
          md:hidden
          text-2xl
          text-zinc-200
        "
        >
          ☰
        </button>
      </nav>
    </header>
  );
}