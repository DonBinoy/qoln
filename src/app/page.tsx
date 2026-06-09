import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Pillars from '@/components/Pillars';
import ProcessSection from '@/components/ProcessSection';
import TechMarquee from '@/components/TechMarquee';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WebGLBackground from '@/components/WebGLBackground';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-transparent">
      <WebGLBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Pillars />
        <TechMarquee />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
