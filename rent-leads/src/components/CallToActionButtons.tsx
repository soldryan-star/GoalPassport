"use client";

import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";

const DEFAULT_PHONE = "14165550100";

function getPhoneHref(): string {
  const raw = process.env.NEXT_PUBLIC_PHONE ?? DEFAULT_PHONE;
  const digits = raw.replace(/\D/g, "");
  return `tel:${digits.length >= 10 ? "+" + digits : raw}`;
}

function getWhatsAppHref(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP ?? process.env.NEXT_PUBLIC_PHONE ?? DEFAULT_PHONE;
  const digits = raw.replace(/\D/g, "");
  const number = digits.length >= 10 ? digits : DEFAULT_PHONE.replace(/\D/g, "");
  return `https://wa.me/${number}`;
}

export default function CallToActionButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={getPhoneHref()}
        onClick={trackPhoneClick}
        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
      >
        <span aria-hidden>📞</span>
        Call now
      </a>
      <a
        href={getWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-[#25D366] bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#20BD5A] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <span aria-hidden>WhatsApp</span>
        Chat on WhatsApp
      </a>
    </div>
  );
}
