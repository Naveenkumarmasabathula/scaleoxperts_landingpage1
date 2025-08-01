import Header from "@/components/Header";
import { MarketingHeroDemo } from "@/components/MarketingHeroDemo";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "hsl(var(--background))" }}>
      <Header />
      <MarketingHeroDemo />
      <Benefits />
      <SocialProof />
      <Testimonials />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
