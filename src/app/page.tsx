import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";
import { Turnkey } from "@/components/Turnkey";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Turnkey />
        <About />
        <Projects />
        <Process />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
