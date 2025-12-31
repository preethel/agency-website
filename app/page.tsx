import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Stats />
      <section id="about">
        <Team />
      </section>
      <section id="services">
        <Services />
      </section>
      <Projects />
      <Reviews />
      <section id="newsletter">
        <Newsletter />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
