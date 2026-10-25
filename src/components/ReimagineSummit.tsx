"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface SummitPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
}

const SUMMIT_PHOTOS: SummitPhoto[] = [
  {
    id: "photo-1",
    src: "/events/IMG_3120.JPG",
    title: "From Me to Us: Champion on Stage",
    subtitle: "Opening Presentation & Advocacy Campaign",
    tag: "Stage Presentation",
    description:
      "An MRC Education Champion takes the stage under the banner of Reimagine Education Summit 2026 and Malala Fund, articulating the journey 'From Me to Us' before provincial leaders.",
  },
  {
    id: "photo-2",
    src: "/events/IMG_3167.JPG",
    title: "High-Level Stakeholders & Dignitaries Panel",
    subtitle: "Provincial Policy Dialogue",
    tag: "Dignitaries Panel",
    description:
      "Education Minister Rahila Durrani (Chief Guest), parliamentarian Sana Baloch, and distinguished education experts engaged in dialogue on systemic educational reforms in Balochistan.",
  },
  {
    id: "photo-3",
    src: "/events/IMG_3522.JPG",
    title: "Youth Advocacy in the Spotlight",
    subtitle: "Young Champions Raising Voices for Girls' Education",
    tag: "Youth Champions",
    description:
      "Young female Education Champions presenting their advocacy research at the podium microphone, challenging decision-makers on school dropout, learning environments, and girls' educational rights.",
  },
  {
    id: "photo-4",
    src: "/events/IMG_3365.JPG",
    title: "Unity for Education: Official Stage Commendation",
    subtitle: "Leadership, Organizers & Champions",
    tag: "Group Photo",
    description:
      "Education Minister Rahila Durrani, Sana Baloch, MRC leadership, and Education Champions gathered on stage holding commendation shields and certificates celebrating the summit's collective outcomes.",
  },
  {
    id: "photo-5",
    src: "/events/IMG_3392.JPG",
    title: "Grand Auditorium Gathering in Quetta",
    subtitle: "Hundreds of Stakeholders United",
    tag: "Auditorium",
    description:
      "A panoramic view of the crowded summit hall in Quetta on February 9, 2026, bringing together parliamentarians, educators, civil society, students, and community elders.",
  },
  {
    id: "photo-6",
    src: "/events/IMG_3216.JPG",
    title: "Civil Society & Media Engagement",
    subtitle: "Active Audience & Media Coverage",
    tag: "Audience Perspective",
    description:
      "Summit participants, youth fellows, and journalists attentively listening to the ministerial address and fellows' presentations during the Quetta proceedings.",
  },
  {
    id: "photo-7",
    src: "/events/IMG_3310.JPG",
    title: "Policy Insights & Structural Action",
    subtitle: "Translating Dialogue into Real Reform",
    tag: "Policy Dialogue",
    description:
      "Keynote panelists discussing actionable pathways for public school infrastructure, teacher capacity, climate-resilient schools, and inclusive curriculum development.",
  },
  {
    id: "photo-8",
    src: "/events/IMG_3360.JPG",
    title: "Honoring Champions of Change",
    subtitle: "Celebrating Action for Education Fellows",
    tag: "Recognition",
    description:
      "Education champions being formally recognized on stage by government dignitaries and the Action for Education leadership team for their tireless field advocacy.",
  },
];

const ADVOCACY_PILLARS = [
  {
    icon: "👩‍🎓",
    title: "Girls' Education",
    description: "Securing uninterrupted access to secondary and higher secondary schooling for girls.",
  },
  {
    icon: "🚪",
    title: "Dropout Interventions",
    description: "Addressing systemic socio-economic barriers driving student dropouts across districts.",
  },
  {
    icon: "⚡",
    title: "Future & STEM Skills",
    description: "Integrating modern digital literacy, scientific inquiry, and vocational competencies.",
  },
  {
    icon: "🧠",
    title: "Student Mental Health",
    description: "Promoting psychological safety, guidance counseling, and emotional well-being.",
  },
  {
    icon: "🌿",
    title: "Climate Resilient Schools",
    description: "Building disaster-ready, climate-conscious school infrastructure for Balochistan.",
  },
  {
    icon: "🏫",
    title: "Enabling Learning Spaces",
    description: "Redesigning physical classrooms into dignified, inspiring spaces where children flourish.",
  },
];

