import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

import Navbar from "./components/navbar";
import AboutMe from "./sections/About";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";

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

const greetings = [
  "Hello",
  "こんにちは",
  "Bonjour",
  "Hola",
  "안녕하세요",
  "Привет",
  "Olá",
  "مرحبًا",
  "你好",
  "Halo",
];

function App() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "greeting" | "content">(
    "loading",
  );
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    if (phase !== "loading") return;

    const startLoadingEngine = () => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase("greeting"), 100);
            return 100;
          }
          const increment = Math.floor(Math.random() * 12) + 6;
          return Math.min(prev + increment, 100);
        });
      }, 200);
      return interval;
    };

    let loadingInterval: ReturnType<typeof setInterval>;

    if (document.readyState !== "complete") {
      const handleWindowLoad = () => {
        setTimeout(() => {
          loadingInterval = startLoadingEngine();
        }, 200);
      };

      window.addEventListener("load", handleWindowLoad);
      return () => {
        window.removeEventListener("load", handleWindowLoad);
        if (loadingInterval) clearInterval(loadingInterval);
      };
    } else {
      loadingInterval = startLoadingEngine();
      return () => clearInterval(loadingInterval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "greeting") return;

    const delayStart = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentGreetingIndex((prev) => {
          if (prev >= greetings.length - 1) {
            clearInterval(interval);
            setTimeout(() => setPhase("content"), 700);
            return prev;
          }
          return prev + 1;
        });
      }, 300);

      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(delayStart);
  }, [phase]);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {phase === "loading" && (
          <motion.div
            key="game-loader"
            className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-50 font-mono px-6"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full max-w-md space-y-4">
              <div className="flex justify-between text-sm tracking-wider font-semibold">
                <span className="text-zinc-400 animate-pulse">
                  {progress < 30 && "[LOADING_CORE_ENGINE...]"}
                  {progress >= 30 && progress < 65 && "[LOADING_ASSETS...]"}
                  {progress >= 65 && progress < 80 && "[COMPILING_SCRIPTS...]"}
                  {progress >= 80 &&
                    progress < 90 &&
                    "[HEI_ANTEK_ANTEK_ASING_EXE...]"}
                  {progress >= 90 && progress < 100 && "[INITIALIZING_UI...]"}
                  {progress === 100 && "[READY_TO_LAUNCH]"}
                </span>
                <span className="text-primary font-bold tracking-normal">
                  {progress}%
                </span>
              </div>

              <div className="w-full h-3.5 bg-zinc-900 border border-zinc-800 rounded-none overflow-hidden p-0.75">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                />
              </div>

              <div className="text-[11px] text-zinc-600 text-center uppercase tracking-widest font-medium">
                System Status: Secure
              </div>
            </div>
          </motion.div>
        )}

        {phase === "greeting" && (
          <motion.div
            key="game-greeting"
            className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50 font-sans px-6"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <motion.h1
              key={currentGreetingIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight"
            >
              {greetings[currentGreetingIndex]}
              {currentGreetingIndex === greetings.length - 1 && (
                <span className="text-primary">.</span>
              )}
            </motion.h1>
          </motion.div>
        )}

        {phase === "content" && (
          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950 min-h-screen selection:bg-primary/20 selection:text-primary-foreground"
          >
            <Navbar />

            <main className="scroll-fade-y">
              <Hero />

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
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
