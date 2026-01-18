"use client";

import React from "react";
import ScrambleAnimation from "react-scrambled-text/dist/src/ScrambleAnimation";
import { RetroGrid } from "./ui/retro-grid";

const HomeHero = () => {
  return (
    <div className="h-[69vh] relative">
      <ScrambleAnimation
        texts={["Welcome To Shubh's Portfolio", "shubh.is-a.dev"]}
        speed={100}
        pauseDuration={4000}
        start={true}
        className="pointer-events-none z-10 absolute w-full flex justify-center top-24  dark:text-white! text-black! text-base! lg:text-5xl! leading-none tracking-tighter "
      />

      <RetroGrid />
    </div>
  );
};

export default HomeHero;
