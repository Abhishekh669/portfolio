"use client"
import React, { useEffect, useState } from "react";
import { Home, User, Code, Activity, Mail } from "lucide-react";

function SideBar() {
  const [isActive, setIsActive] = useState("index");
  const navigation = [
    { name: "About", id: "about", icon: <User size={20} /> },
    { name: "Skills", id: "skills", icon: <Activity size={20} /> },
    { name: "Projects", id: "projects", icon: <Code size={20} /> },
    { name: "Contact", id: "contact", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const sectionIds = ["index", ...navigation.map(nav => nav.id)];

    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setIsActive(visible[0].target.id);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -120px 0px", // ignore bottom navbar
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);



  if (isActive !== "index") {
    return (
      <aside className="bg-sidebarbg fixed z-999 bottom-8 md:top-0 left-0 w-[96%] mx-2  md:mx-0 md:w-65 lg:w-70  h-16  md:h-screen flex  justify-center items-center   gap-x-12  rounded-full  border-2  border-highlight     md:flex md:rounded-none md:border-y-0 md:border-l-0  md:border-r md:border-blue-500 md:shadow-[8px_0_30px_rgba(59,130,246,0.55)]  md:flex-col md:justify-start md:gap-y-30 lg:gap-y-35  md:pt-20 ">
        <div className="hidden md:grid place-items-center gap-4">
          <div className="inline-block mb-0">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20">
              Portfolio
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 mt-0">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-600" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-600" />
          </div>
        </div>

        <div className="flex  w-full justify-evenly md:flex-col md:gap-y-20">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
    relative group
    flex flex-col md:flex-row items-center justify-center
    gap-y-1 md:gap-x-4
    px-4 py-2
    text-sm font-medium
    transition-all duration-300
    ${isActive === item.id ? "text-blue-500" : "text-white"}
  `}
            >
              {/* 🌈 Outer Neon Glow */}
             <span
  className={`
    absolute -z-10 rounded-2xl
    -inset-3 md:-inset-2 lg:-inset-6
    bg-linear-to-r from-blue-500/35 via-purple-500/35 to-pink-500/25
    blur-xl md:blur-lg lg:blur-3xl
    transition-all duration-500
    ${isActive === item.id ? "opacity-100 scale-105" : "opacity-0 scale-95"}
  `}
/>

{/* 💎 Inner Soft Glow */}
<span
  className={`
    absolute -z-10 rounded-xl
    -inset-1 md:-inset-1.5 lg:-inset-2
    bg-linear-to-r from-blue-500/20 to-purple-500/20
    blur-md md:blur-sm lg:blur-xl
    transition-all duration-500
    ${isActive === item.id ? "opacity-100" : "opacity-0"}
  `}
/>
              {/* Content */}
              <div className="relative z-10 flex flex-col gap-y-1 md:flex-row md:gap-x-4 items-center justify-center">
                {item.icon}
                <span className="text-xs md:text-[16px]">
                  {item.name.toUpperCase()}
                </span>
              </div>
            </a>

          ))}
        </div>
      </aside>
    );
  }
  return (
    <aside className="hidden  bg-sidebarbg fixed z-999 bottom-8 md:top-0 left-0 w-[96%] mx-2  md:mx-0 md:w-65 lg:w-70  h-full   justify-center items-center gap-x-12  rounded-full  border-2  border-highlight md:flex md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:border-blue-500 md:shadow-[8px_0_30px_rgba(59,130,246,0.55)] md:flex-col md:justify-start md:gap-y-30 lg:gap-y-35  md:pt-20">
      <div className="hidden md:grid bg-sidebarbg place-items-center gap-4">
        <div className="inline-block mb-0">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20">
            Portfolio
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-0">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-600" />
          <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-600" />
        </div>
      </div>
      <div className="flex flex-col gap-y-20">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
    relative group
    flex flex-col md:flex-row items-center justify-center
    gap-y-1 md:gap-x-4
    px-4 py-2
    text-sm font-medium
    transition-all duration-300
    ${isActive === item.id ? "text-blue-500" : "text-white"}
  `}
          >
          <span
  className={`
    absolute -z-10 rounded-2xl
    -inset-3 md:-inset-2 lg:-inset-6
    bg-linear-to-r from-blue-500/35 via-purple-500/35 to-pink-500/25
    blur-xl md:blur-lg lg:blur-3xl
    transition-all duration-500
    ${isActive === item.id ? "opacity-100 scale-105" : "opacity-0 scale-95"}
  `}
/>

{/* 💎 Inner Soft Glow */}
<span
  className={`
    absolute -z-10 rounded-xl
    -inset-1 md:-inset-1.5 lg:-inset-2
    bg-linear-to-r from-blue-500/20 to-purple-500/20
    blur-md md:blur-sm lg:blur-xl
    transition-all duration-500
    ${isActive === item.id ? "opacity-100" : "opacity-0"}
  `}
/>

            <div className="relative z-10 flex flex-col gap-y-1 md:flex-row md:gap-x-4 items-center justify-center">
              {item.icon}
              <span className="text-xs md:text-[16px]">
                {item.name.toUpperCase()}
              </span>
            </div>
          </a>

        ))}
      </div>
    </aside>
  );
}

export default SideBar;
