import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import QRCodeSection from "@/components/QRCodeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Interests />
      <div id="contact">
        <QRCodeSection />
      </div>
      <Footer />
    </main>
  );
}
