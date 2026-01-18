import React from "react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import HomeDock from "@/components/HomeDock";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Shubh Shahu</h1>
          <h2 className="text-2xl font-semibold">Software Developer</h2>
        </div>
        <HomeDock />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p>
          I’m a software developer with hands-on experience building modern,
          scalable web applications across startups, freelance projects, and
          enterprise environments. My core expertise lies in frontend
          development with React, Next.js, TypeScript, and Tailwind CSS, where I
          focus on creating clean, responsive interfaces backed by thoughtful
          state management and performance optimization. Over the past couple of
          years, I’ve worked on production-grade applications ranging from
          consumer-facing platforms to internal dashboards, always prioritizing
          usability, maintainability, and clean architecture.
        </p>
        <p>
          Professionally, I’ve contributed to impactful projects such as
          enhancing user growth through interactive gameplay features,
          streamlining content workflows via custom API integrations, and
          modernizing legacy systems with real-time, scalable solutions.
          Currently, I work as a Software Developer at Tata Consultancy
          Services, where I collaborate on enterprise web applications using
          React, SQL, and the .NET ecosystem. I enjoy solving real-world
          problems through code, continuously refining my craft, and building
          digital experiences that are both functional and intuitive.
        </p>
      </div>
      <Link
        href={"/about"}
        className="flex relative z-30 mt-4 justify-self-end"
      >
        <div className="group rounded-lg border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>Know More</span>
          </AnimatedShinyText>
        </div>
      </Link>
    </div>
  );
};

export default HomeAbout;
