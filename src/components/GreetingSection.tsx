"use client";

import { Heart } from "lucide-react";

export default function GreetingSection() {
  return (
    <section
      id="greeting"
      className="py-16 px-6 sm:px-8 text-center bg-[#FAF7F2] relative border-t border-[#E8E2D8]/60"
    >
      {/* Decorative floral icon & divider */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-6 h-6 flex items-center justify-center text-[#B88E72] mb-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M12 21.5c-3.5-3.5-7-7.5-7-11.5 0-4 3.5-7 7-7s7 3 7 7c0 4-3.5 8-7 11.5z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <span className="text-[11px] font-serif tracking-[0.25em] text-[#976F56] uppercase">
          Greeting
        </span>
        <h2 className="text-xl font-serif text-[#2D2725] mt-1 tracking-wider font-normal">
          소중한 인연에게
        </h2>
        <div className="w-6 h-[1px] bg-[#B88E72]/40 mt-3"></div>
      </div>

      {/* Sincere Letter Content */}
      <div className="space-y-6 font-serif text-[14.5px] leading-[2.1] text-[#4A423D] max-w-[340px] mx-auto font-light">
        <p>
          안녕하세요. <br />
          소중한 인연을 기다리는 <br />
          <strong className="font-medium text-[#2D2725]">김현성</strong>입니다.
        </p>

        <p>
          작은 스침으로 시작된 만남도 <br />
          서로를 아끼는 마음이 더해지면 <br />
          가장 든든한 일상이 된다고 믿습니다.
        </p>

        <p>
          바쁜 하루 끝에 소소한 이야기를 나누고, <br />
          좋은 날엔 함께 웃으며 <br />
          지친 날엔 따뜻한 쉼표가 되어줄 수 있는 <br />
          그런 다정한 연애를 꿈꾸고 있습니다.
        </p>

        <p>
          마음이 닿는다면 부담 없이, <br />
          편안한 미소로 인사를 건네주세요.
        </p>
      </div>

      {/* Signature */}
      <div className="mt-10 pt-4 flex flex-col items-center justify-center">
        <p className="font-serif text-sm tracking-[0.15em] text-[#7E756F]">
          김 현 성 <span className="text-xs text-[#976F56] ml-1">올림</span>
        </p>
      </div>
    </section>
  );
}
