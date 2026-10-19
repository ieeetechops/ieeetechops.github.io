import { MotionConfig } from "motion/react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Areas from "./components/Areas";
import ProjectLab from "./components/ProjectLab";
import Projects from "./components/Projects";
import Ecosystem from "./components/Ecosystem";
import Roadmap from "./components/Roadmap";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Areas />
        <ProjectLab />
        <Projects />
        <Ecosystem />
        <Roadmap />
        <Join />
      </main>
      <Footer />
    </MotionConfig>
  );
}
