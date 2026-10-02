"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Send,
  Heart,
  Lock,
  CheckCircle2,
  Copy,
  Coffee,
  Car,
  MessageCircle,
  Loader2,
  Mail,
} from "lucide-react";

export default function ConnectSection() {
  const [preference, setPreference] = useState("coffee");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const targetEmail =
    process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL || "dksgnsrb@gmail.com";

  const preferences = [
    {
      id: "coffee",
      icon: Coffee,
      title: "커피 한잔",
      desc: "분위기 좋은 카페에서 가벼운 티타임",
    },
    {
      id: "meal",
      icon: Car,
      title: "식사 & 드라이브",
      desc: "맛있는 음식과 근교 드라이브",
    },
    {
      id: "chat",
      icon: MessageCircle,
      title: "메시지로 먼저",
      desc: "카톡/연락처로 천천히 알아가기",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      alert("성함과 연락처를 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);

    const prefTitle =
      preferences.find((p) => p.id === preference)?.title || preference;

    const payload = {
      _subject: `[소개팅 PR] ${name.trim()} 님으로부터 새로운 마음이 도착했습니다!`,
      _template: "table",
      _captcha: "false",
      이름_닉네임: name.trim(),
      연락처: contact.trim(),
      희망만남스타일: prefTitle,
      전하는한마디: message.trim() || "(메시지 없음)",
      제출일시: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
    };

    // 1. Send Email Notification via FormSubmit AJAX API
    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Email dispatch error:", err);
    }

    // 2. Client-side LocalStorage backup
    try {
      const existing = JSON.parse(
        localStorage.getItem("hsk_connect_responses") || "[]"
      );
      localStorage.setItem(
        "hsk_connect_responses",
        JSON.stringify([
          {
            id: Date.now(),
            date: new Date().toLocaleString("ko-KR"),
            name: name.trim(),
            contact: contact.trim(),
            preference: prefTitle,
            message: message.trim(),
          },
          ...existing,
        ])
      );
    } catch {
      // Local storage fallback
    }

    // 3. Trigger romantic Confetti celebration
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#B88E72", "#D4A373", "#E8C4B8", "#FAF7F2"],
      });
    } catch {
      // Confetti safety
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    const prefTitle =
      preferences.find((p) => p.id === preference)?.title || preference;
    const textToCopy = `[김현성 님에게 전하는 마음]\n• 이름/닉네임: ${name}\n• 연락처: ${contact}\n• 희망 만남: ${prefTitle}\n• 전하는 메시지: ${
      message || "반갑습니다 :)"
    }`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    });
  };

  return (
    <section
      id="connect"
      className="py-16 px-6 sm:px-8 bg-[#FAF7F2] border-t border-[#E8E2D8]/70"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-[11px] font-serif tracking-[0.25em] text-[#976F56] uppercase">
          Connect With Hyun-sung
        </span>
        <h2 className="text-xl font-serif text-[#2D2725] mt-1 tracking-wider font-normal">
          마음 전하기
        </h2>
        <div className="w-6 h-[1px] bg-[#B88E72]/40 mt-3"></div>
        <p className="text-xs text-[#7E756F] font-serif mt-2 tracking-wide leading-relaxed max-w-[300px]">
          현성 님의 소개를 읽고 호감이 가시거나 <br />
          더 알아가고 싶으시다면 편안하게 마음을 남겨주세요
        </p>
      </div>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 border border-[#E8E2D8] shadow-sm space-y-5"
        >
          {/* Preference Selection */}
          <div>
            <label className="block text-xs font-serif font-medium text-[#2D2725] mb-2.5">
              선호하는 첫 만남 스타일
            </label>
            <div className="grid grid-cols-3 gap-2">
              {preferences.map((p) => {
                const Icon = p.icon;
                const isSelected = preference === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPreference(p.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? "bg-[#FAF7F2] border-[#B88E72] ring-2 ring-[#B88E72]/20 text-[#976F56]"
                        : "bg-white border-[#E8E2D8] text-[#7E756F] hover:border-[#B88E72]/40"
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1.5" />
                    <span className="text-[11.5px] font-serif font-medium">
                      {p.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xs font-serif text-[#5C524B] mb-1.5">
              성함 또는 닉네임 <span className="text-[#B88E72]">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="예: 지은 / 따뜻한오후"
              className="w-full px-4 py-2.5 bg-[#FAF7F2]/60 rounded-xl border border-[#E8E2D8] text-xs font-serif text-[#2D2725] focus:outline-none focus:border-[#B88E72] focus:bg-white transition-all placeholder:text-[#A39B94]"
            />
          </div>

          {/* Contact Field */}
          <div>
            <label className="block text-xs font-serif text-[#5C524B] mb-1.5">
              연락처 (전화번호 / 카카오톡 ID / 인스타그램) <span className="text-[#B88E72]">*</span>
            </label>
            <input
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="예: 010-XXXX-XXXX 또는 kakao_id"
              className="w-full px-4 py-2.5 bg-[#FAF7F2]/60 rounded-xl border border-[#E8E2D8] text-xs font-serif text-[#2D2725] focus:outline-none focus:border-[#B88E72] focus:bg-white transition-all placeholder:text-[#A39B94]"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-xs font-serif text-[#5C524B] mb-1.5">
              현성 님에게 전하고 싶은 한마디 (선택)
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="첫인상이나 나누고 싶은 이야기를 편하게 적어주세요 :)"
              className="w-full px-4 py-2.5 bg-[#FAF7F2]/60 rounded-xl border border-[#E8E2D8] text-xs font-serif text-[#2D2725] focus:outline-none focus:border-[#B88E72] focus:bg-white transition-all resize-none placeholder:text-[#A39B94]"
            />
          </div>

          {/* Privacy Security Note */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#FAF7F2] rounded-xl text-[11px] text-[#8C827A] font-serif border border-[#E8E2D8]/60">
            <Lock className="w-3.5 h-3.5 text-[#B88E72] shrink-0" />
            <span>작성해주신 정보는 비공개로 현성 님에게 안전하게 전달됩니다.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#976F56] hover:bg-[#856049] disabled:bg-[#B88E72]/70 text-white font-serif text-xs tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>현성 님에게 전달 중...</span>
              </>
            ) : (
              <>
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>마음 전달하기</span>
              </>
            )}
          </button>
        </form>
      ) : (
        /* Submission Success Card */
        <div className="bg-white rounded-3xl p-7 border border-[#B88E72]/40 shadow-md text-center space-y-4 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#B88E72]/30 flex items-center justify-center mx-auto text-[#976F56]">
            <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />
          </div>

          <h3 className="text-base font-serif font-medium text-[#2D2725]">
            소중한 마음이 잘 전달되었습니다
          </h3>

          <p className="text-xs font-serif text-[#7E756F] leading-relaxed max-w-[280px] mx-auto">
            용기 내어 주셔서 감사드립니다. <br />
            현성 님이 확인 후 기쁜 마음으로 따뜻하게 연락드리겠습니다.
          </p>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleCopySummary}
              className="w-full py-2.5 bg-[#FAF7F2] border border-[#E8E2D8] text-[#5C524B] hover:text-[#2D2725] rounded-xl text-xs font-serif tracking-wide flex items-center justify-center gap-1.5 transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-[#976F56]" />
              <span>{copySuccess ? "주선자 공유용 복사 완료!" : "작성 내용 복사하기 (주선자 전달용)"}</span>
            </button>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-[11px] font-serif text-[#A39B94] underline hover:text-[#7E756F] pt-1"
            >
              다시 작성하기
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
