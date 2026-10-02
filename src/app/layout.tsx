import type { Metadata, Viewport } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const serifFont = Noto_Serif_KR({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hsk-intro.vercel.app"),
  title: "김현성을 소개합니다 · HYUNSUNG KIM",
  description: "소중한 인연을 기다리는 김현성의 자기소개 페이지입니다.",
  openGraph: {
    title: "김현성을 소개합니다 · HYUNSUNG KIM",
    description: "소중한 인연을 기다리는 김현성의 자기소개 페이지입니다.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 1000,
        alt: "김현성 프로필",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${serifFont.variable} ${sansFont.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#F0ECE4] text-[#2D2725] flex justify-center items-start selection:bg-[#B88E72]/20 selection:text-[#976F56]">
        {/* Mobile-first centered frame container (Salon de Letter aesthetic) */}
        <div className="w-full max-w-[480px] min-h-screen bg-[#FAF7F2] shadow-2xl relative overflow-x-hidden border-x border-[#EAE3D9]/60">
          {children}
        </div>
      </body>
    </html>
  );
}
