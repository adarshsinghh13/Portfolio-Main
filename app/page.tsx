"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

export default function Home() {
  const text = "ADARSH";
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Cursor glow
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
      <div className="fixed top-6 right-6 z-50">

  <div className="flex items-center gap-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg">

    {/* Links */}
    <div className="flex items-center gap-6 text-sm text-gray-300">

      <span className="px-4 py-1 bg-white text-black rounded-full">
        Home
      </span>

      <a href="#about" className="hover:text-white transition">
        About
      </a>

      <a href="#work" className="hover:text-white transition">
        Projects
      </a>

      <a href="#blogs" className="hover:text-white transition">
        Blogs
      </a>

      <a href="#" className="hover:text-white transition">
        More
      </a>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3 ml-4">

      {/* Button */}
      <button className="px-4 py-1.5 bg-white text-black rounded-full text-sm hover:scale-105 transition">
        Book a Call
      </button>

    </div>

  </div>

</div>

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed w-[300px] h-[300px] bg-purple-600 opacity-20 blur-3xl rounded-full transition-all duration-300"
        style={{
          left: pos.x - 150,
          top: pos.y - 150,
        }}
      />

      {/* Center Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl text-center z-10">

        {/* Small text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm tracking-widest text-gray-400 mb-6"
        >
          CREATIVE DEVELOPER
        </motion.p>

        {/* LETTER ANIMATION */}
        <motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  className="text-[90px] md:text-[150px] font-extrabold tracking-tight leading-none text-center"
>
  ADARSH
</motion.h1>

        {/* Tagline */}
        <motion.h2
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 1 }}
  className="mt-4 text-3xl md:text-5xl font-semibold"
>
  Crafting digital{" "}
  <span className={`${playfair.className} text-gray-400`}>
    experiences
  </span>{" "}
  that matter
</motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          I design and develop modern web applications that deliver seamless, impactful user experiencess.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition duration-300">
            View My Work ↓
          </button>

          <button className="px-6 py-3 border border-gray-600 rounded-full hover:scale-105 transition duration-300">
            Let's Talk
          </button>
        </motion.div>

      </div>
    </main>
  );
}