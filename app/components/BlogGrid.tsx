"use client";

import { useState } from "react";
import { blogs } from "@/app/data/blogs";
import Link from "next/link";
import BlogFilters from "./BlogFilters";
import BlogSearch from "./BlogSearch";

export default function BlogGrid() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      active === "All" || blog.category === active;

    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-black text-white px-6 md:px-20 py-24">

      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <BlogSearch search={search} setSearch={setSearch} />
        <BlogFilters active={active} setActive={setActive} />
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition cursor-pointer">

              <p className="text-xs text-gray-500 mb-3">
                {blog.date} • {blog.read}
              </p>

              <h2 className="text-xl font-semibold">
                {blog.title}
              </h2>

              <p className="text-gray-400 text-sm mt-2">
                {blog.desc}
              </p>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}