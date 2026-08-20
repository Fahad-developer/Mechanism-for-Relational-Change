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
  { label: "Impact", href: "/impact" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Contact", href: "/contact" },
];

const moreLinks: NavLink[] = [
  { label: "Leadership", href: "/leadership" },
  { label: "Reports & Policies", href: "/reports" },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-3 sm:py-3.5">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group relative z-10"
        >
          <Image
            src="/mrclogo.png"
            alt="MRC"
            width={36}
            height={36}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-primary-600">
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

        {/* Social Icons (desktop only) */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://www.instagram.com/mrcbalochistan/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" /></svg>
          </a>
          <a href="https://twitter.com/MercBalochistan" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Twitter">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="https://www.facebook.com/Mechanism-For-Rational-Change-MRC-359280190911089" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/mrc-balochistan-30206a2b1" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/donate"
            className="relative hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/25 transition-all duration-300 hover:bg-primary-500 hover:shadow-md hover:shadow-primary-500/30 hover:scale-[1.03] active:scale-[0.97] animate-glow-pulse"
          >
            <span className="absolute inset-0 rounded-full bg-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            Support Us
          </a>

          {/* Mobile Donate (visible only below sm) */}
          <a
            href="/donate"
            className="sm:hidden rounded-full bg-primary-600 p-2 text-white shadow-sm shadow-primary-500/25 transition-all active:scale-[0.97]"
            aria-label="Support Us"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex sm:hidden flex-col gap-1.5 p-2 -mr-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-zinc-700 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-zinc-700 transition-all duration-300 ${
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
        <div className="border-t border-zinc-200/60 bg-white/95 backdrop-blur-xl px-4 sm:px-6 py-4 space-y-1">
          {mainLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-link block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 hover:translate-x-1`}
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
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
