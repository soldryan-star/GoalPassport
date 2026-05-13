"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/cities", label: "Cities" },
  { href: "/hotels", label: "Hotels" },
  { href: "/match-guides", label: "Match Guides" },
  { href: "/sports-bars", label: "Sports Bars" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950 backdrop-blur-xl dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center rounded-lg outline-offset-2 focus-visible:outline focus-visible:ring-2 focus-visible:ring-emerald-500/60"
          aria-label="GoalPassport home"
        >
          <span className="relative block h-8 w-[min(100%,200px)] sm:h-9 sm:w-[min(100%,260px)] lg:h-10 lg:w-[min(100%,300px)]">
            <Image
              src="/goalpassport-wordmark.png"
              alt="GoalPassport"
              width={1024}
              height={341}
              className="h-full w-full object-contain object-left"
              sizes="(max-width: 640px) 200px, 300px"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition",
                  active ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <button
            type="button"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-white lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-zinc-950/95 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-200 hover:bg-white/5"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
