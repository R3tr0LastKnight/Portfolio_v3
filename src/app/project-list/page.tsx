import React from "react";
import { baroqueWorks } from "../baroqueWorks";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col  min-h-screen items-center mt-32 bg-white font-sans dark:bg-black mb-6">
      <h1 className="font-bold text-4xl mb-12">Project List</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center mx-4 lg:mx-16">
        {baroqueWorks.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-2xl overflow-hidden dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          >
            <div className="flex w-full h-[31vh] overflow-hidden ">
              <Image
                width={600}
                height={200}
                className="w-"
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="px-6 pt-4 pb-8">
              <Link
                href={item.link}
                target=" "
                className="flex font-semibold text-xl gap-2 items-center hover:underline transition ease-in-out hover:cursor-pointer"
              >
                <h1>{item.title}</h1>
                <GoArrowUpRight
                  className="nav-card-link-icon shrink-0"
                  aria-hidden="true"
                />
              </Link>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
