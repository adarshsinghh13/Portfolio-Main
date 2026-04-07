"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

export default function ImageStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[420px] w-[300px] mx-auto flex items-center justify-center">

      {images.map((img, i) => {
        const position = (i - index + images.length) % images.length;

        return (
          <motion.div
            key={i}
            className="absolute rounded-3xl overflow-hidden border border-white/10"
            animate={{
              scale: position === 0 ? 1 : 0.9,
              x: position === 0 ? 0 : position === 1 ? 40 : -40,
              y: position === 0 ? 0 : 20,
              rotate: position === 0 ? 0 : position === 1 ? 8 : -8,
              zIndex: position === 0 ? 3 : position === 1 ? 2 : 1,
              opacity: position === 2 ? 0.6 : 1,
            }}
            transition={{ duration: 0.6 }}
            style={{
              width: position === 0 ? "260px" : "220px",
              height: position === 0 ? "380px" : "320px",
            }}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}