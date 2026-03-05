"use client";

import { useCallback } from "react";

export default function ScrollToLeadFormLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstInput = el.querySelector<HTMLInputElement | HTMLSelectElement>(
        'input:not([type="hidden"]), select'
      );
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 400);
      }
    }
  }, []);

  return (
    <a href="#lead-form" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
