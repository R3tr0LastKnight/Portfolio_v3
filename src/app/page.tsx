import Carousel from "@/components/Carousel";
import GlareHover from "@/components/GlareHover";
import HomeHero from "@/components/HomeHero";
import MagnetLines from "@/components/MagnetLines";
import Projects from "@/components/Projects";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { IconCloud } from "@/components/ui/icon-cloud";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const slugs = [
  "react",
  "nextdotjs",
  "tailwindcss",
  "typescript",
  "javascript",
  "nodedotjs",
  "mongodb",
  "redux",
  "prisma",
  "shadcnui",
  "express",
  "firebase",
  "mysql",
  "vercel",
  "github",
  "figma",
  "html5",
  "css",
];

export default function Home() {
  const images = slugs.map((slug) => {
    const needsColor = [
      "css3",
      "expressdotjs",
      "amazonaws",
      "visualstudiocode",
    ].includes(slug);

    return needsColor
      ? `https://cdn.simpleicons.org/${slug}?color=ffffff`
      : `https://cdn.simpleicons.org/${slug}`;
  });

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
        <div className="flex flex-col mx-16 gap-6 my-12">
          <h1 className="text-4xl font-bold text-center  ">Skill Tree</h1>
          <div className="flex flex-col lg:flex-row justify-evenly">
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 -gap-y-4 ">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="h-20 w-20    bg-white/90 border-black/80 p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <Image
                    src={src}
                    alt={images[i]}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <div>
              <MagnetLines
                rows={9}
                columns={9}
                containerSize="45vmin"
                lineColor="gray"
                lineWidth="0.8vmin"
                lineHeight="5vmin"
                baseAngle={0}
                className="dark:text-white text-black"
                style={{ margin: "2rem auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
