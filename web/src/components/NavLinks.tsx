"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/rankings", label: "Rankings" },
  { href: "/compare", label: "Compare" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {links.map(({ href, label }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={`px-3 py-2 rounded-md text-sm transition ${
              isActive
                ? "text-white bg-[var(--background)] border-b-2 border-[var(--accent)]"
                : "text-[var(--muted)] hover:text-white hover:bg-[var(--background)]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
