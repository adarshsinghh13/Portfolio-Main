"use client";

import {
  Code2,
  Wand2,
  Globe,
  Rocket,
  Server,
  LayoutDashboard,
  Notebook,
  Lock,
  Boxes,
  Cpu,
  PenTool,
  GitBranch, 
} from "lucide-react";

const tools = [
  { name: "VS Code", desc: "Primary IDE", icon: Code2 },
  { name: "Cursor", desc: "AI Code Editor", icon: Wand2 },
  { name: "Arc", desc: "Browser", icon: Globe },
  { name: "Raycast", desc: "Launcher", icon: Rocket },
  { name: "Linear", desc: "Project Tracking", icon: LayoutDashboard },
  { name: "GitHub", desc: "Code Hosting", icon: GitBranch },
  { name: "Vercel", desc: "Deployment", icon: Server },
  { name: "Figma", desc: "Interface Design", icon: PenTool },
  { name: "Framer", desc: "No-Code Sites", icon: Boxes },
  { name: "Obsidian", desc: "Second Brain", icon: Notebook },
  { name: "Notion", desc: "Workspace", icon: Cpu },
  { name: "1Password", desc: "Security", icon: Lock },
];

export default function UsesSoftware() {
  return (
    <section className="px-2 md:px-20 py-32">

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div>
          <p className="text-xs text-white/40 mb-3 tracking-wider">
            01. SOFTWARE
          </p>

          <h2 className="text-2xl md:text-xl font-semibold mb-5 tracking-tight">
            DEV TOOLS
          </h2>

          <p className="text-sm text-white/50 leading-relaxed max-w-sm">
            A highly optimized, blazingly fast software stack. I rely heavily on VS Code/Cursor for primary development, 
            Arc for fluid browsing, and an ensemble of productivity tools like Raycast and Obsidian. My digital workspace 
            is strictly curated. If an app doesn't serve a critical function or sparks joy with its UI, it doesn't stay.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {tools.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <div
                key={i}
                className="group p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition flex flex-col items-center text-center"
              >

                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 mb-3">
                  <Icon size={18} />
                </div>

                {/* NAME */}
                <p className="text-sm font-medium text-white">
                  {tool.name}
                </p>

                {/* DESC */}
                <p className="text-xs text-white/40">
                  {tool.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}