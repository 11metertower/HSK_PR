"use client";

import { useState, useEffect } from "react";

export default function HeaderNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "처음" },
    { id: "greeting", label: "인사말" },
    { id: "profile", label: "프로필" },
    { id: "values", label: "취향·가치관" },
    { id: "gallery", label: "사진" },
    { id: "connect", label: "마음 전하기" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D8] shadow-xs py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2 px-3 overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-2.5 py-1 text-xs font-serif tracking-wider transition-all whitespace-nowrap rounded-full ${
                isActive
                  ? "text-[#976F56] font-semibold bg-[#B88E72]/10"
                  : "text-[#7E756F] hover:text-[#2D2725]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
