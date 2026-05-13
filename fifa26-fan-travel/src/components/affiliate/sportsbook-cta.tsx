"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  getSportsbookAllowedCountries,
  getSportsbookOutboundUrl,
  isSportsbookFeatureEnabled,
} from "@/lib/affiliate";
import { RG } from "@/constants/responsible-gambling";

const SESSION_KEY = "groundline26_sportsbook_gate";

type CountryOption = { code: string; label: string };

const COUNTRY_OPTIONS: CountryOption[] = [
  { code: "US", label: "United States" },
  { code: "CA", label: "Canada" },
  { code: "MX", label: "Mexico" },
  { code: "OTHER", label: "Other / not listed" },
];

export function SportsbookCta() {
  const enabled = useMemo(() => isSportsbookFeatureEnabled(), []);
  const outbound = useMemo(() => getSportsbookOutboundUrl(), []);
  const allowed = useMemo(() => getSportsbookAllowedCountries(), []);

  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState(false);
  const [ageOk, setAgeOk] = useState(false);
  const [country, setCountry] = useState<string>("US");
  const [sessionPassed, setSessionPassed] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      setSessionPassed(sessionStorage.getItem(SESSION_KEY) === "1");
    } catch {
      setSessionPassed(false);
    }
  }, []);

  const countryAllowed = country !== "OTHER" && allowed.includes(country);
  const canProceed = ageOk && countryAllowed && outbound;

  const passGate = useCallback(() => {
    if (!canProceed) return;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setSessionPassed(true);
    setOpen(false);
  }, [canProceed]);

  if (!hydrated) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 p-6 text-sm text-zinc-300">
        <p className="font-display text-lg text-white">Sportsbook zone</p>
        <p className="mt-2 text-zinc-500">Loading…</p>
      </div>
    );
  }

  if (!enabled) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 p-6 text-sm text-zinc-300">
        <p className="font-display text-lg text-white">Sportsbook zone</p>
        <p className="mt-2 leading-relaxed">
          Sportsbook affiliate CTAs are disabled. Set <code className="rounded bg-black/40 px-1 text-xs">NEXT_PUBLIC_SPORTSBOOK_ENABLED=true</code>{" "}
          and provide an outbound partner URL only after legal review and operator approval.
        </p>
        <p className="mt-3 text-xs text-zinc-500">{RG.ageDisclaimerUS}</p>
        <p className="mt-2 text-xs text-zinc-500">{RG.general}</p>
        <Link href="/legal/affiliate-disclosure" className="mt-4 inline-block text-xs font-semibold text-emerald-400 hover:text-emerald-300">
          Affiliate &amp; betting disclosure →
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 p-6 text-sm text-zinc-300">
      <p className="font-display text-lg text-white">Sportsbook zone</p>
      <p className="mt-2 leading-relaxed">
        Partner odds and promos (affiliate). Geo and age controls below are self-attestation only — replace with counsel-approved IP
        geo and state rules before spending paid traffic.
      </p>

      <ul className="mt-3 list-inside list-disc space-y-1 text-xs text-zinc-400">
        <li>{RG.ageDisclaimerUS}</li>
        <li>
          US helpline:{" "}
          <a className="text-emerald-400 underline" href="tel:+18005224700">
            {RG.ncpg.phone}
          </a>{" "}
          ·{" "}
          <a className="text-emerald-400 underline" href={RG.ncpg.url} target="_blank" rel="noopener noreferrer">
            {RG.ncpg.label}
          </a>
        </li>
        <li>
          Canada (example):{" "}
          <a className="text-emerald-400 underline" href={RG.canada.url} target="_blank" rel="noopener noreferrer">
            {RG.canada.label}
          </a>
        </li>
        <li>
          Mexico:{" "}
          <a className="text-emerald-400 underline" href={RG.mexico.url} target="_blank" rel="noopener noreferrer">
            {RG.mexico.label}
          </a>
        </li>
      </ul>
      <p className="mt-2 text-xs text-zinc-500">{RG.general}</p>

      {!outbound && (
        <p className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
          Set <code className="rounded bg-black/30 px-1">NEXT_PUBLIC_SPORTSBOOK_OUTBOUND_URL</code> to your approved affiliate landing
          URL.
        </p>
      )}

      {sessionPassed && outbound ? (
        <a
          href={outbound}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 text-sm font-bold text-zinc-950 transition hover:opacity-90"
        >
          Go to partner site
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          disabled={!outbound}
          className="mt-4 w-full rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 text-sm font-bold text-zinc-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {outbound ? "Continue (age & region)" : "Configure outbound URL"}
        </button>
      )}

      <Link href="/legal/affiliate-disclosure" className="mt-4 inline-block text-xs font-semibold text-emerald-400 hover:text-emerald-300">
        Full disclosure →
      </Link>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sb-gate-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900 p-6 text-left text-sm text-zinc-300 shadow-2xl">
            <h2 id="sb-gate-title" className="font-display text-2xl text-white">
              Confirm eligibility
            </h2>
            <p className="mt-2 text-xs text-zinc-500">
              Self-attestation is not a substitute for IP-based compliance. Use only where your counsel approves.
            </p>

            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input type="checkbox" checked={ageOk} onChange={(e) => setAgeOk(e.target.checked)} className="mt-1 h-4 w-4 rounded border-zinc-500" />
              <span>I am 21 or older (US) or meet the legal age in my jurisdiction for sports wagering.</span>
            </label>

            <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Country / region
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white"
              >
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>

            {!countryAllowed && country !== "OTHER" && (
              <p className="mt-3 text-xs text-amber-300">Your selection is outside configured allowed countries ({allowed.join(", ")}).</p>
            )}
            {country === "OTHER" && <p className="mt-3 text-xs text-amber-300">Partner links are hidden for &quot;Other&quot; — adjust policy with counsel.</p>}

            <div className="mt-6 flex gap-2">
              <button type="button" onClick={() => setOpen(false)} className="flex-1 rounded-lg border border-white/15 py-2 text-sm font-semibold text-white hover:bg-white/5">
                Cancel
              </button>
              <button
                type="button"
                onClick={passGate}
                disabled={!canProceed}
                className="flex-1 rounded-lg bg-emerald-500 py-2 text-sm font-bold text-zinc-950 disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
