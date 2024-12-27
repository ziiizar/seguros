import Header from "@/components/global/Header/Header";
import Hero from "@/components/Landing/Hero";
import Footer from "@/components/global/Footer/Footer";
import Section2 from "@/components/Landing/Section2";
import Testimonials from "@/components/Landing/Testimonials";



export default async function Home() {

  
  return (
    <>
      <Header className="absolute inset-0 z-50 text-white"></Header>
      <main className="flex min-h-screen flex-col items-center px-8">
        <Hero></Hero>

        <Section2></Section2>
        <Testimonials></Testimonials>
      </main>
      <Footer></Footer>
    </>
  );
}
