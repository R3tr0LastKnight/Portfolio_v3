import dynamic from "next/dynamic";
const HomeHero = dynamic(() => import("@/components/HomeHero"), {
  loading: () => <div>Loading...</div>,
});
const HomeAbout = dynamic(() => import("@/components/HomeAbout"), {
  loading: () => <div>Loading...</div>,
});
const HomeTech = dynamic(() => import("@/components/HomeTech"), {
  loading: () => <div>Loading...</div>,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div>Loading...</div>,
});
const IconCloud = dynamic(
  () => import("@/components/ui/icon-cloud").then((m) => m.IconCloud),
  { loading: () => <div>Loading...</div> },
);

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
        <div className="flex flex-col lg:flex-row mt-[75vh] w-full px-12 gap-12 relative z-20 mb-12">
          <HomeAbout />

          <div className="flex w-full justify-center items-start">
            <div>
              <IconCloud images={images} />
            </div>
          </div>
        </div>
        <Projects />
        <HomeTech images={images} />
      </div>
    </div>
  );
}
