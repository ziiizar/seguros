import BackgroundController from "@/components/BackgroundController";
import Header from "@/components/global/Header/Header";
import Hero from "@/components/Landing/Hero";
import Footer from "@/components/global/Footer/Footer";
import HowItWorks from "@/components/Landing/HowItWorks";
import Stats from "@/components/Landing/Stats";
import Testimonials from "@/components/Landing/Testimonials";
import ValueProposition from "@/components/Landing/ValueProposition";

export default async function Home() {


  return (
    <BackgroundController>
      <Header className="absolute inset-x-0 top-0 z-20" />
      <main className="flex min-h-screen w-full flex-col items-center ">
        <Hero />
        <HowItWorks />
        <ValueProposition></ValueProposition>
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </BackgroundController>
  );
}
