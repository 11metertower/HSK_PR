"use client";

import { ChevronUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 bg-[#F0ECE4]/70 border-t border-[#E8E2D8] text-center space-y-4">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#E8E2D8] text-[#7E756F] text-[11px] font-serif hover:text-[#2D2725] hover:bg-white transition-all shadow-2xs cursor-pointer"
      >
        <span>TOP</span>
        <ChevronUp className="w-3.5 h-3.5" />
      </button>

      <div className="space-y-1 pt-2">
        <p className="text-xs font-serif text-[#665D56] tracking-wide">
          작은 용기가 좋은 인연의 시작이 되기를 바랍니다.
        </p>
        <p className="text-[10px] font-serif text-[#A39B94] tracking-widest uppercase">
          © 2026 HYUNSUNG KIM · ALL RIGHTS RESERVED
        </p>
      </div>

      <div className="flex items-center justify-center gap-1 text-[11px] text-[#B88E72] pt-1">
        <Heart className="w-3 h-3 fill-[#B88E72]" />
      </div>
    </footer>
  );
}
