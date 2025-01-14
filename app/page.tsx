import BackgroundController from "@/components/BackgroundController";
import Header from "@/components/global/Header/Header";
import Hero from "@/components/Landing/Hero";
import Footer from "@/components/global/Footer/Footer";
// import ValueProposition from "@/components/Landing/ValueProposition";
import HowItWorks from "@/components/Landing/HowItWorks";
import Stats from "@/components/Landing/Stats";
import Testimonials from "@/components/Landing/Testimonials";
import ValuePropositionOption2 from "@/components/Landing/ValuePropositionOption2";

export default async function Home() {


  return (
    <BackgroundController>
      <Header className="absolute inset-x-0 top-0 z-20" />
      <main className="flex min-h-screen w-full flex-col items-center ">
        <Hero />
        <HowItWorks />
        {/* <ValueProposition /> */}
        <ValuePropositionOption2></ValuePropositionOption2>
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </BackgroundController>
  );
}
