"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
  ];

  const handleNavigation = (path: string) => {
    if (pathname === path) return;

    setTimeout(() => {
      router.push(path);
    }, 600); // ⏱ match animation duration
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-6 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg">

        <div className="flex items-center gap-2 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="relative px-4 py-1.5 rounded-full overflow-hidden group"
              >
                {/* HOVER */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />

                {/* ACTIVE */}
                {isActive && (
                  <span className="absolute inset-0 bg-white rounded-full" />
                )}

                {/* TEXT */}
                <span
                  className={`relative z-10 transition ${
                    isActive
                      ? "text-black"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {/* GLOW */}
                <span className="absolute inset-0 rounded-full blur-md bg-white/20 opacity-0 group-hover:opacity-40 transition duration-300" />
              </button>
            );
          })}
        </div>

        <Link
  href="/book-call"
  className="px-4 py-1.5 bg-white text-black rounded-full text-sm hover:scale-105 transition"
>
  Book a Call
</Link>

      </div>
    </div>
  );
}