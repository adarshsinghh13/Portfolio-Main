"use client";

export default function BlogSearch({ search, setSearch }: any) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search articles..."
      className="w-full md:w-[400px] px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-sm outline-none focus:border-white/30"
    />
  );
}