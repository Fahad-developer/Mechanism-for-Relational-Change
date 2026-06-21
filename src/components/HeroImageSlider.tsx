"use client";

import { useState, useEffect, useCallback } from "react";

const images = [
  "/hero%20section/img1.jpeg",
  "/hero%20section/img2.jpeg",
  "/hero%20section/img3.jpeg",
  "/hero%20section/img4.jpg",
];

export default function HeroImageSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((i: number) => setCurrent(i), []);
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="hidden lg:flex lg:flex-col animate-fade-in-right" style={{ animationDelay: "300ms" }}>
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-amber-100 shadow-2xl">
        <div className="relative min-h-0 flex-1">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Relief work ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Navigation dots */}
          <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Banner pinned at bottom */}
        <div className="mt-auto bg-emerald-600 px-5 py-4 text-white">
          <p className="text-sm font-semibold">
            Together, we educate for change.
          </p>
        </div>
      </div>
    </div>
  );
}
