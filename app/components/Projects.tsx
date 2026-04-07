"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import RotatingBadge from "./RotatingBadge"; 

// ─── DATA ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: " CodeStruct",
    desc: "CodeStruct is a full-stack DSA learning platform that helps users understand concepts through visualization, practice problems, and interactive features. Built with a focus on performance, scalability, and user experience.",
    gradient: "from-red-500 to-red-700",
  },
  {
    id: 2,
    title: " GigShield",
    desc: "AI-powered parametric insurance platform for gig workers that provides automatic payouts during income loss caused by weather and external disruptions",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    title: " CVForge",
    desc: "A modern resume builder web app to create professional resumes with ease. ReactJS Basic Resume Generator which will generate customized Resume in few minutes on your requirements. Live resume editor.",
    gradient: "from-yellow-500 to-orange-500",
  },
];

// ─── LEFT PANEL ───────────────────────────────────────
function LeftPanel({ activeIndex }: { activeIndex: number }) {
  const project = projects[activeIndex];

  return (
    <div className="sticky top-24 h-[70vh] flex flex-col justify-start pt-10 px-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-4">
            {project.title}
          </h3>

          <p className="text-white/80 max-w-md leading-relaxed">
            {project.desc}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────
function ProjectCard({
  project,
  onVisible,
}: {
  project: any;
  onVisible: (id: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(project.id);
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [project.id, onVisible]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="h-[70vh] flex items-center justify-center"
    >
      <div className="flex gap-6 items-center">

        {/* SMALL CARDS */}
        <div className="flex flex-col gap-6">
          <div
            className={`rounded-2xl w-[240px] h-[140px] bg-gradient-to-br ${project.gradient}`}
          />
          <div
            className={`rounded-2xl w-[240px] h-[140px] bg-gradient-to-br ${project.gradient}`}
          />
        </div>

        {/* BIG CARD */}
        <div
          className={`relative rounded-2xl w-[400px] h-[280px] bg-gradient-to-br ${project.gradient} shadow-[0_0_60px_rgba(255,255,255,0.05)]`}
        >
          <div className="absolute -top-10 -right-10">
            <RotatingBadge />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────
export default function Showcase() {
  const [activeId, setActiveId] = useState(1);
  const activeIndex = projects.findIndex((p) => p.id === activeId);

  return (
    <section className="relative bg-black h-full">

      

      <div className="flex min-h-screen">

        {/* LEFT */}
        <div className="hidden lg:block w-[45%]">
          <LeftPanel activeIndex={activeIndex} />
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[55%] px-6 py-16 flex flex-col gap-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onVisible={setActiveId}
            />
          ))}
        </div>

      </div>
    </section>
  );
}