export default function ReimagineSummit() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [communiqueOpen, setCommuniqueOpen] = useState(false);

  const activePhoto = SUMMIT_PHOTOS[activePhotoIdx];

  const nextPhoto = useCallback(() => {
    setActivePhotoIdx((prev) => (prev + 1) % SUMMIT_PHOTOS.length);
  }, []);

  const prevPhoto = useCallback(() => {
    setActivePhotoIdx((prev) => (prev - 1 + SUMMIT_PHOTOS.length) % SUMMIT_PHOTOS.length);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextPhoto, prevPhoto]);

  return (
    <section className="relative mb-20 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary-400/20 via-accent-300/15 to-secondary-400/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-[350px] w-[350px] rounded-full bg-accent-400/10 blur-2xl" />

      {/* Flagship Badge & Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-primary-500/20 bg-gradient-to-r from-primary-50 via-accent-50/50 to-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-800 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
          <span>Flagship Milestone</span>
          <span className="text-primary-300">•</span>
          <span>Action for Education & Malala Fund</span>
          <span className="text-primary-300">•</span>
          <span>Quetta, Balochistan</span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Reimagine Education{" "}
          <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
            Summit 2026
          </span>
        </h2>

        <p className="mt-3 text-lg sm:text-xl font-medium tracking-wide text-accent-700 uppercase">
          Rethink. Reimagine. Redesign.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 max-w-3xl mx-auto">
          Held on <strong className="text-zinc-800">February 9, 2026</strong> in Quetta and extensively covered by{" "}
          <em>Daily Balochistan Express</em>, the summit created a historic shared platform where education stakeholders
          united around one defining purpose: the future of education in Balochistan.
        </p>
      </div>

      {/* Dignitaries & Organizers Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {/* Card 1: Chief Guest */}
        <div className="group relative overflow-hidden rounded-2xl border border-primary-200/60 bg-gradient-to-br from-white/95 to-primary-50/40 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary-300">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md shadow-primary-500/20 text-lg">
              🏛️
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary-700">Chief Guest</span>
              <h4 className="text-sm font-bold text-zinc-900">Hon. Rahila Durrani</h4>
              <p className="text-xs text-zinc-500">Education Minister, Balochistan</p>
            </div>
          </div>
        </div>

        {/* Card 2: Distinguished Guest */}
        <div className="group relative overflow-hidden rounded-2xl border border-accent-200/60 bg-gradient-to-br from-white/95 to-accent-50/40 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-accent-300">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white shadow-md shadow-accent-500/20 text-lg">
              📜
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent-700">Distinguished Guest</span>
              <h4 className="text-sm font-bold text-zinc-900">Sana Baloch</h4>
              <p className="text-xs text-zinc-500">Senior Parliamentarian & Advocate</p>
            </div>
          </div>
        </div>

        {/* Card 3: Organized By */}
        <div className="group relative overflow-hidden rounded-2xl border border-secondary-200/60 bg-gradient-to-br from-white/95 to-secondary-50/40 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-secondary-300">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary-500 text-white shadow-md shadow-secondary-500/20 text-lg">
              🤝
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-700">Organized By</span>
              <h4 className="text-sm font-bold text-zinc-900">MRC & Action for Education</h4>
              <p className="text-xs text-zinc-500">Supported by the Malala Fund</p>
            </div>
          </div>
        </div>

        {/* Card 4: The Core Heart */}
        <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-white/95 to-emerald-50/40 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-300">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-500/20 text-lg">
              🌟
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Heart of the Summit</span>
              <h4 className="text-sm font-bold text-zinc-900">Education Champions</h4>
              <p className="text-xs text-zinc-500">Grassroots Fellows & Changemakers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Showcase (Story + Interactive Photo Gallery) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: The Narrative & Vision (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quote Card */}
          <div className="relative overflow-hidden rounded-3xl border border-primary-200/70 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 p-7 text-white shadow-xl shadow-primary-900/10">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 h-28 w-28 rounded-full bg-accent-400/20 blur-xl" />
            <div className="relative">
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-300 backdrop-blur-md">
                Core Summit Creed
              </span>
              <p className="mt-4 text-lg sm:text-xl font-medium leading-snug tracking-tight text-white/95 italic">
                &ldquo;Because every child deserves an education that enables them to learn, grow, lead, and enjoy their
                educational rights.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-white/10 text-xs text-primary-200">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                <span>Reimagine Education Manifesto • Quetta</span>
              </div>
            </div>
          </div>

          {/* Narrative Summary Card */}
          <div className="rounded-3xl border border-zinc-200/80 bg-white/80 p-6 sm:p-7 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-100 text-primary-700 text-sm font-bold">
                📢
              </span>
              <h3 className="text-lg font-bold text-zinc-900">At the Heart: The Champions & Fellows</h3>
            </div>

            <div className="space-y-3.5 text-sm leading-relaxed text-zinc-600">
              <p>
                The summit brought forward the ground realities experienced throughout the educational journey in Balochistan.
                MRC&apos;s Education Champions and Fellows did far more than identify systemic problems—they invited decision-makers,
                parliamentarians, and stakeholders to <strong className="text-zinc-800">listen, reflect, and act</strong>.
              </p>
              <p>
                The dialogue served as an urgent reminder: transformation cannot be carried out by parents or schools alone.
                Every sector of society holds a direct stake in reshaping our schools.
              </p>
            </div>

            {/* Read Communique Button */}
            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setCommuniqueOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span>Read Full Summit Story</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <span className="text-xs text-zinc-400 font-medium">8 Official Photos</span>
            </div>
          </div>

          {/* 6 Key Advocacy Themes Grid */}
          <div className="rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-zinc-50/70 to-white p-5 sm:p-6 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
              <span>Presented Advocacy Campaigns</span>
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {ADVOCACY_PILLARS.map((pillar, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-200/60 bg-white p-2.5 transition-all duration-200 hover:border-primary-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{pillar.icon}</span>
                    <span className="text-xs font-semibold text-zinc-800 leading-tight">{pillar.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Photo Gallery Showcase (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Featured Photo Box */}
          <div className="group relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl transition-all">
            {/* Main Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Top Tags Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                  <span className="h-2 w-2 rounded-full bg-accent-400" />
                  {activePhoto.tag}
                </span>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-black/60 px-2.5 py-1 text-xs font-mono text-zinc-300 backdrop-blur-md border border-white/10">
                    {activePhotoIdx + 1} / {SUMMIT_PHOTOS.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30"
                    title="Expand Fullscreen"
                    aria-label="Expand image"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Nav Arrows */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-primary-600 hover:scale-110 active:scale-95 focus:outline-none"
                aria-label="Previous photo"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-primary-600 hover:scale-110 active:scale-95 focus:outline-none"
                aria-label="Next photo"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                  {activePhoto.subtitle}
                </span>
                <h4 className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-sm">
                  {activePhoto.title}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-200 line-clamp-2 sm:line-clamp-none max-w-2xl leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Carousel Strip */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {SUMMIT_PHOTOS.map((photo, idx) => {
              const isActive = idx === activePhotoIdx;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`group relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                    isActive
                      ? "border-primary-500 ring-2 ring-primary-400 ring-offset-2 scale-105 shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100 hover:scale-102"
                  }`}
                  aria-label={`Select photo ${idx + 1}`}
                >
                  <Image src={photo.src} alt={photo.title} fill sizes="100px" className="object-cover" />
                  {isActive && (
                    <div className="absolute inset-0 bg-primary-600/20" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Gallery Footnote */}
          <div className="flex items-center justify-between text-xs text-zinc-500 px-1 pt-1">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Click any thumbnail to preview • Click expand for high-res view
            </span>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="font-medium text-primary-600 hover:text-primary-700 underline"
            >
              Open Full Lightbox
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl animate-fade-in-up"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Lightbox Nav Prev */}
          <button
            type="button"
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-primary-600 hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Previous photo"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Lightbox Nav Next */}
          <button
            type="button"
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-primary-600 hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Next photo"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Lightbox Content Container */}
          <div className="relative flex flex-col items-center max-w-5xl w-full max-h-[90vh]">
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center max-w-2xl px-4 text-white">
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="rounded-full bg-accent-500/20 border border-accent-400/40 px-2.5 py-0.5 text-xs font-semibold text-accent-300">
                  {activePhoto.tag}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {activePhotoIdx + 1} of {SUMMIT_PHOTOS.length}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{activePhoto.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{activePhoto.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Full Communique / Story Modal */}
      {communiqueOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-fade-in-up"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-zinc-100 pb-4">
              <div>
                <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-800">
                  Official Summit Communiqué
                </span>
                <h3 className="mt-2 text-2xl font-bold text-zinc-900">
                  Reimagine Education — Rethink. Reimagine. Redesign.
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Quetta, Balochistan • February 9, 2026 • Daily Balochistan Express Coverage
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCommuniqueOpen(false)}
                className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
              <p className="font-semibold text-zinc-800">
                The Reimagine Education Summit, organized by Mechanism for Relational Change (MRC) under Action for
                Education, created a shared platform where education stakeholders came together around one unified purpose:
                the future of education in Balochistan.
              </p>

              <div className="rounded-2xl border-l-4 border-primary-600 bg-primary-50/50 p-4 text-sm text-primary-900">
                <p className="font-medium">
                  With Education Minister <strong>Rahila Durrani</strong> as Chief Guest and <strong>Sana Baloch</strong>{" "}
                  among the participants, the summit connected government representatives, parliamentarians, education
                  experts, civil society, youth, and community stakeholders.
                </p>
              </div>

              <h4 className="text-base font-bold text-zinc-900 pt-2">The Heart of the Summit</h4>
              <p>
                At the heart of the summit were MRC’s Education Champions and Fellows. They brought forward the lived
                realities they experience throughout their educational journey across Balochistan.
              </p>

              <p>
                Through their advocacy campaigns, they courageously raised issues around <strong>girls’ education</strong>,{" "}
                <strong>children’s educational rights</strong>, <strong>school dropout</strong>, <strong>future skills</strong>,{" "}
                <strong>mental health</strong>, <strong>climate change</strong>, and the <strong>learning environment</strong>.
              </p>

              <p>
                They did more than identify problems. They invited decision-makers and education stakeholders to{" "}
                <em>listen, reflect, and act</em>.
              </p>

              <h4 className="text-base font-bold text-zinc-900 pt-2">A Shared Responsibility</h4>
              <p>
                The summit stood as an undeniable reminder that education cannot be transformed by parents or schools alone.
                Every education stakeholder—from grassroots families to provincial policy makers—has a defining role to play.
              </p>

              <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-5 text-white text-center">
                <p className="text-base sm:text-lg font-semibold italic text-accent-300">
                  &ldquo;Because every child deserves an education that enables them to learn, grow, lead, and enjoy their
                  educational rights.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  <span>Rethink</span>
                  <span>•</span>
                  <span>Reimagine</span>
                  <span>•</span>
                  <span>Redesign</span>
                  <span>•</span>
                  <span className="text-accent-400">And play your part.</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setCommuniqueOpen(false)}
                className="rounded-xl bg-zinc-800 px-5 py-2.5 text-xs font-semibold text-white hover:bg-zinc-900 transition-colors"
              >
                Close Communiqué
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
