import Image from "next/image";
import React from "react";
import me from "@/../public/me.jpg";
import { LightRays } from "@/components/ui/light-rays";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdRadioButtonChecked } from "react-icons/md";
import CountUp from "@/components/CountUp";
import GradientText from "@/components/GradientText";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row my-16 lg:mt-0 min-h-screen items-center mx-12 pt-12 font-sans dark:bg-black gap-12">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-semibold">Shubh Shahu</h1>{" "}
          <h2 className="text-xl font-normal">Software Developer</h2>
        </div>
        <Image
          className="w-64 rounded  shadow-[0_3px_10px_rgb(0,0,0,0.4)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)]"
          src={me}
          alt="me"
        ></Image>
      </div>
      <div className="flex flex-col w-96 relative dark:text-white text-black gap-4">
        <div className="px-4 py-4 rounded-lg bg-white-50 dark:shadow-[0_1px_7px_rgb(255,255,255,0.2)]">
          <LightRays />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde dolores
          molestias atque, vitae corrupti architecto temporibus autem, nobis
          velit at officiis ut sapiente eos, aut quas porro reprehenderit sed
          in? Excepturi, vitae inventore nemo a iure illo sed exercitationem nam
          sequi enim, id facilis dolorem sit fugiat aperiam, sunt magni?
          Nostrum, distinctio aliquid esse cumque deleniti laboriosam ipsam.
          Voluptates, temporibus. Consectetur odio neque reprehenderit adipisci
          odit sapiente nam quas, suscipit ipsa, error exercitationem tempora
          tempore id tenetur accusantium quo quam architecto enim doloremque,
          iure nulla repudiandae. Nesciunt voluptas ratione ex.
        </div>
        <div className="relative">
          <Dock magnification={60} distance={80}>
            <DockIcon className="bg-black/10 dark:bg-white/10 ">
              <IoLogoGithub className="size-8" />
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10">
              <FaLinkedin className="size-8" />
            </DockIcon>
            <DockIcon className="bg-black/10 dark:bg-white/10">
              <IoMail className="size-8" />
            </DockIcon>
          </Dock>
        </div>
      </div>
      <div>
        <div className="flex gap-4">
          <IoIosCheckmarkCircle className="size-10" />
          <div>
            <h1 className="font-bold">PlayerOrbit </h1>
            <h2>Frotnent Web Dev Intern</h2>
            <h2 className="font-light text-xs">Aug 2023 -Aug 2024</h2>
          </div>
        </div>
        <div className="w-1 bg-black dark:bg-white h-20 rounded-full ml-4.5"></div>
        <div className="flex gap-4">
          <IoIosCheckmarkCircle className="size-10" />
          <div>
            <h1 className="font-bold">Freelance Web Developer</h1>
            <h2>Full Stack web Developer</h2>
            <h2 className="font-light text-xs">Aug 2024 - Oct 2024</h2>
          </div>
        </div>
        <div className="w-1 bg-black dark:bg-white h-20 rounded-full ml-4.5"></div>
        <div className="flex gap-4">
          <MdRadioButtonChecked className="size-10" />
          <div>
            <h1 className="font-bold">TCS</h1>
            <h2>Software Developer</h2>
            <h2 className="font-light text-xs">Oct 2024 - Present</h2>
          </div>
        </div>
        <div className="w-1 bg-black dark:bg-white h-12 rounded-full ml-4.5 "></div>
        <div className="w-1 bg-black dark:bg-white h-8 rounded-full ml-4.5 mt-1"></div>
        <div className="w-1 bg-black dark:bg-white h-4 rounded-full ml-4.5 mt-1"></div>
        <div className="w-1 bg-black dark:bg-white h-2 rounded-full ml-4.5 mt-1"></div>
      </div>
      <div className="flex flex-col gap-4 items-center w-72">
        <h1 className="font-bold text-3xl mb-4">Stats</h1>

        <div className="flex flex-col w-full gap-4 dark:text-black">
          <div className="bg-zinc-50 rounded-lg px-4 py-2 flex gap-2 text-xl">
            <h2 className="font-medium">Projects worked on :</h2>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <CountUp
                from={0}
                to={17}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-bold"
              />
            </GradientText>
          </div>
          <div className="bg-zinc-50 rounded-lg px-4 py-2 flex gap-2 text-xl">
            <h2 className="font-medium">Freelance projects :</h2>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <CountUp
                from={0}
                to={2}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-bold"
              />
            </GradientText>
          </div>
          <div className="bg-zinc-50 rounded-lg px-4 py-2 flex gap-2 text-xl">
            <h2 className="font-medium">Years of experience :</h2>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <CountUp
                from={0.0}
                to={2.3}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-bold"
              />
            </GradientText>
          </div>
          <div className="bg-zinc-50 rounded-lg px-4 py-2 flex gap-2 text-xl">
            <h2 className="font-medium">Tech skills learnt :</h2>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <CountUp
                from={0}
                to={21}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-bold"
              />
            </GradientText>
          </div>
          <div className="bg-zinc-50 rounded-lg px-4 py-2 flex gap-2 text-xl">
            <h2 className="font-medium">Tech skills learnt :</h2>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <CountUp
                from={0}
                to={21}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text font-bold"
              />
            </GradientText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
