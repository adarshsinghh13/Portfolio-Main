"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Constants ──────────────────────────────────────────────────────────────

const W = 400, H = 400, R = 185, CX = 200, CY = 200;

const REGIONS = {
  uk: { rotY: 2.1,  rotX: 0.08,  label: "UK · GMT UTC+0",       color: "#38bdf8", accent: "sky"    },
  in: { rotY: 1.27, rotX: -0.05, label: "India · IST UTC+5:30",  color: "#ff6a00", accent: "orange" },
  us: { rotY: -1.6, rotX: 0.1,   label: "USA · EST UTC-5",       color: "#a78bfa", accent: "violet" },
};

const CITIES = [
  { name: "New Delhi",     lat: 28.6,  lng: 77.2,   region: "in" },
  { name: "Mumbai",        lat: 19.1,  lng: 72.9,   region: "in" },
  { name: "Tokyo",         lat: 35.7,  lng: 139.7,  region: "jp" },
  { name: "San Francisco", lat: 37.8,  lng: -122.4, region: "us" },
  { name: "New York",      lat: 40.7,  lng: -74.0,  region: "us" },
  { name: "London",        lat: 51.5,  lng: -0.1,   region: "uk" },
  { name: "Paris",         lat: 48.9,  lng: 2.3,    region: "uk" },
  { name: "Sydney",        lat: -33.9, lng: 151.2,  region: "au" },
  { name: "Dubai",         lat: 25.2,  lng: 55.3,   region: "me" },
  { name: "Singapore",     lat: 1.3,   lng: 103.8,  region: "sg" },
];

const ARCS = [
  { from: 0, to: 2 }, // Delhi → Tokyo
  { from: 2, to: 3 }, // Tokyo → SF
  { from: 3, to: 5 }, // SF → London
  { from: 5, to: 0 }, // London → Delhi
  { from: 4, to: 5 }, // NY → London
  { from: 8, to: 0 }, // Dubai → Delhi
];

const REGION_BUTTONS = [
  { key: "uk", flag: "🇬🇧", code: "GB", label: "UK" },
  { key: "in", flag: "🇮🇳", code: "IN", label: "India" },
  { key: "us", flag: "🇺🇸", code: "US", label: "USA" },
];

// ─── 3D Math Helpers ────────────────────────────────────────────────────────

function ll2xyz(lat, lng) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return {
    x: -Math.sin(phi) * Math.cos(theta),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.sin(theta),
  };
}

function rotateX(p, a) {
  return {
    x: p.x,
    y: p.y * Math.cos(a) - p.z * Math.sin(a),
    z: p.y * Math.sin(a) + p.z * Math.cos(a),
  };
}

function rotateY(p, a) {
  return {
    x: p.x * Math.cos(a) + p.z * Math.sin(a),
    y: p.y,
    z: -p.x * Math.sin(a) + p.z * Math.cos(a),
  };
}

function project(p) {
  return { x: CX + p.x * R, y: CY - p.y * R, visible: p.z > -0.1 };
}

// ─── Dot Grid ───────────────────────────────────────────────────────────────

function buildDotGrid() {
  const dots = [];
  for (let lat = -80; lat <= 80; lat += 11) {
    const rowR = Math.cos((lat * Math.PI) / 180);
    const count = Math.max(6, Math.round(28 * rowR));
    for (let i = 0; i < count; i++) {
      const lng = -180 + (360 / count) * i;
      dots.push({ lat, lng, xyz: ll2xyz(lat, lng) });
    }
  }
  return dots;
}

const DOT_GRID = buildDotGrid();

// ─── Easing ─────────────────────────────────────────────────────────────────

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// ─── Globe Renderer ──────────────────────────────────────────────────────────

function renderGlobe(ctx, rotYAngle, rotXAngle, selectedRegion, arcTick) {
  ctx.clearRect(0, 0, W, H);

  // Sphere gradient
  const g = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 1.8);

g.addColorStop(0, "#1e2f55");   // center
g.addColorStop(0.4, "#0f1c34");
g.addColorStop(0.7, "#081220");
g.addColorStop(1, "#050a14");   // NOT transparent anymore

