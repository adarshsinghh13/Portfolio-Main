"use client";

import { motion } from "framer-motion";

const items = [
  "USER-FRIENDLY",
  "ADAPTIVE",
  "FLUID",
  "FUTURE-PROOF",
  "SEO-READY",
  "IMMERSIVE",
  "PROTECTED",
];

function TopRibbon() {
  return (
    <div className="absolute w-[140%] left-[-20%] rotate-[-5deg] z-20">
      
      {/* GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-24 bg-red-500/40 blur-3xl opacity-60" />
      </div>

      {/* MAIN STRIP */}
      <div className="overflow-hidden">
  <div className="ticker-track flex gap-12 bg-red-600 py-4 px-8 text-white font-semibold whitespace-nowrap shadow-[0_10px_40px_rgba(255,0,0,0.6)]">
    
    {/* FIRST COPY */}
    <div className="flex gap-12">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4 text-lg">
          {item}
          <span className="text-white/70">✦</span>
        </span>
      ))}
    </div>

    {/* SECOND COPY */}
    <div className="flex gap-12">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4 text-lg">
          {item}
          <span className="text-white/70">✦</span>
        </span>
      ))}
    </div>

  </div>
</div>
    </div>
  );
}

function BottomRibbon() {
  return (
    <div className="absolute w-[140%] left-[-20%] rotate-[5deg] z-10">

      {/* 🔥 SOLID SHADOW RIBBON (NO BLUR, NO TEXT) */}
      <div className="w-full py-6 px-8 bg-gradient-to-r from-red-900 via-red-800 to-red-900 opacity-80 shadow-[0_10px_40px_rgba(255,0,0,0.3)]" />

    </div>
  );
}

export default function Ticker() {
  return (
    <div className="relative overflow-hidden py-29 bg-black">

      {/* TOP */}
      <TopRibbon />

      {/* BOTTOM (SHADOW COPY) */}
      <BottomRibbon />

    </div>
  );
}