import Image from "next/image";
import React from "react";

const HomeTech = ({ images }: { images: string[] }) => {
  return (
    <div className="flex flex-col mx-16 gap-6 my-12">
      <h1 className="text-4xl font-bold text-center  ">
        Technologies Unlocked
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="grid grid-cols-2 lg:grid-cols-9 gap-1 ">
          {images.map((src, i) => (
            <div
              key={i}
              className="h-20 w-full lg:w-20 group bg-white/50 border-black/80 p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={src}
                alt={images[i]}
                width={40}
                height={40}
                className="h-10 w-10 group-hover:scale-125 transition-transform duration-300 ease-in-out"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTech;
