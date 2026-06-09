import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSection from '@/components/ProcessSection';
import TechMarquee from '@/components/TechMarquee';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-surface-1">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <TechMarquee />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
