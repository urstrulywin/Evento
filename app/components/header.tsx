"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition"
        >
          Evento
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            {routes.map((route) => {
              const active = pathname === route.path;

              return (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    aria-current={active ? "page" : undefined}
                    className={`relative pb-2 font-semibold transition-colors
                    ${
                      active
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {route.name}

                    {/* underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-1 bg-indigo-600 rounded-full transition-all duration-300
                      ${active ? "w-full" : "w-0"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
