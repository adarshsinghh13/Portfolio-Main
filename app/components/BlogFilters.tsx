"use client";

type Props = {
  active: string;
  setActive: (value: string) => void;
};

export default function BlogFilters({ active, setActive }: Props) {
  const filters = ["All", "Security", "Design", "Career"];

  return (
    <div className="flex gap-3 flex-wrap mt-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-4 py-1.5 rounded-full text-sm transition ${
            active === f
              ? "bg-white text-black"
              : "bg-white/10 text-gray-400 hover:text-white"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}