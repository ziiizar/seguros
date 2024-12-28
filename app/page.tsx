import BackgroundController from "@/components/BackgroundController";
import Header from "@/components/global/Header/Header";
import Hero from "@/components/Landing/Hero";
import Footer from "@/components/global/Footer/Footer";
import ValueProposition from "@/components/Landing/ValueProposition";
import HowItWorks from "@/components/Landing/HowItWorks";
import Stats from "@/components/Landing/Stats";
import Testimonials from "@/components/Landing/Testimonials";

export default function Home() {
  return (
    <BackgroundController>
      <Header className="absolute inset-x-0 top-0 z-50" />
      <main className="flex min-h-screen flex-col items-center ">
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </BackgroundController>
  );
}