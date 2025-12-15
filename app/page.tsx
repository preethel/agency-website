import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-800">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <section id="about">
        <Services />
        <Stats />
        <TechStack />
      </section>
      <Projects />
      <Team />
      <Reviews />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
