import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";

const HomeDock = () => {
  return (
    <div className="relative flex justify-center items-center">
      <Dock magnification={60} distance={80}>
        <DockIcon className="bg-black/10 dark:bg-white/10 ">
          <Link href={"https://github.com/R3tr0LastKnight"}>
            <IoLogoGithub className="size-8" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href={"https://www.linkedin.com/in/shubh-shahu/"}>
            <FaLinkedin className="size-8" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Link href={"mailto:shubh14shahu@gmail.com"}>
            <IoMail className="size-8" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
};

export default HomeDock;
