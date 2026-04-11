const software = [
  {
    name: "Visual Studio Code",
    desc: "My primary code editor with extensions for speed and productivity.",
    img: "/img1.jpg",
  },
  {
    name: "Figma",
    desc: "Designing clean UI/UX and prototyping ideas.",
    img: "/img2.jpg",
  },
  {
    name: "GitHub",
    desc: "Version control and project collaboration.",
    img: "/img3.jpg",
  },
  {
    name: "Postman",
    desc: "Testing APIs and backend workflows.",
    img: "/img1.jpg",
  },
  {
    name: "Chrome DevTools",
    desc: "Debugging and performance tuning.",
    img: "/img2.jpg",
  },
  {
    name: "Notion",
    desc: "Organizing ideas, notes, and workflows.",
    img: "/img3.jpg",
  },
];

export default function UsesSoftware() {
  return (
    <section className="px-6 md:px-20 pb-32">

      {/* SECTION TITLE */}
      <p className="text-sm text-white/40 mb-6">
        01. SOFTWARE
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold mb-12">
        Tools I Use
      </h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {software.map((item, i) => (
          <div
            key={i}
            className="group p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition"
          >

            <img
              src={item.img}
              className="rounded-xl mb-4 h-[160px] w-full object-cover"
            />

            <h3 className="text-lg font-medium mb-1 group-hover:text-white transition">
              {item.name}
            </h3>

            <p className="text-sm text-white/50">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}