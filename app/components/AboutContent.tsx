"use client";

import { motion } from "framer-motion";
import ImageStack from "../components/ImageStack";


export default function AboutContent() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-15 pt-10 pb-20">

      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-15 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* SMALL LABEL */}
          <p className="text-[11px] tracking-[0.3em] uppercase text-zinc-500">
            A LITTLE ABOUT ME
          </p>

          {/* HEADING */}
          <h2 className="text-[56px] md:text-[50px] font-semibold leading-[1.05] tracking-tight">
            Nice to meet you.
            <br />
            I'm{" "}
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              Adarsh
            </span>
          </h2>

          {/* TEXT */}
          <div className="space-y-6 max-w-xl">
            <p className="text-gray-400 text-[14px] leading-relaxed">
              I transform complex ideas into high-speed, scalable web products.
              As an engineering-driven developer, I focus on the entire
              stack—prioritizing clean architecture, seamless performance, and
              modern solutions that drive real value.
            </p>

            <p className="text-gray-400 text-[14px] leading-relaxed">
              Beyond writing code, I understand the product lifecycle—how to
              build, ship, and scale meaningful products in a fast-paced
              environment.
            </p>

            <p className="text-gray-400 text-[14px] leading-relaxed">
              My philosophy is simple: build things that last. I help startups
              and businesses bridge the gap between concept and reality with
              code that performs.
            </p>
          </div>

         {/* SOCIAL + BUTTON */}
<div className="pt-4 flex flex-col gap-6">

  {/* SOCIAL ICONS */}
   {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-6 text-gray-400">

              {/* LinkedIn */}
              <a 
    href="https://linkedin.com/in/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
                <svg width="18" height="18" fill="currentColor">
                  <path d="M16 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h14c1.1 
        0 2-.9 2-2V2c0-1.1-.9-2-2-2zM5.3 13.5H2.7V6h2.6v7.5zM4 
        4.9c-.8 0-1.4-.6-1.4-1.4S3.2 2 4 2s1.4.6 
        1.4 1.4S4.8 4.9 4 4.9zM15.3 
        13.5h-2.6v-3.6c0-.9-.3-1.5-1.1-1.5-.6 
        0-1 .4-1.2.8-.1.2-.1.5-.1.8v3.5H7.7V6h2.5v1h.1c.3-.6 
        1-1.4 2.4-1.4 1.8 0 3.1 1.2 3.1 3.7v4.2z" />
                </svg>
              </a>

              {/* GitHub */}
              <a 
    href="https://github.com/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
                <svg width="18" height="18" fill="currentColor">
                  <path d="M9 0C4 0 0 4 0 9c0 4 2.6 7.4 6.2 
        8.6.5.1.7-.2.7-.5v-1.7c-2.5.5-3-1.2-3-1.2-.4-1-.9-1.3-.9-1.3-.8-.5 
        0-.5 0-.5.9.1 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 
        .6-1.2-2-.2-4-1-4-4.4 0-1 .4-1.9 
        1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 
        2.6 1 .8-.2 1.6-.3 2.4-.3s1.6.1 
        2.4.3c1.8-1.3 2.6-1 2.6-1 .5 
        1.3.2 2.3.1 2.5.6.6 1 1.5 1 
        2.5 0 3.4-2 4.2-4 4.4.3.3.6.8.6 
        1.6v2.3c0 .3.2.6.7.5C15.4 16.4 
        18 13 18 9c0-5-4-9-9-9z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a 
    href="https://twitter.com/adarshsinghh13" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
                <svg width="18" height="18" fill="currentColor">
                  <path d="M18 3a7.5 7.5 0 0 1-2.1.6 3.7 3.7 
        0 0 0 1.6-2 7.4 7.4 0 0 1-2.3.9A3.7 
        3.7 0 0 0 9.8 6c0 .3 0 .6.1.9A10.5 
        10.5 0 0 1 2 2.6a3.7 3.7 0 0 0 1.1 
        5A3.7 3.7 0 0 1 1.7 7v.1a3.7 3.7 
        0 0 0 3 3.6c-.3.1-.7.2-1 .2-.2 
        0-.5 0-.7-.1a3.7 3.7 0 0 0 3.5 
        2.6A7.5 7.5 0 0 1 0 15.5a10.5 
        10.5 0 0 0 5.7 1.7c6.8 0 10.5-5.6 
        10.5-10.5v-.5A7.4 7.4 0 0 0 18 3z"/>
                </svg>
              </a>

            </div>

  {/* BUTTON */}
 

</div>
        </motion.div>

        {/* RIGHT SIDE IMAGES */}
       <ImageStack />

      </div>
    </section>
  );
}