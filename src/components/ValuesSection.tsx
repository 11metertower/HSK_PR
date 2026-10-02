"use client";

import { useState } from "react";
import { Coffee, HeartHandshake, Compass, ChevronDown } from "lucide-react";

export default function ValuesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const qnaList = [
    {
      icon: Coffee,
      question: "주말에는 주로 어떤 시간을 보내나요?",
      answer:
        "날씨 좋은 날에는 차를 타고 근교의 분위기 좋은 카페를 찾아 여유를 즐기거나, 새로운 맛집을 탐방하는 것을 좋아합니다. 때로는 조용한 곳에서 좋아하는 음악을 들으며 한 주를 정리하는 시간도 소중히 여깁니다.",
      tag: "#드라이브 #카페투어 #주말의여유",
    },
    {
      icon: HeartHandshake,
      question: "연애에 있어서 가장 중요하게 생각하는 가치는?",
      answer:
        "서로에게 ‘가장 편안한 쉼터’가 되어주는 것입니다. 굳이 꾸며내지 않아도 있는 그대로의 모습을 인정해주고, 소소한 일상도 도란도란 나누며 기쁠 땐 함께 웃고 지칠 땐 묵묵히 곁을 지켜주는 관계를 지향합니다.",
      tag: "#편안함 #다정한대화 #신뢰와존중",
    },
    {
      icon: Compass,
      question: "주변 사람들이 말하는 ‘현성’은 어떤 사람인가요?",
      answer:
        "감정의 기복이 크지 않고 매사 차분하며 믿음직스럽다는 이야기를 자주 듣습니다. 상대방의 말에 귀 기울여 공감해주고, 사소한 취향이나 약속도 기억하고 챙겨주는 세심함을 가지고 있습니다.",
      tag: "#차분함 #세심한테이커 #안정적인관계",
    },
  ];

  return (
    <section
      id="values"
      className="py-16 px-6 sm:px-8 bg-[#FAF7F2] border-t border-[#E8E2D8]/70"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-[11px] font-serif tracking-[0.25em] text-[#976F56] uppercase">
          Lifestyle & Values
        </span>
        <h2 className="text-xl font-serif text-[#2D2725] mt-1 tracking-wider font-normal">
          취향과 가치관
        </h2>
        <div className="w-6 h-[1px] bg-[#B88E72]/40 mt-3"></div>
        <p className="text-xs text-[#7E756F] font-serif mt-2 tracking-wide">
          어떤 일상을 살아가고 어떤 만남을 그리는지 담았습니다
        </p>
      </div>

      {/* Accordion / Cards */}
      <div className="space-y-4">
        {qnaList.map((item, index) => {
          const isOpen = openIndex === index;
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden shadow-xs transition-all duration-300 hover:border-[#B88E72]/40"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-4.5 flex items-center justify-between text-left gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#976F56] shrink-0 border border-[#E8E2D8]/60">
                    <Icon className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <span className="text-sm font-serif font-medium text-[#2D2725]">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#A39B94] transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-[#976F56]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs font-serif leading-[2.1] text-[#5C524B] border-t border-[#F0ECE4]">
                  <p className="mt-2">{item.answer}</p>
                  <p className="mt-3 text-[11px] text-[#976F56] font-medium tracking-wide">
                    {item.tag}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
