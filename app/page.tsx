import Header from "@/components/global/Header/Header";
import Hero from "@/components/Landing/Hero";
import Footer from "@/components/global/Footer/Footer";
import Section2 from "@/components/Landing/Section2";



export default async function Home() {

  
  return (
    <>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center px-8">
        <Hero></Hero>

        <Section2></Section2>
      </main>
      <Footer></Footer>
    </>
  );
}
