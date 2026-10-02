import AudioPlayer from "@/components/AudioPlayer";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import GreetingSection from "@/components/GreetingSection";
import ProfileSection from "@/components/ProfileSection";
import ValuesSection from "@/components/ValuesSection";
import IdealTypeSection from "@/components/IdealTypeSection";
import GallerySection from "@/components/GallerySection";
import ConnectSection from "@/components/ConnectSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col justify-between selection:bg-[#B88E72]/20">
      {/* Floating Ambient Audio Player */}
      <AudioPlayer />

      {/* Sticky Navigation Bar */}
      <HeaderNav />

      {/* Main Cover Section */}
      <HeroSection />

      {/* Greeting / Sincere Letter */}
      <GreetingSection />

      {/* Profile Details (Age, Job, Location, Height, Education, Car) */}
      <ProfileSection />

      {/* Lifestyle & Values Q&A */}
      <ValuesSection />

      {/* Ideal Type Section */}
      <IdealTypeSection />

      {/* Photo Gallery & Moments */}
      <GallerySection />

      {/* Expression of Interest / Contact Form (RSVP Equivalent) */}
      <ConnectSection />

      {/* Host / Matchmaker Contact & Share Link */}
      <ContactModal />

      {/* Elegant Footer */}
      <Footer />
    </main>
  );
}
