"use client";

import {
  GraduationCap,
  Briefcase,
  MapPin,
  Car,
  Calendar,
  Ruler,
  Sparkles,
} from "lucide-react";

export default function ProfileSection() {
  const profileItems = [
    {
      icon: Calendar,
      label: "출생 / 나이",
      value: "1995년생 (31세)",
      detail: "차분하고 편안한 90년대 중반생",
    },
    {
      icon: Ruler,
      label: "신체 / 피지컬",
      value: "179 cm",
      detail: "깔끔하고 단정한 체격과 스타일",
    },
    {
      icon: GraduationCap,
      label: "학력",
      value: "KAIST 학사 · POSTECH 석사",
      detail: "카이스트 학사 졸업 및 포항공대 석사 졸업",
    },
    {
      icon: Briefcase,
      label: "직장 / 소속",
      value: "삼성전자 DX 부문",
      detail: "모바일 visual AI 연구/개발 직무",
    },
    {
      icon: MapPin,
      label: "거주 지역",
      value: "경기도 수원",
      detail: "서울·경기권 원활한 이동 가능",
    },
    {
      icon: Car,
      label: "차량 및 운전",
      value: "자차 보유 (베스트 드라이버)",
      detail: "근교 드라이브 및 편안한 픽업 가능",
    },
  ];

  return (
    <section
      id="profile"
      className="py-16 px-6 sm:px-8 bg-[#F4EFEA]/60 border-t border-[#E8E2D8]/70"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-[11px] font-serif tracking-[0.25em] text-[#976F56] uppercase">
          Profile Details
        </span>
        <h2 className="text-xl font-serif text-[#2D2725] mt-1 tracking-wider font-normal">
          기본 정보
        </h2>
        <div className="w-6 h-[1px] bg-[#B88E72]/40 mt-3"></div>
        <p className="text-xs text-[#7E756F] font-serif mt-2 tracking-wide">
          솔직하고 담백하게 전하는 저의 프로필입니다
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 gap-3.5">
        {profileItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white/95 rounded-2xl p-4 border border-[#E8E2D8]/80 shadow-xs flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-[#B88E72]/30"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#976F56] shrink-0 border border-[#E8E2D8]/60">
                <Icon className="w-5 h-5 stroke-[1.6]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-serif text-[#8C827A] block tracking-wider">
                  {item.label}
                </span>
                <p className="text-sm font-medium text-[#2D2725] font-serif mt-0.5 truncate">
                  {item.value}
                </p>
                <p className="text-[11.5px] text-[#7E756F] font-light mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Highlight Box */}
      <div className="mt-8 bg-[#FAF7F2] rounded-2xl p-5 border border-[#B88E72]/30 shadow-xs text-center relative overflow-hidden">
        <div className="flex items-center justify-center gap-1 text-[#976F56] mb-2">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-serif font-medium tracking-wider">
            Point
          </span>
        </div>
        <p className="text-xs font-serif leading-relaxed text-[#4A423D]">
          &ldquo;일에서는 진중하고 치열하게 몰입하지만, <br />
          소중한 사람 앞에서는 다정하고 유쾌한 쉼표가 되어드리고 싶습니다.&rdquo;
        </p>
      </div>
    </section>
  );
}
