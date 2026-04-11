"use client";

const integrations = [
  { name: "ChatGPT", desc: "AI Assistant", icon: "/logos/chatgpt.png" },
  { name: "Claude", desc: "Advanced Reasoning", icon: "/logos/claude.png" },
  { name: "Gemini", desc: "Multimodal AI", icon: "/logos/gemini.png" },
  { name: "Hugging Face", desc: "AI Models", icon: "/logos/huggingface.png" },
  { name: "Spotify", desc: "Audio Streaming", icon: "/logos/spotify.png" },
  { name: "X", desc: "Tech Twitter", icon: "/logos/x.svg" },
  { name: "LinkedIn", desc: "Professional Network", icon: "/logos/linkedin.svg" },
 
];

export default function UsesIntegrations() {
  return (
    <section className="px-6 md:px-20 py-32">

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div>
          <p className="text-xs text-white/40 mb-3 tracking-wider">
            02. INTEGRATIONS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-5 tracking-tight">
            AI & SOCIALS
          </h2>

          <p className="text-sm text-white/50 leading-relaxed max-w-sm">
            Beyond bare metal and development tools, these are the platforms powering my daily workflows. 
            I leverage advanced LLMs for rapid prototyping, reasoning, and context analysis, while staying 
            connected across professional design networks. Every API and social integration is meticulously selected to amplify productivity.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {integrations.map((item, i) => (
            <div
              key={i}
              className="group p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition flex flex-col items-center text-center"
            >

              {/* LOGO */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 mb-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-5 h-5 object-contain"
                />
              </div>

              {/* NAME */}
              <p className="text-sm font-medium text-white">
                {item.name}
              </p>

              {/* DESC */}
              <p className="text-xs text-white/40">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}