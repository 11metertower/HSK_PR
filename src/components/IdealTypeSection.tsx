"use client";

import { Sparkles, Smile, MessageCircleHeart, Flame } from "lucide-react";

export default function IdealTypeSection() {
  const points = [
    {
      icon: Smile,
      title: "선하고 순수한 미소를 지닌 분",
      description:
        "맑고 따뜻한 인상으로 함께 있으면 마음이 편안해지고, 작은 일상에도 순수한 미소로 화답해주시는 분을 좋아합니다.",
    },
    {
      icon: Flame,
      title: "솔직하고 적극적으로 다가와 주시는 분",
      description:
        "자신의 감정에 솔직하며, 좋아하는 마음을 주저 없이 표현해주시는 건강하고 밝은 에너지를 지닌 분에게 큰 매력을 느낍니다.",
    },
    {
      icon: MessageCircleHeart,
      title: "기분 좋은 티키타카와 소통이 통하는 분",
      description:
        "서로의 하루에 관심을 갖고 즐겁게 대화할 수 있는 분, 편안한 대화 속에서 자연스러운 케미를 만들어갈 수 있는 분이면 좋겠습니다.",
    },
  ];

  return (
    <section
      id="ideal"
      className="py-16 px-6 sm:px-8 bg-[#F4EFEA]/60 border-t border-[#E8E2D8]/70"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-[11px] font-serif tracking-[0.25em] text-[#976F56] uppercase">
          Ideal Match
        </span>
        <h2 className="text-xl font-serif text-[#2D2725] mt-1 tracking-wider font-normal">
          바라는 인연
        </h2>
        <div className="w-6 h-[1px] bg-[#B88E72]/40 mt-3"></div>
        <p className="text-xs text-[#7E756F] font-serif mt-2 tracking-wide">
          제가 꿈꾸는 이상형에 대한 솔직한 마음입니다
        </p>
      </div>

      {/* Ideal Points */}
      <div className="space-y-4">
        {points.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white/95 rounded-2xl p-5 border border-[#E8E2D8]/90 shadow-xs flex flex-col gap-2.5 transition-all duration-300 hover:border-[#B88E72]/40"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#976F56] border border-[#E8E2D8]/80">
                  <Icon className="w-3.5 h-3.5 stroke-[1.8]" />
                </div>
                <h3 className="text-sm font-serif font-medium text-[#2D2725]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs font-serif leading-[2] text-[#635952] pl-9">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Tag Pills */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {[
          "#선하고_맑은_미소",
          "#솔직하고_적극적인_표현",
          "#밝은_에너지",
          "#다정한_티키타카",
          "#배려와_존중",
        ].map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white border border-[#B88E72]/30 text-[#976F56] rounded-full text-[11px] font-serif tracking-wider shadow-2xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
