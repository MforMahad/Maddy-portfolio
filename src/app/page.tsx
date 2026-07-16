"use client";

import { useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Projects from "./components/Projects";
import { preloaderAnimation } from "./animations/preloader";
import { useGSAP } from "@gsap/react";
import MobileNav from "./components/Header/Mobilenav";


export default function Home(){
  const [loading, setLoading] = useState(true);

  const preloaderLogoRef = useRef(null);
  const overlayRef = useRef(null);
  const navbarLogoRef = useRef(null);



useGSAP(() => {

  preloaderAnimation({
      preloaderLogo: preloaderLogoRef.current,

      navbarLogo: navbarLogoRef.current,

      overlay: overlayRef.current,
      setLoading: setLoading,
  });

});

  return(
    <>
    {/* 1. Global Fixed Overlays & Navigation sit completely outside the main scroll container */}
    <Preloader thelogoRef={preloaderLogoRef} overlayRef={overlayRef} loading={loading} setLoading={setLoading} />
      <Navbar thelogoRef={navbarLogoRef} loading={loading} />

    <main className="min-h-screen bg-black text-zinc-900">
      <Hero loading={loading} />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
    </>
  );
}