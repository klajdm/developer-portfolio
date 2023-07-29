import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="relative ">
        <About />
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <Contact />
      </section>
    </>
  );
}
