import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CardNav from "@/components/CardNav";
import logo from "/logo.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubh's Protfolio",
  description: "Shubh Shahu's personal portfolio website.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-dark.png",
        href: "/icon-dark.png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon-light.png",
        href: "/icon-light.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Me",
          ariaLabel: "About Me",
          href: "/about",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Project Globe",
          ariaLabel: "projects",
          href: "/projects",
        },
        {
          label: "Project List",
          ariaLabel: "projects",
          href: "/project-list",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          href: "mailto:shubh14shahu@gmail.com",
        },
        {
          label: "Github",
          ariaLabel: "Github",
          href: "https://github.com/R3tr0LastKnight",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://www.linkedin.com/in/shubh-shahu/",
        },
      ],
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CardNav
            logo="/logo.png"
            logoAlt="Shubh's portfolio"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
