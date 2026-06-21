"use client";

import { useState, useCallback } from "react";

const images = [
  { src: "/gallery/IMG_7900.JPG", category: "Education" },
  { src: "/gallery/489504353_1113812354124124_2091361709066204155_n.jpg", category: "Events" },
  { src: "/gallery/19F3DEBD-2095-4094-A5A4-DACE3E5497DA_1_102_o.jpeg", category: "Education" },
  { src: "/gallery/IMG_7787.JPG", category: "Empowerment" },
  { src: "/gallery/487467818_1106452041526822_1928382579394673983_n.jpg", category: "Events" },
  { src: "/gallery/469517428_18041818379332647_1774132597050493984_n.jpg", category: "Education" },
  { src: "/gallery/469528012_18041818664332647_8156319767993052669_n.jpg", category: "Education" },
  { src: "/gallery/481260699_947067164254963_2182810296513954995_n.jpg", category: "Events" },
  { src: "/gallery/IMG_9616.JPG", category: "Empowerment" },
  { src: "/gallery/IMG_0279.JPG", category: "Community" },
  { src: "/gallery/womenEmpowerment.JPG", category: "Empowerment" },
  { src: "/gallery/7A0DF969-DF2C-49EE-8655-398FAEDADAF8_1_105_c.jpeg", category: "Community" },
  { src: "/gallery/IMG_1772.JPG", category: "Education" },
  { src: "/gallery/IMG_7262.JPG", category: "Community" },
  { src: "/gallery/IMG_6584.JPG", category: "Empowerment" },
  { src: "/gallery/B457D408-486D-4A99-B2A5-DDCCE30CA4A3_1_105_c.jpeg", category: "Community" },
  { src: "/gallery/7ff9bc79-2f8d-4c8c-b733-0321cd7a3a8d.jpeg", category: "Events" },
  { src: "/gallery/WhatsApp Image 2026-02-23 at 12.07.37 PM.jpeg", category: "Events" },
];

const categories = ["All", "Education", "Empowerment", "Events", "Community"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  const next = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : 0));
  }, [filtered.length]);

  const prev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0));
  }, [filtered.length]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Moments That Matter
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Our{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            A visual journey through our programs, events, and the communities we serve across Balochistan.
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/20 via-white to-accent-50/20 px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Filter tabs */}
          <div className="animate-fade-in-up mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-primary-600 text-white shadow-md shadow-primary-200/40"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-primary-200 hover:text-primary-600 hover:bg-primary-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="animate-fade-in-up group relative mb-4 w-full overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${(i % 9) * 80}ms` }}
              >
                <img
                  src={img.src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="inline-block rounded-full bg-white/90 px-3 py-0.5 text-xs font-semibold text-zinc-700 backdrop-blur-sm">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image */}
          <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={`Gallery ${lightbox + 1}`}
              className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
