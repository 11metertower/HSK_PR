"use client";

import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";
import { getAssetPath } from "@/lib/constants";

export default function HeroSection() {
  const scrollToGreeting = () => {
    document.getElementById("greeting")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between items-center px-6 pt-10 pb-12 text-center"
    >
      {/* Delicate floral/ornament header */}
      <div className="flex flex-col items-center gap-1.5 animate-fade-in">
        <span className="text-[11px] font-serif tracking-[0.25em] text-[#976F56] uppercase">
          A Sincere Introduction
        </span>
        <div className="w-8 h-[1px] bg-[#B88E72]/40 my-1"></div>
        <p className="text-xs text-[#7E756F] font-serif tracking-widest">
          소중한 인연을 기다리는 마음으로
        </p>
      </div>

      {/* Main Profile Portrait Frame */}
      <div className="relative my-6 w-full max-w-[320px] aspect-[4/5] mx-auto">
        {/* Soft decorative shadow frame */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 border border-[#B88E72]/30 rounded-[120px_120px_24px_24px] -z-0"></div>

        {/* Main image container */}
        <div className="relative w-full h-full rounded-[120px_120px_24px_24px] overflow-hidden shadow-lg border-2 border-white bg-[#F0ECE4] z-10 group">
          <Image
            src={getAssetPath("/images/profile.jpg")}
            alt="김현성 프로필 사진"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 480px) 100vw, 360px"
          />
          {/* Subtle gradient vignette at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute bottom-4 left-0 right-0 text-white/95 text-xs font-serif tracking-wider drop-shadow-md">
            김 현 성 · HYUNSUNG
          </div>
        </div>
      </div>

      {/* Typography & Summary Information */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-serif tracking-[0.2em] text-[#2D2725] font-medium pl-1">
          김 현 성
        </h1>
        <p className="text-xs font-serif text-[#976F56] tracking-[0.18em] -mt-1 font-light">
          HYUNSUNG KIM
        </p>

        {/* Highlight Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
          <span className="px-3 py-1 bg-white/90 text-[#5C524B] border border-[#E8E2D8] rounded-full text-xs font-serif shadow-xs">
            1995년생 (31세)
          </span>
          <span className="px-3 py-1 bg-white/90 text-[#5C524B] border border-[#E8E2D8] rounded-full text-xs font-serif shadow-xs">
            179 cm
          </span>
          <span className="px-3 py-1 bg-[#B88E72]/10 text-[#976F56] font-medium border border-[#B88E72]/30 rounded-full text-xs font-serif shadow-xs">
            삼성전자 DX
          </span>
        </div>

        <p className="text-xs text-[#7E756F] font-serif tracking-wider mt-1">
          수원 거주 · 드라이브 & 카페 투어
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToGreeting}
        aria-label="스크롤 아래로 이동"
        className="mt-6 flex flex-col items-center gap-1 text-[#A39B94] hover:text-[#976F56] transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-serif tracking-[0.2em]">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
