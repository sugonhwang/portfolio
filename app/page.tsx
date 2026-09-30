import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Container>
          <Hero />

          <About />

          <Experience />

          <Projects />

          <Skills />

          <Contact />
        </Container>
      </main>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
