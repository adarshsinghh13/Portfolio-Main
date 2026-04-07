"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TopLeft from "../components/TopLeft";
import AboutContent from "../components/AboutContent";
import HeroSection2 from "../components/HeroSection2";
import BehindSection from "../components/BehindSection";
import PageTransition from "../components/PageTransition";


export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      {/* Base */}
     <div className="absolute inset-0 bg-black -z-10" />

      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/noise.png')]" />
      <TopLeft />
      <Navbar />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">

        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[80px] md:text-[180px] font-extrabold tracking-[-0.03em]"
        >
          MY WORKS
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xs md:text-sm tracking-[0.3em] text-zinc-500 uppercase"
        >
          CRAFTING DIGITAL EXPERIENCES
        </motion.p>

        {/* ITALIC TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-2xl md:text-5xl italic text-white/90 font-light tracking-wide"
          style={{ fontFamily: "serif" }}
        >
          with passion & code.
        </motion.p>
      </div>

      {/* ================= FADE TO NEXT ================= */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
       </main>
  );
}