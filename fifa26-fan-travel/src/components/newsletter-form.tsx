"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex flex-col gap-2 sm:flex-row", className)}>
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-11 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-emerald-500/50 focus:ring-2"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-11 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 text-sm font-bold text-zinc-950 transition hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "…" : "Join"}
      </button>
      {status === "ok" && <p className="text-xs text-emerald-400 sm:ml-2 sm:self-center">You’re in.</p>}
      {status === "err" && <p className="text-xs text-rose-400 sm:ml-2 sm:self-center">Try again shortly.</p>}
    </form>
  );
}
