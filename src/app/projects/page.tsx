import InfiniteMenu from "@/components/InfiniteMenu";
import React from "react";
import { baroqueWorks } from "./baroqueWorks";

const page = () => {
  return (
    <div className="flex max-h-screen h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden ">
      <InfiniteMenu items={baroqueWorks} />
    </div>
  );
};

export default page;
