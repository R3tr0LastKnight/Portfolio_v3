import Carousel from "@/components/Carousel";
import HomeHero from "@/components/HomeHero";
import Projects from "@/components/Projects";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { IconCloud } from "@/components/ui/icon-cloud";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nodedotjs",
  "mongodb",
  "tailwindcss",
  "redux",
  "html5",
  "css3",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "firebase",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black mb-6">
      <div className="w-full">
        <div className="absolute top-28 z-0  w-full">
          <HomeHero />
        </div>
        <div className="flex flex-col lg:flex-row mt-[60vh] w-full px-12 gap-12 relative z-20">
          <div>
            <h1 className="text-4xl font-bold">Shubh Shahu</h1>
            <h2 className="text-2xl font-semibold">Software Developer</h2>
            <div className="flex flex-col gap-4 mt-4">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                exercitationem, vero velit unde distinctio quis explicabo. Ipsum
                consectetur quaerat, porro magnam est corrupti ullam
                perspiciatis amet temporibus esse nesciunt impedit? Fugiat
                exercitationem, voluptas officiis provident totam ad modi
                explicabo aspernatur hic deleniti tempore iure nobis. Unde
                ipsum, ipsam distinctio itaque velit nisi quis voluptate cum
                vero illo, sunt, minus cupiditate.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                exercitationem, vero velit unde distinctio quis explicabo. Ipsum
                consectetur quaerat, porro magnam est corrupti ullam
                perspiciatis amet temporibus esse nesciunt impedit? Fugiat
                exercitationem, voluptas officiis provident totam ad modi
                explicabo aspernatur hic deleniti tempore iure nobis. Unde
                ipsum, ipsam distinctio itaque velit nisi quis voluptate cum
                vero illo, sunt, minus cupiditate.
              </p>
            </div>
            <Link
              href={"/about"}
              className="flex relative z-30 mt-4 justify-self-end"
            >
              <div className="group rounded-lg border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>Know More</span>
                  {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                </AnimatedShinyText>
              </div>
            </Link>
          </div>
          {/* <div className="grid grid-cols-2 gap-x-16 gap-y-12  mt-20">
            <Link
              href={"/about"}
              className="hover:-translate-y-1 hover:underline rounded-lg flex justify-center gap-1 items-center text-center transition shadow-[0_3px_10px_rgb(0,0,0,0.4)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)] cursor-pointer"
            >
              <h1 className="text-lg font-semibold">About Me</h1>
              <GoArrowUpRight />
            </Link>
            <Link
              href={"/skills"}
              className="hover:-translate-y-1 hover:underline rounded-lg flex justify-center gap-1 items-center text-center transition shadow-[0_3px_10px_rgb(0,0,0,0.4)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)] cursor-pointer"
            >
              <h1 className="text-lg font-semibold">Skills & Experience</h1>
              <GoArrowUpRight />
            </Link>
            <Link
              href={"/projects"}
              className="hover:-translate-y-1 hover:underline rounded-lg flex justify-center gap-1 items-center text-center transition shadow-[0_3px_10px_rgb(0,0,0,0.4)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)] cursor-pointer"
            >
              <h1 className="text-lg font-semibold">Projects</h1>
              <GoArrowUpRight />
            </Link>
            <Link
              href={"/contact"}
              className="hover:-translate-y-1 hover:underline rounded-lg flex justify-center gap-1 items-center text-center transition shadow-[0_3px_10px_rgb(0,0,0,0.4)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)] cursor-pointer"
            >
              <h1 className="text-lg font-semibold">Contact Me</h1>
              <GoArrowUpRight />
            </Link>
          </div> */}
          <div className="flex w-full justify-center items-start">
            <div>
              <IconCloud images={images} />
            </div>
          </div>
        </div>
        <Projects />
        <div className="flex flex-col items-center gap-6 my-12">
          <h1 className="text-4xl font-bold ">Skillset</h1>
        </div>
      </div>
    </div>
  );
}
