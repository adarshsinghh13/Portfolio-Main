"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "How I Build Smooth UI Animations",
    desc: "Breaking down motion, easing, and interaction design.",
    date: "July 2026",
  },
  {
    title: "Next.js Architecture Explained",
    desc: "Server components, routing, and performance tips.",
    date: "June 2026",
  },
  {
    title: "Designing Developer Portfolios",
    desc: "How to stand out with minimal but powerful UI.",
    date: "May 2026",
  },
];

export default function BlogList() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-[900px] mx-auto space-y-12">

        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group border-b border-white/10 pb-8 cursor-pointer"
          >
            {/* DATE */}
            <p className="text-xs text-gray-500 tracking-widest mb-3">
              {blog.date}
            </p>

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-white/80 transition">
              {blog.title}
            </h2>

            {/* DESC */}
            <p className="mt-3 text-gray-400 text-sm max-w-xl">
              {blog.desc}
            </p>

            {/* HOVER LINE */}
            <div className="mt-4 h-[1px] bg-white/10 group-hover:bg-white transition" />
          </motion.div>
        ))}

      </div>
    </section>
  );
}