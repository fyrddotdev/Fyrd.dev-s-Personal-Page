import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import me from "@/assets/farid.svg";
import { Button } from "@/components/ui/button";

function Hero() {
  const words = [
    "Web Programmer",
    "IT Enthusiast",
    "Solo Game Developer",
    "Creative Editor",
    "Jack Of All Trades",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Ganti kata setiap 3 detik
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-zinc-950 px-6 py-12 md:px-12"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(63, 63, 70, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(63, 63, 70, 0.15) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-radial-[circle_at_center,transparent_20%,#09090b_80%]"></div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 md:flex-row w-full">
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2 gap-4  tracking-wide">
            <h2 className="text-1xl text-primary-foreground">
              Known as Fyrd.dev_
            </h2>
            <h1 className="text-6xl font-extrabold">Moh. Farid Dunggio</h1>
            <div className="text-1xl font-mono text-zinc-300 sm:text-2xl h-10 flex items-center">
              <span className="text-primary mr-2">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  className="text-primary-foreground font-extrabold flex items-center"
                >
                  {/* Memecah string kata menjadi array huruf agar bisa diketik satu per satu */}
                  {words[index].split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ display: "none" }}
                      animate={{ display: "inline-block" }}
                      transition={{
                        // Memberikan jeda (delay) antar huruf agar muncul berurutan
                        delay: charIndex * 0.05,
                        duration: 0.01,
                      }}
                    >
                      {/* Menjaga spasi antar kata agar tidak kemakan layout flex */}
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}

                  {/* Kursor Berkedip Khas Terminal Kodingan */}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="ml-0.5 inline-block w-3 h-6 bg-zinc-400"
                  />
                </motion.span>
              </AnimatePresence>
            </div>
            <p className=" max-w-xl text-base text-zinc-400 font-mono leading-relaxed text-left">
              "Building interactive games and efficient functional software.
              Turning technical logic into engaging digital experiences."
            </p>
            <div className="flex gap-2">
              <a href="#contact">
                <Button className="p-6">Contact Me</Button>
              </a>
              <a href="#projects">
                <Button variant="secondary" className="p-6">
                  Explore Projects
                </Button>
              </a>
            </div>
          </div>
          <div className="flex md:w-1/2 justify-end items-center">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-zinc-800 transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />

              <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-950 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <img
                  src={me}
                  alt="Farid Portfolio Profile"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
