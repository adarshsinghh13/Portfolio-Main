"use client";

import { useEffect, useState } from "react";

export default function Clock({ timezone = "Asia/Kolkata" }: { timezone?: string }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const tzTime = new Date(
        now.toLocaleString("en-US", { timeZone: timezone })
      );

      setTime(tzTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Smooth movement
  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">

      {/* OUTER RINGS */}
      <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5 opacity-30" />
      <div className="absolute w-[480px] h-[480px] rounded-full border border-white/5 opacity-20" />

      {/* CLOCK BODY */}
      <div className="relative w-full h-full rounded-full bg-black border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)]">

        {/* INNER NUMBERS (1–12) */}
        {[...Array(12)].map((_, i) => {
          const hour = i === 0 ? 12 : i;
          const angle = i * 30;

          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 text-[11px] text-gray-300 font-medium"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateY(-135px)
                  rotate(-${angle}deg)
                `,
              }}
            >
              {hour}
            </div>
          );
        })}

        {/* OUTER NUMBERS (13–24) */}
        {[...Array(12)].map((_, i) => {
          const hour = i + 13;
          const angle = i * 30;

          return (
            <div
              key={`outer-${i}`}
              className="absolute left-1/2 top-1/2 text-[9px] text-gray-500"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateY(-175px)
                  rotate(-${angle}deg)
                `,
              }}
            >
              {hour}
            </div>
          );
        })}

        {/* INNER RING */}
        <div className="absolute inset-2 rounded-full border border-white/10 opacity-30" />

        {/* TICKS */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`absolute left-1/2 top-1/2 ${
              i % 5 === 0 ? "w-[3px] h-[16px]" : "w-[1px] h-[10px]"
            } bg-white/70 origin-bottom`}
            style={{
              transform: `rotate(${i * 6}deg) translate(-50%, -185px)`
            }}
          />
        ))}

        {/* HOUR HAND */}
        <div
          className="absolute left-1/2 top-1/2 w-[6px] h-[90px] bg-white rounded-full origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`
          }}
        />

        {/* MINUTE HAND */}
        <div
          className="absolute left-1/2 top-1/2 w-[3px] h-[130px] bg-gray-300 rounded-full origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`
          }}
        />

        {/* SECOND HAND */}
        <div
          className="absolute left-1/2 top-1/2 w-[2px] h-[160px] bg-white/70 rounded-full origin-bottom"
          style={{
            transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`
          }}
        />

        {/* CENTER DOT */}
        <div className="absolute w-4 h-4 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]" />

      </div>
    </div>
  );
}