import React from "react";
import Carousel from "./Carousel";
import Link from "next/link";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import LightRays from "./LightRays";

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold ">Recent Projects</h1>
      <div className="flex  justify-center items-center flex-col gap-6 border dark:border-white/50 py-8 rounded-lg overflow-hidden w-[90%] relative">
        <div className="absolute top-0 w-full h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="flex justify-center items-center relative mx-16 z-30">
          <Carousel
            baseWidth={300}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
        <Link href={"/projects"} className="flex relative z-30">
          <div className="group rounded-lg border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>View More</span>
              {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
            </AnimatedShinyText>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
