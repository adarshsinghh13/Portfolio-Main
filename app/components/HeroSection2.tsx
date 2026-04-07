"use client";

import Image from "next/image";
import CubeHero from "./CubeHero";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black px-6 md:px-16 lg:px-24 flex flex-col justify-center">

      {/* TOP ROW */}
      <div className="flex items-center justify-between w-full">

        {/* LEFT (TEXT) */}
        <div className="flex flex-col gap-6 max-w-4xl">
          
          <div className="flex items-center gap-4">
            <Image
              src="/img1.jpg"
              alt="profile"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />

            <h1 className="text-[42px] md:text-[72px] font-semibold text-white tracking-tight">
              Let’s create
            </h1>
          </div>

          <h1 className="text-[42px] md:text-[72px] font-semibold text-white/40 tracking-tight">
            something real.
          </h1>
        </div>

        {/* RIGHT (CUBE) */}
        <div className="flex items-center justify-center w-[220px] h-[220px]">
          <CubeHero />
        </div>

      </div>

      <div className="mt-20 bg-[#0a0a0a] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between gap-8 max-w-6xl mx-auto">

  {/* LEFT */}
  <div className="max-w-sm">
    <h2 className="font-[var(--font-dancing)] text-[44px] md:text-[52px] text-white leading-none">
  ADARSH
</h2>
    <p className="text-white/60 text-[15px] leading-[1.6] font-medium tracking-tight">
      Building digital experiences that matter, one line of code at a time.
      Crafting interfaces that feel alive, solving problems that make a difference,
      and turning ideas into reality. Every pixel has a purpose.
    </p>
  </div>

  {/* RIGHT GRID */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">

    {/* GENERAL */}
    <div>
      <h3 className="text-white/50 mb-4">General</h3>
      <ul className="space-y-2">
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">Home</li>
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">Blogs</li>
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">Guestbook</li>
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">Uses</li>
</ul>
    </div>

    {/* ABOUT */}
    <div>
      <h3 className="text-white/50 mb-4">About</h3>
      <ul className="space-y-2">
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">About Me</li>
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">Projects</li>
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">Contact</li>
</ul>
    </div>

    {/* LEGAL (no startup as you requested) */}
    <div>
      <h3 className="text-white/50 mb-4">Legal</h3>
      <ul className="space-y-2">
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">Privacy Policy</li>
  <li className="text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition cursor-pointer">Terms & Conditions</li>
</ul>
    </div>
    

  </div>
</div>
<div className="mt-10 mb-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24">

  {/* LEFT TEXT */}
  <p className="text-white/40 text-sm tracking-tight">
    © {new Date().getFullYear()} ADARSH. ALL RIGHTS RESERVED.
  </p>

  {/* RIGHT ICONS */}
  <div className="flex items-center gap-5 text-white/60">

    <a href="#" className="hover:text-white transition">
      <i className="ri-github-line text-lg"></i>
    </a>

    <a href="#" className="hover:text-white transition">
      <i className="ri-linkedin-line text-lg"></i>
    </a>

    <a href="#" className="hover:text-white transition">
      <i className="ri-twitter-x-line text-lg"></i>
    </a>

    <a href="#" className="hover:text-white transition">
      <i className="ri-instagram-line text-lg"></i>
    </a>

  </div>
</div>
    </section>
  );
}