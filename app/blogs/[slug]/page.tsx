import { blogs } from "@/app/data/blogs";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <main className="bg-black text-white px-6 md:px-20 py-32">
      <div className="max-w-[800px] mx-auto">

        {/* DATE */}
        <p className="text-gray-500 text-sm mb-4">
          {blog.date} • {blog.read}
        </p>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {blog.title}
        </h1>

        <div className="h-[1px] bg-white/10 my-10" />

        {/* CONTENT */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-[16px]">

          {blog.content.split("\n").map((line, i) => {

            // 🔥 H2
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl md:text-3xl font-semibold text-white mt-10">
                  {line.replace("## ", "")}
                </h2>
              );
            }

            // 🔥 H3
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-semibold text-white mt-8">
                  {line.replace("### ", "")}
                </h3>
              );
            }

            // 🔥 BULLETS
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="ml-5 list-disc text-gray-400">
                  {line.replace("- ", "")}
                </li>
              );
            }

            // 🔥 EMPTY LINE
            if (line.trim() === "") return null;

            // 🔥 PARAGRAPH
            return <p key={i}>{line}</p>;
          })}

        </div>

      </div>
    </main>
  );
}