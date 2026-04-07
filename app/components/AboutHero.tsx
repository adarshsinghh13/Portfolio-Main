"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center">

        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[80px] md:text-[160px] font-bold tracking-tight text-white"
        >
          ABOUT ME
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-sm md:text-base tracking-[0.3em] text-zinc-500 uppercase"
        >
          GET TO KNOW MORE ABOUT
        </motion.p>

        {/* ITALIC TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-2xl md:text-4xl italic text-white font-light"
          style={{ fontFamily: "serif" }}
        >
          who i am.
        </motion.p>
      </div>
    </section>
  );
}