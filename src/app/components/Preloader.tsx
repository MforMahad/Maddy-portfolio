"use client";

export default function Preloader({ thelogoRef, overlayRef }: any) {
  return (
    <div
      ref={overlayRef}
      className="
          fixed
          inset-0
          z-[9999]
          bg-black
          flex
          items-center
          justify-center
        "
    >
      <h1
        ref={thelogoRef}
        className="text-white text-8xl md:text-[22rem] font-black inline-block"
      >
        <span>M</span>
        <span>.</span>
      </h1>
    </div>
  );
}
