"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isUpcoming: boolean;
}

export default function EventsFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && events.length === 0) {
      fetch("/api/events")
        .then((r) => r.json())
        .then((data) => {
          const upcoming = (data.events || []).filter((e: Event) => e.isUpcoming);
          setEvents(upcoming);
        })
        .catch(() => {});
    }
  }, [isOpen, events.length]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        cardRef.current &&
        !cardRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  return (
    <>
      {/* Floating Icon Button */}
      <div className="fixed bottom-6 left-6 z-50">
        {/* Attract bubble */}
        {!isOpen && (
          <div className="absolute bottom-16 left-0 animate-fade-in-up">
            <div className="relative rounded-2xl rounded-bl-sm bg-white border border-zinc-200 px-4 py-2.5 shadow-lg shadow-zinc-200/60">
              <p className="text-sm font-semibold text-zinc-700 whitespace-nowrap">📅 Upcoming Events</p>
              <p className="text-xs text-zinc-400 mt-0.5">See what&apos;s happening!</p>
            </div>
            <div className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-white border-b border-r border-zinc-200" />
          </div>
        )}
        {/* Pulse rings */}
        <span className="absolute inset-0 h-14 w-14 animate-ping rounded-full bg-accent-400/30" style={{ animationDuration: "2.5s" }} />
        <span className="absolute inset-0 h-14 w-14 animate-ping rounded-full bg-accent-400/20" style={{ animationDuration: "2.5s", animationDelay: "0.6s" }} />
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-xl shadow-accent-300/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent-300/50 active:scale-95 animate-bounce"
          style={{ animationDuration: "2.5s" }}
          aria-label="Upcoming events"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Events Card */}
      {isOpen && (
        <div
          ref={cardRef}
          className="fixed bottom-24 left-6 z-40 flex max-h-[70vh] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-300/30 animate-fade-in-up sm:w-[420px]"
        >
          {/* Header */}
          <div className="shrink-0 border-b border-zinc-100 bg-gradient-to-r from-accent-400 to-accent-600 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Upcoming Events</p>
                <p className="text-xs text-white/70">Stay updated with MRC</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4">
            {events.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-500">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium text-zinc-600">No upcoming events</p>
                <p className="mt-1 text-xs text-zinc-400">Check back soon!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {events.map((event) => (
                  <div
                    key={event._id}
                    className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-accent-200 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex shrink-0 flex-col items-center rounded-lg bg-accent-50 px-2.5 py-1.5 text-center">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-600">
                          {new Date(event.date).toLocaleString("default", { month: "short" })}
                        </span>
                        <span className="text-lg font-bold text-accent-700">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-zinc-800 leading-snug">
                          {event.title}
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500">
                          <span className="inline-flex items-center gap-1">
                            <svg className="h-3.5 w-3.5 text-accent-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            {event.time}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <svg className="h-3.5 w-3.5 text-accent-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            {event.location}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-zinc-500 line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="shrink-0 border-t border-zinc-100 bg-zinc-50 px-5 py-3">
            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97]"
            >
              View All Events
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
