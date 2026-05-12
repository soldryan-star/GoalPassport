"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-11T22:00:00Z").getTime();

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownFifa() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  const cells = [
    { label: "Days", value: d > 99 ? String(d) : String(d).padStart(2, "0") },
    { label: "Hrs", value: pad(h) },
    { label: "Min", value: pad(m) },
    { label: "Sec", value: pad(s) },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {cells.map((c) => (
        <div
          key={c.label}
          className="rounded-xl border border-white/10 bg-black/30 px-2 py-3 text-center backdrop-blur-md sm:px-3 sm:py-4"
        >
          <div className="font-display text-2xl tabular-nums text-white sm:text-3xl">{c.value}</div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">{c.label}</div>
        </div>
      ))}
    </div>
  );
}
