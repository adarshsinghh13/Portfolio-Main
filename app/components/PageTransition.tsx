"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

/* 🔥 CONTEXT INSIDE SAME FILE */
const TransitionContext = createContext<any>(null);

export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [circle, setCircle] = useState({
    x: 0,
    y: 0,
    active: false,
  });

  return (
    <TransitionContext.Provider value={{ setCircle }}>

      <div key={pathname} className="relative">

        {/* PAGE CONTENT */}
        {children}

        {/* 🔥 CIRCLE OVERLAY */}
        {circle.active && (
          <motion.div
            initial={{
              clipPath: `circle(0px at ${circle.x}px ${circle.y}px)`,
            }}
            animate={{
              clipPath: `circle(1500px at ${circle.x}px ${circle.y}px)`,
            }}
            transition={{
              duration: 0.8,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="fixed inset-0 bg-black z-[9999]"
          />
        )}

      </div>

    </TransitionContext.Provider>
  );
}