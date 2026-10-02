"use client";

import { useState } from "react";
import { Share2, MessageCircle, Copy, Check, Users, Inbox } from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const loadSubmissions = () => {
    try {
      const data = JSON.parse(
        localStorage.getItem("hsk_connect_responses") || "[]"
      );
      setSubmissions(data);
      setShowSubmissions(true);
    } catch {
      setSubmissions([]);
    }
  };

  return (
    <>
      {/* Action Buttons Row */}
      <div className="py-8 px-6 bg-[#FAF7F2] text-center border-t border-[#E8E2D8]/60 flex flex-col items-center gap-3">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-[340px] py-3.5 bg-white border border-[#B88E72] text-[#976F56] hover:bg-[#FAF7F2] rounded-2xl text-xs font-serif tracking-wider shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Users className="w-4 h-4 text-[#B88E72]" />
          <span>주선자에게 문의 / 페이지 공유</span>
        </button>

        {/* Subtle responses check for Hyun-sung himself */}
        <button
          onClick={loadSubmissions}
          className="text-[11px] font-serif text-[#A39B94] hover:text-[#976F56] flex items-center gap-1 transition-colors pt-1 cursor-pointer"
        >
          <Inbox className="w-3.5 h-3.5" />
          <span>도착한 마음 확인하기 (본인 확인용)</span>
        </button>
      </div>

      {/* Main Share / Contact Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[420px] bg-white rounded-3xl p-6 shadow-2xl border border-[#E8E2D8] space-y-4 animate-slide-up"
          >
            <div className="text-center pb-2 border-b border-[#F0ECE4]">
              <span className="text-[11px] font-serif tracking-[0.2em] text-[#976F56] uppercase">
                Contact & Share
              </span>
              <h3 className="text-base font-serif text-[#2D2725] font-medium mt-1">
                주선자에게 문의 및 공유하기
              </h3>
            </div>

            <p className="text-xs font-serif text-[#7E756F] text-center leading-relaxed">
              김현성 님과의 만남을 주선해준 분께 바로 연락하거나, <br />
              이 소개서 링크를 복사하여 전달하실 수 있습니다.
            </p>

            <div className="space-y-2.5 pt-2">
              {/* Copy URL */}
              <button
                onClick={handleCopyLink}
                className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-[#F4EFEA] rounded-2xl border border-[#E8E2D8] flex items-center justify-between text-xs font-serif text-[#2D2725] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Share2 className="w-4 h-4 text-[#976F56]" />
                  <span>소개서 링크 복사</span>
                </div>
                {copied ? (
                  <span className="text-[#976F56] font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> 복사됨
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#A39B94]" />
                )}
              </button>

              {/* Kakao Share */}
              <button
                onClick={() => {
                  const url = window.location.href;
                  const text = `[김현성 소개서] 소중한 인연을 기다리는 현성 님의 자기 PR 페이지입니다.\n${url}`;
                  navigator.clipboard.writeText(text);
                  alert("카카오톡 등에 전송할 소개 문구와 링크가 복사되었습니다!");
                }}
                className="w-full py-3 px-4 bg-[#FEE500] hover:bg-[#FADA0A] rounded-2xl flex items-center justify-center gap-2 text-xs font-medium text-[#191919] transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 fill-[#191919]" />
                <span>카카오톡 전송 문구 복사하기</span>
              </button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-xs font-serif text-[#A39B94] hover:text-[#2D2725] transition-colors pt-1"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {/* Submissions Viewer Modal (For Hyun-sung) */}
      {showSubmissions && (
        <div
          onClick={() => setShowSubmissions(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[440px] max-h-[85vh] overflow-y-auto bg-white rounded-3xl p-6 shadow-2xl border border-[#E8E2D8] space-y-4"
          >
            <div className="text-center pb-2 border-b border-[#F0ECE4]">
              <h3 className="text-base font-serif text-[#2D2725] font-medium">
                받은 마음 목록 ({submissions.length})
              </h3>
              <p className="text-[11px] font-serif text-[#976F56] mt-0.5">
                이 기기의 브라우저에 저장된 메시지입니다
              </p>
            </div>

            {submissions.length === 0 ? (
              <div className="py-12 text-center text-xs font-serif text-[#A39B94]">
                아직 접수된 메시지가 없습니다.
              </div>
            ) : (
              <div className="space-y-3">
                {submissions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E8E2D8] text-xs font-serif space-y-1.5"
                  >
                    <div className="flex justify-between items-center text-[#976F56]">
                      <span className="font-semibold text-sm text-[#2D2725]">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[#A39B94]">
                        {item.date}
                      </span>
                    </div>
                    <div className="text-[#5C524B]">
                      <strong>연락처:</strong> {item.contact}
                    </div>
                    <div className="text-[#5C524B]">
                      <strong>희망 형태:</strong> {item.preference}
                    </div>
                    {item.message && (
                      <div className="p-2.5 bg-white rounded-xl border border-[#E8E2D8]/60 mt-1.5 text-[#4A423D] whitespace-pre-wrap leading-relaxed">
                        &ldquo;{item.message}&rdquo;
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowSubmissions(false)}
              className="w-full py-2.5 bg-[#FAF7F2] text-[#5C524B] hover:text-[#2D2725] rounded-xl text-xs font-serif transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
