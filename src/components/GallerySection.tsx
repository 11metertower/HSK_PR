"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { getAssetPath } from "@/lib/constants";

interface PhotoItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  isCustomPhoto?: boolean;
}

export default function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Curated gallery photos: primary portrait + lifestyle moments
  const initialPhotos: PhotoItem[] = [
    {
      id: 1,
      src: getAssetPath("/images/profile.jpg"),
      alt: "김현성 프로필 메인",
      caption: "단정한 일상 속의 한 컷",
      isCustomPhoto: true,
    },
    {
      id: 2,
      src: getAssetPath("/images/photo2.jpg"),
      alt: "김현성 일상 사진",
      caption: "소중한 순간의 한 장면",
      isCustomPhoto: true,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      alt: "주말 드라이브 풍경",
      caption: "탁 트인 교외를 달리는 힐링 드라이브",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
      alt: "따뜻한 저녁 식사 자리",
      caption: "좋은 사람들과 나누는 맛있는 저녁",
    },
  ];

  const morePhotos: PhotoItem[] = [
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1507842229451-7f01be8ffb6a?auto=format&fit=crop&w=800&q=80",
      alt: "서재와 독서",
      caption: "생각을 정리하는 조용한 시간",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      alt: "노을 지는 호수공원",
      caption: "광교호수공원 산책길의 노을",
    },
  ];

  const allPhotos = isExpanded
    ? [...initialPhotos, ...morePhotos]
    : initialPhotos;

  const currentPhoto =
    selectedPhotoIndex !== null ? allPhotos[selectedPhotoIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        selectedPhotoIndex > 0 ? selectedPhotoIndex - 1 : allPhotos.length - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        selectedPhotoIndex < allPhotos.length - 1 ? selectedPhotoIndex + 1 : 0
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-16 px-6 sm:px-8 bg-[#FAF7F2] border-t border-[#E8E2D8]/70"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-[11px] font-serif tracking-[0.25em] text-[#976F56] uppercase">
          Moments & Gallery
        </span>
        <h2 className="text-xl font-serif text-[#2D2725] mt-1 tracking-wider font-normal">
          일상의 순간들
        </h2>
        <div className="w-6 h-[1px] bg-[#B88E72]/40 mt-3"></div>
        <p className="text-xs text-[#7E756F] font-serif mt-2 tracking-wide">
          사진을 누르면 크게 보실 수 있습니다
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-3">
        {allPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F0ECE4] cursor-pointer shadow-xs border border-[#E8E2D8] transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-108"
              sizes="(max-width: 480px) 50vw, 200px"
            />
            {/* Hover overlay icon */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <ZoomIn className="w-5 h-5 drop-shadow" />
            </div>
            {/* Caption bottom bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-left">
              <p className="text-[10px] text-white/90 font-serif truncate drop-shadow-xs">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button (Salon de Letter Style) */}
      {!isExpanded && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-1.5 px-5 py-2.5 bg-white text-[#7E756F] border border-[#E8E2D8] rounded-full text-xs font-serif tracking-wider shadow-xs hover:border-[#B88E72] hover:text-[#976F56] transition-all"
          >
            <Plus className="w-3.5 h-3.5 text-[#B88E72]" />
            <span>사진 더보기</span>
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div
          onClick={() => setSelectedPhotoIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-between items-center p-4 transition-opacity animate-fade-in"
        >
          {/* Top Close bar */}
          <div className="w-full max-w-[480px] flex justify-between items-center text-white/80 pt-2 px-2">
            <span className="text-xs font-serif tracking-widest">
              {selectedPhotoIndex! + 1} / {allPhotos.length}
            </span>
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Image with navigation buttons */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[420px] aspect-[4/5] my-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20"
          >
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              fill
              className="object-contain bg-black/40"
              sizes="(max-width: 480px) 100vw, 420px"
            />

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-xs hover:bg-black/60 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-xs hover:bg-black/60 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="w-full max-w-[480px] text-center pb-4 text-white/90 text-xs font-serif">
            <p>{currentPhoto.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
