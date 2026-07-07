import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import CodingStats from "./components/CodingStats.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg font-body">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}