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
    
    <main className="min-h-screen bg-black text-zinc-900">


      <Preloader thelogoRef={preloaderLogoRef} overlayRef={overlayRef} loading={loading} setLoading={setLoading} />
      <Navbar thelogoRef={navbarLogoRef} loading={loading}/>
      <Hero loading={loading} />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}