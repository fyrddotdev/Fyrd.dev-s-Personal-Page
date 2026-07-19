import Navbar from "./components/navbar";
import AboutMe from "./sections/About";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
}
function ScrollReveal({ children }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="bg-zinc-950 min-h-screen selection:bg-primary/20 selection:text-primary-foreground"
    >
      <Navbar />

      <main className="scroll-fade-y">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <AboutMe />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <TechStack />
        </ScrollReveal>

        <ScrollReveal>
          <Journey />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
    </motion.div>
  );
}

export default App;
