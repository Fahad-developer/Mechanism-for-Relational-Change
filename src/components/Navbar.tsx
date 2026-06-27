"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

const mainLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Contact", href: "/contact" },
];

const moreLinks: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 group relative z-10"
        >
          <Image
            src="/mrclogo.png"
            alt="MRC"
            width={36}
            height={36}
            className="rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
          />
          <span className="text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-primary-600">
            MRC
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 sm:flex">
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link group relative px-3 py-2 text-sm font-medium text-zinc-600 transition-all duration-300 hover:text-primary-600 hover:-translate-y-0.5"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
            </a>
          ))}

          {/* MORE Dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="nav-link group relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-600 transition-all duration-300 hover:text-primary-600 hover:-translate-y-0.5"
            >
              More
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  moreOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
            </button>

            <div
              className={`absolute top-full right-0 mt-2 w-44 rounded-xl border border-zinc-200/70 bg-white p-1.5 shadow-lg shadow-zinc-500/10 backdrop-blur-xl origin-top-right transition-all duration-250 ${
                moreOpen
                  ? "opacity-100 scale-100 translate-y-0 visible"
                  : "opacity-0 scale-95 -translate-y-2 invisible"
              }`}
            >
              {moreLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`dropdown-item block rounded-lg px-3.5 py-2.5 text-sm font-medium text-zinc-600 transition-all duration-200 hover:bg-primary-50 hover:text-primary-700 hover:translate-x-1`}
                  style={{ transitionDelay: moreOpen ? `${i * 50}ms` : "0ms" }}
                  onClick={() => setMoreOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/donate"
            className="relative hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/25 transition-all duration-300 hover:bg-primary-500 hover:shadow-md hover:shadow-primary-500/30 hover:scale-[1.03] active:scale-[0.97] animate-glow-pulse"
          >
            <span className="absolute inset-0 rounded-full bg-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            Donate
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex sm:hidden flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-zinc-700 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-zinc-700 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-zinc-200/60 bg-white/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {mainLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-link block rounded-lg px-3 py-3 text-sm font-medium text-zinc-600 transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 hover:translate-x-1`}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-zinc-100 pt-1 mt-1">
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              More
            </p>
            {moreLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`mobile-link block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-500 transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 hover:translate-x-1`}
                style={{ transitionDelay: mobileOpen ? `${(mainLinks.length + i) * 60}ms` : "0ms" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="/donate"
              className="flex items-center justify-center gap-1.5 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-primary-500/25 active:scale-[0.97] transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