ctx.fillStyle = g;
ctx.fillRect(0, 0, W, H);

  // Atmosphere glow
  const atm = ctx.createRadialGradient(CX, CY, R - 4, CX, CY, R + 22);
  atm.addColorStop(0, "rgba(56,189,248,0.10)");
  atm.addColorStop(1, "transparent");
  ctx.beginPath();
  ctx.arc(CX, CY, R + 22, 0, Math.PI * 2);
  ctx.fillStyle = atm;
  ctx.fill();

  // Clip to sphere
  ctx.save();
  ctx.beginPath();
  ctx.arc(CX, CY, R - 1, 0, Math.PI * 2);
  ctx.clip();

  // Dot grid
  DOT_GRID.forEach((d, i) => {
    let p = rotateY(d.xyz, rotYAngle);
    p = rotateX(p, rotXAngle);
    const proj = project(p);
    if (!proj.visible) return;

    const depth = (p.z + 1) / 2;
    const pulse = Math.sin(arcTick * 0.04 + i * 0.3) * 0.2 + 0.8;

    const nearActive = CITIES.some((c) => {
      if (c.region !== selectedRegion) return false;
      let cp = rotateY(ll2xyz(c.lat, c.lng), rotYAngle);
      cp = rotateX(cp, rotXAngle);
      const prj = project(cp);
      return Math.abs(prj.x - proj.x) < 18 && Math.abs(prj.y - proj.y) < 18;
    });

    ctx.beginPath();
    ctx.arc(proj.x, proj.y, nearActive ? 1.6 : 0.9, 0, Math.PI * 2);
    ctx.fillStyle = nearActive
      ? `rgba(255,160,60,${depth * pulse * 0.9})`
      : `rgba(100,140,200,${depth * 0.45})`;
    ctx.fill();
  });

  // Arcs
  ARCS.forEach((arc, ai) => {
    const c1 = CITIES[arc.from];
    const c2 = CITIES[arc.to];

    let rp1 = rotateY(ll2xyz(c1.lat, c1.lng), rotYAngle);
    rp1 = rotateX(rp1, rotXAngle);
    let rp2 = rotateY(ll2xyz(c2.lat, c2.lng), rotYAngle);
    rp2 = rotateX(rp2, rotXAngle);

    if (rp1.z < -0.3 && rp2.z < -0.3) return;

    const proj1 = project(rp1);
    const proj2 = project(rp2);

    const isActive = c1.region === selectedRegion || c2.region === selectedRegion;

    const mx = (proj1.x + proj2.x) / 2;
    const my = (proj1.y + proj2.y) / 2;
    const dist = Math.sqrt((proj2.x - proj1.x) ** 2 + (proj2.y - proj1.y) ** 2);
    if (dist < 2) return;
    const curve = dist * 0.3;
    const nx = -(proj2.y - proj1.y) / dist;
    const ny = (proj2.x - proj1.x) / dist;
    const cpx = mx + nx * curve;
    const cpy = my + ny * curve;

    // Glow
    if (isActive) {
      ctx.save();
      ctx.shadowColor = REGIONS[selectedRegion]?.color || "#38bdf8";
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.moveTo(proj1.x, proj1.y);
      ctx.quadraticCurveTo(cpx, cpy, proj2.x, proj2.y);
      ctx.strokeStyle = "rgba(255,120,0,0.2)";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.restore();
    }

    // Dashed arc
    ctx.save();
    ctx.setLineDash([5, 6]);
    ctx.lineDashOffset = -(arcTick * 0.5 + ai * 12);
    ctx.beginPath();
    ctx.moveTo(proj1.x, proj1.y);
    ctx.quadraticCurveTo(cpx, cpy, proj2.x, proj2.y);
    ctx.strokeStyle = isActive ? "rgba(255,160,60,0.75)" : "rgba(56,189,248,0.22)";
    ctx.lineWidth = isActive ? 1.5 : 0.8;
    ctx.stroke();
    ctx.restore();

    // Traveling dot
    if (isActive) {
      const t = ((arcTick * 0.012 + ai * 0.33) % 1 + 1) % 1;
      const bx = (1 - t) ** 2 * proj1.x + 2 * (1 - t) * t * cpx + t ** 2 * proj2.x;
      const by = (1 - t) ** 2 * proj1.y + 2 * (1 - t) * t * cpy + t ** 2 * proj2.y;
      ctx.beginPath();
      ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ff9030";
      ctx.shadowColor = "#ff6a00";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  });

  ctx.restore();

  // City markers
  CITIES.forEach((city, ci) => {
    let p = rotateY(ll2xyz(city.lat, city.lng), rotYAngle);
    p = rotateX(p, rotXAngle);
    if (p.z < 0.05) return;
    const proj = project(p);

    const isActive = city.region === selectedRegion;
    const pulsate = Math.sin(arcTick * 0.08 + ci * 1.1) * 0.4 + 0.6;

    // Halo
    const halo = ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, isActive ? 14 : 8);
    halo.addColorStop(0, isActive ? `rgba(255,106,0,${0.35 * pulsate})` : "rgba(56,189,248,0.15)");
    halo.addColorStop(1, "transparent");
    ctx.beginPath();
    ctx.arc(proj.x, proj.y, isActive ? 14 : 8, 0, Math.PI * 2);
    ctx.fillStyle = halo;
    ctx.fill();

    // Pulse ring
    if (isActive) {
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, 6 + pulsate * 2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,106,0,${0.5 * pulsate})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Dot
    ctx.beginPath();
    ctx.arc(proj.x, proj.y, isActive ? 3 : 2, 0, Math.PI * 2);
    if (isActive) { ctx.shadowColor = "#ff6a00"; ctx.shadowBlur = 10; }
    ctx.fillStyle = isActive ? "#ff9040" : "#38bdf8";
    ctx.fill();
    ctx.shadowBlur = 0;

    // Labels for key cities
    const showLabel =
      city.region === selectedRegion ||
      ["New Delhi", "London", "San Francisco", "Tokyo"].includes(city.name);

    if (showLabel && p.z > 0.15) {
      ctx.font = "9px 'DM Mono', monospace";
      const tw = ctx.measureText(city.name).width;
      const lw = tw + 14;
      const lx = proj.x + 9;
      const ly = proj.y - 12;

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(lx, ly, lw, 17, 4);
      ctx.fillStyle = "rgba(8,12,22,0.88)";
      ctx.strokeStyle = isActive ? "rgba(255,106,0,0.5)" : "rgba(56,189,248,0.2)";
      ctx.lineWidth = 0.7;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = isActive ? "#ffa060" : "rgba(180,210,255,0.85)";
      ctx.fillText(city.name, lx + 7, ly + 11);
    }
  });

  // Specular sheen
  ctx.save();
  ctx.beginPath();
  ctx.arc(CX, CY, R, 0, Math.PI * 2);
  ctx.clip();
  const sheen = ctx.createRadialGradient(CX - 55, CY - 55, 0, CX - 30, CY - 30, R * 0.65);
  sheen.addColorStop(0, "rgba(255,255,255,0.08)");
  sheen.addColorStop(1, "transparent");
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  // Rim
  ctx.beginPath();
  ctx.arc(CX, CY, R, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(56,189,248,0.13)";
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

// ─── Floating Particle ──────────────────────────────────────────────────────

function Particle({ x, y, size, color, duration, delay, dx }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{ y: -120, x: dx, scale: 0.5, opacity: [0, 0.8, 0.4, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

// ─── Region Button ───────────────────────────────────────────────────────────

function RegionButton({ flag, code, label, regionKey, isActive, onClick }) {
  return (
    <motion.button
      onClick={() => onClick(regionKey)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`
        relative flex items-center gap-2 px-5 py-2.5 rounded-full
        font-medium text-sm transition-all duration-300 overflow-hidden
        ${isActive
          ? "border border-orange-500/50 text-orange-300"
          : "border border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
        }
      `}
      style={
        isActive
          ? { background: "rgba(255,106,0,0.1)", boxShadow: "0 0 22px rgba(255,106,0,0.22), inset 0 0 14px rgba(255,106,0,0.06)" }
          : { background: "rgba(255,255,255,0.04)" }
      }
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: "linear-gradient(135deg, rgba(255,106,0,0.14), rgba(255,180,0,0.06))" }}
          layoutId="activeRegionBg"
        />
      )}
      <span className="text-base relative z-10">{flag}</span>
      <span className="font-mono text-[9px] opacity-60 relative z-10 tracking-widest">{code}</span>
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.span
          className="w-1.5 h-1.5 rounded-full bg-orange-400 relative z-10"
          style={{ boxShadow: "0 0 6px #ff6a00" }}
          animate={{ opacity: [1, 0.4, 1], scale: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function InteractiveGlobe() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    rotY: REGIONS.in.rotY,
    rotX: REGIONS.in.rotX,
    fromRotY: REGIONS.in.rotY,
    fromRotX: REGIONS.in.rotX,
    targetRotY: REGIONS.in.rotY,
    targetRotX: REGIONS.in.rotX,
    isAnimating: false,
    autoRotating: true,
    lerpT: 0,
    arcTick: 0,
    lastTime: 0,
  });
  const pauseTimeout = useRef(null);
  const rafRef = useRef(null);
  const [selectedRegion, setSelectedRegion] = useState("in");
  const selectedRegionRef = useRef("in");

  // Particles (stable random values)
  const particles = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      x: 40 + Math.random() * 560,
      y: 80 + Math.random() * 400,
      size: Math.random() * 2.5 + 1,
      color: i % 2 === 0 ? "rgba(56,189,248,0.4)" : "rgba(255,106,0,0.3)",
      duration: 4 + Math.random() * 5,
      delay: Math.random() * -8,
      dx: (Math.random() - 0.5) * 60,
    }))
  ).current;

  const handleSelectRegion = useCallback((key) => {
    const s = stateRef.current;
    s.fromRotY = s.rotY;
    s.fromRotX = s.rotX;
    s.targetRotY = REGIONS[key].rotY;
    s.targetRotX = REGIONS[key].rotX;
    s.lerpT = 0;
    s.isAnimating = true;
    s.autoRotating = false;

    setSelectedRegion(key);
    selectedRegionRef.current = key;

    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      s.isAnimating = false;
      s.autoRotating = true;
    }, 3500);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function frame(ts) {
      const s = stateRef.current;
      const dt = Math.min((ts - s.lastTime) / 1000, 0.05);
      s.lastTime = ts;

      if (s.isAnimating) {
        s.lerpT = Math.min(s.lerpT + dt * 1.8, 1);
        const e = easeInOut(s.lerpT);
        s.rotY = lerp(s.fromRotY, s.targetRotY, e);
        s.rotX = lerp(s.fromRotX, s.targetRotX, e);
        if (s.lerpT >= 1) {
          s.isAnimating = false;
          s.fromRotY = s.rotY;
          s.fromRotX = s.rotX;
        }
      } else {
        s.fromRotY = s.rotY;
        s.fromRotX = s.rotX;
        if (s.autoRotating) {
          s.rotY += 0.003;
          s.fromRotY = s.rotY;
        }
      }

      s.arcTick++;
      renderGlobe(ctx, s.rotY, s.rotX, selectedRegionRef.current, s.arcTick);
      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#080a10] px-4 py-16">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 rounded-full bg-sky-400/5 blur-[80px]" />
        <div className="absolute bottom-[10%] right-[15%] w-64 h-64 rounded-full bg-orange-500/5 blur-[60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-indigo-500/3 blur-[60px]" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-0 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-orange-400/65 uppercase mb-2">

            Available Globally
          </p>
          <h1 className="text-[15px] font-bold text-white tracking-tight leading-none">
            Adaptable across
time zones{" "}
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
           
            </span>
          </h1>
        </motion.div>

        {/* Globe */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Decorative rings */}
          <div
            className="absolute rounded-full border border-white/[0.04] pointer-events-none"
            style={{ inset: -16, animation: "spin 30s linear infinite" }}
          />
          <div
            className="absolute rounded-full border border-dashed border-sky-400/[0.06] pointer-events-none"
            style={{ inset: -28, animation: "spinR 50s linear infinite" }}
          />
          <div
            className="absolute rounded-full border border-orange-500/[0.04] pointer-events-none"
            style={{ inset: -44, animation: "spin 80s linear infinite" }}
          />

          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="relative z-10 rounded-full cursor-grab active:cursor-grabbing block"
          />
        </motion.div>

        {/* Region Buttons */}
        <motion.div
          className="flex items-center gap-3 mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {REGION_BUTTONS.map((btn) => (
            <RegionButton
              key={btn.key}
              {...btn}
              isActive={selectedRegion === btn.key}
              onClick={handleSelectRegion}
            />
          ))}
        </motion.div>

        {/* Status bar */}
        <motion.div
          className="flex items-center gap-3 mt-5 font-mono text-[10px] text-white/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <span className="flex items-center gap-1.5">
            <span
              className="w-1 h-1 rounded-full bg-green-400 inline-block"
              style={{ boxShadow: "0 0 4px #4ade80" }}
            />
            Remote
          </span>
          <span className="opacity-30">|</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={selectedRegion}
              className="text-white/40"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
            >
              Viewing: {REGIONS[selectedRegion].label}
            </motion.span>
          </AnimatePresence>
          <span className="opacity-30">|</span>
          <span>Auto-rotating</span>
        </motion.div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes spinR { to { transform: rotate(-360deg); } }
      `}</style>
    </section>
  );
}
