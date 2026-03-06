"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("lead-form");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-100px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstInput = el.querySelector<HTMLInputElement | HTMLSelectElement>(
        'input:not([type="hidden"]), select'
      );
      if (firstInput) setTimeout(() => firstInput.focus(), 400);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/90"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <p className="text-sm font-medium text-zinc-700 sm:text-base">
          <span className="sm:hidden">Free Toronto rental alerts.</span>
          <span className="hidden sm:inline">Get new Toronto rental listings first — free alerts.</span>
        </p>
        <a
          href="#lead-form"
          onClick={scrollToForm}
          className="shrink-0 rounded-lg bg-zinc-900 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 min-h-[44px] flex items-center justify-center"
        >
          Get free alerts
        </a>
      </div>
    </div>
  );
}
