"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function BehindSection() {
  const router = useRouter();
  return (
    <section className="bg-black text-white py-32 px-6 md:px-16">

      {/* HEADING */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
          BEHIND THE CURTAINS
        </p>

        <h2 className="text-[42px] md:text-[64px] font-semibold leading-tight">
          Decoding logic <br />
          <span className="font-serif italic bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            && the lyrics
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* 🔥 LEFT CARD (GITHUB) */}
        <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition">

          <div>
            <h3 className="text-lg font-semibold mb-6">
              Adarsh’s Github
            </h3>

            <p className="text-xs text-white/50 mb-2">
              LATEST PUSH • 1h ago
            </p>

            <p className="text-white/80 text-sm">
              "Refactor code structure for improved readability and maintainability"
            </p>

            <p className="text-xs text-red-400 mt-2">
              Repo: Private work
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 text-white/60 text-lg">
            <a 
    href="https://github.com/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
<FaGithub /></a>
            <a 
    href="https://linkedin.com/in/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
<FaLinkedin /></a>
            <a 
    href="https://twitter.com/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
<FaTwitter /></a>
          </div>
        </div>

        {/* 🔥 CENTER CARD */}
        <div className="relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-white/20 transition">

          {/* glow */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/20 blur-3xl pointer-events-none" />

          <div>
            <p className="text-xs text-white/50 tracking-widest mb-4">
              VISITORS
            </p>

            <h3 className="text-3xl font-semibold leading-tight">
              Leave your{" "}
              <span className="font-serif italic bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
                signature
              </span>
            </h3>

            <p className="text-white/60 mt-4 text-sm">
              Let me know you were here.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">

            {/* avatars */}
            <div className="flex -space-x-3">
              <img src="/img1.jpg" className="w-8 h-8 rounded-full border border-black" />
              <img src="/img2.jpg" className="w-8 h-8 rounded-full border border-black" />
              <img src="/img3.jpg" className="w-8 h-8 rounded-full border border-black" />
            </div>

            {/* BUTTON */}
            

<button
  onClick={() => router.push("/guestbook")}
  className="px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition shadow-[0_0_20px_rgba(255,140,0,0.3)]"
>
  Sign Guestbook →
</button>

          </div>
        </div>

        {/* 🔥 RIGHT CARD (SPOTIFY CLICKABLE) */}
        <a
          href="https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp"
          target="_blank"
          className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition group"
        >

          {/* background image */}
          <img
            src="/img1.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition"
          />

          <div className="relative p-6 backdrop-blur-md">

            <p className="text-sm text-white/60 mb-2">
              Last Played
            </p>

            <h3 className="text-lg font-semibold">
              Ishq - From "Lost;Found"
            </h3>

            <p className="text-xs text-white/50 mt-2">
              Faheem Abdullah • Album
            </p>

            <p className="text-xs text-green-400 mt-3">
              ▶ Play on Spotify
            </p>

          </div>
        </a>

      </div>
    </section>
  );
}