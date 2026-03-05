import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl"
        >
          Toronto Rent Leads
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 sm:text-base"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
