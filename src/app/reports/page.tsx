"use client";

import { useState, useRef, useEffect } from "react";

const documents = [
  {
    title: "Tax Return",
    subtitle: "2025",
    tag: "Financial",
    description: "Return of Income filed voluntarily for the complete fiscal year 2025.",
    file: "/certificate/114(1) (Return of Income filed voluntarily for complete year)_2025 (28).pdf",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    shadowColor: "shadow-emerald-500/25",
    hoverShadow: "hover:shadow-emerald-500/30",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-700",
    glowColor: "from-emerald-400 to-teal-400",
    number: "01",
  },
  {
    title: "Audit Report",
    subtitle: "2025",
    tag: "Compliance",
    description: "Independent audited financial statements verified for fiscal year 2025.",
    file: "/certificate/Audit Report 2025.pdf",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    shadowColor: "shadow-blue-500/25",
    hoverShadow: "hover:shadow-blue-500/30",
    tagBg: "bg-blue-500/10",
    tagText: "text-blue-700",
    glowColor: "from-blue-400 to-indigo-400",
    number: "02",
  },
  {
    title: "Memorandum of\nAssociation",
    subtitle: "2014",
    tag: "Founding Document",
    description: "Official founding charter establishing MRC as a registered non-profit organization.",
    file: "/certificate/Memorandum of Association.pdf",
    gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
    shadowColor: "shadow-purple-500/25",
    hoverShadow: "hover:shadow-purple-500/30",
    tagBg: "bg-purple-500/10",
    tagText: "text-purple-700",
    glowColor: "from-purple-400 to-violet-400",
    number: "03",
  },
  {
    title: "Tax Registration\nCertificate",
    subtitle: "2014",
    tag: "Legal",
    description: "Official taxpayer registration certificate issued by the Federal Board of Revenue.",
    file: "/certificate/TaxPayer Registration Certificate.pdf",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    shadowColor: "shadow-amber-500/25",
    hoverShadow: "hover:shadow-amber-500/30",
    tagBg: "bg-amber-500/10",
    tagText: "text-amber-700",
    glowColor: "from-amber-400 to-orange-400",
    number: "04",
  },
];

function DocCard({ doc, index }: { doc: typeof documents[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const isLarge = index === 2 || index === 3;

  return (
    <div
      ref={cardRef}
      className={`group relative ${isLarge ? 'sm:col-span-2 lg:col-span-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered ? `perspective(800px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg)` : 'perspective(800px) rotateY(0deg) rotateX(0deg)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
    >
      <a
        href={doc.file}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${doc.gradient} shadow-2xl ${doc.shadowColor} transition-all duration-500 hover:${doc.hoverShadow} hover:-translate-y-3`}>
          {/* Currency guilloche pattern - wavy fingerprint lines */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`guilloche-${index}`} x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
                {/* Concentric arcs - like fingerprint ridges */}
                <path d="M-10,30 Q30,0 60,30 Q90,60 130,30" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6"/>
                <path d="M-10,30 Q30,10 60,30 Q90,50 130,30" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5"/>
                <path d="M-10,30 Q30,20 60,30 Q90,40 130,30" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
                <path d="M-10,30 Q30,30 60,30 Q90,30 130,30" fill="none" stroke="white" strokeWidth="0.3" opacity="0.3"/>
                <path d="M-10,30 Q30,40 60,30 Q90,20 130,30" fill="none" stroke="white" strokeWidth="0.4" opacity="0.4"/>
                <path d="M-10,30 Q30,50 60,30 Q90,10 130,30" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5"/>
                <path d="M-10,30 Q30,60 60,30 Q90,0 130,30" fill="none" stroke="white" strokeWidth="0.8" opacity="0.6"/>
                {/* Cross-hatch wavy lines for texture */}
                <path d="M0,0 Q20,15 40,0 Q60,-15 80,0 Q100,15 120,0" fill="none" stroke="white" strokeWidth="0.4" opacity="0.25"/>
                <path d="M0,60 Q20,45 40,60 Q60,75 80,60 Q100,45 120,60" fill="none" stroke="white" strokeWidth="0.4" opacity="0.25"/>
                <path d="M-20,15 Q0,30 20,15 Q40,0 60,15 Q80,30 100,15 Q120,0 140,15" fill="none" stroke="white" strokeWidth="0.3" opacity="0.2"/>
                <path d="M-20,45 Q0,30 20,45 Q40,60 60,45 Q80,30 100,45 Q120,60 140,45" fill="none" stroke="white" strokeWidth="0.3" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#guilloche-${index})`} />
          </svg>
          {/* Fingerprint circular pattern overlay */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`fp-${index}`} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="8" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="14" fill="none" stroke="white" strokeWidth="0.4"/>
                <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="0.3"/>
                <circle cx="40" cy="40" r="26" fill="none" stroke="white" strokeWidth="0.25"/>
                <circle cx="40" cy="40" r="32" fill="none" stroke="white" strokeWidth="0.2"/>
                <circle cx="40" cy="40" r="38" fill="none" stroke="white" strokeWidth="0.15"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#fp-${index})`} />
          </svg>
          {/* Fine diagonal security lines */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`sec-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#sec-${index})`} />
          </svg>
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          {/* Big background number */}
          <div className="absolute right-4 top-2 text-[8rem] font-black leading-none text-white/[0.06] pointer-events-none select-none transition-all duration-700 group-hover:text-white/10 group-hover:scale-110">
            {doc.number}
          </div>

          {/* Content */}
          <div className="relative p-7 sm:p-8 flex flex-col min-h-[260px] justify-between">
            {/* Top section */}
            <div>
              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm">
                <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
                {doc.tag}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-white leading-tight whitespace-pre-line tracking-tight drop-shadow-sm">
                {doc.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-white/70 max-w-xs">
                {doc.description}
              </p>
            </div>

            {/* Bottom: Year + Download */}
            <div className="flex items-end justify-between mt-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Year</span>
                <p className="text-3xl font-black text-white/30 tracking-tighter leading-none mt-1">{doc.subtitle}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-white/60 tracking-wide opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  View
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:bg-white group-hover:text-gray-800 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl">
                  <svg className="h-5 w-5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Hover glow effect */}
          <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${doc.glowColor} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-20 pointer-events-none`} />
        </div>
      </a>
    </div>
  );
}

export default function ReportsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pt-28 pb-16 sm:pb-20">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl animate-float-reverse" />

        {/* Dot pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #1b6b5c 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 shadow-sm border border-emerald-100 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Transparency &amp; Governance</span>
          </div>

          <h1 className="mt-6 animate-fade-in-up text-5xl font-black tracking-tight text-gray-900 sm:text-6xl lg:text-7xl" style={{ animationDelay: "100ms" }}>
            Reports &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Policies
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-full blur-sm" />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500" style={{ animationDelay: "200ms" }}>
            Access our financial reports, audit statements, legal documents, and organizational policies, all in one place.
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-gray-50/50 via-white to-emerald-50/20 px-6 py-16 sm:py-24 lg:px-8">
        {/* Dot pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(circle, #1b6b5c 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {documents.map((doc, i) => (
              <div
                key={doc.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <DocCard doc={doc} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Certificate */}
      <section className="relative overflow-hidden bg-white px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="animate-fade-in-up text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2 border border-emerald-100">
              <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Verified &amp; Certified</span>
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Official Registration{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Certificate</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-gray-500">
              Mechanism for Rational Change officially registered since 2014.
            </p>
          </div>

          {/* Certificate Card */}
          <div className="mt-12 group relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-200/40 transition-all duration-700 group-hover:shadow-3xl group-hover:-translate-y-2">
              {/* Gradient top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-0 sm:px-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 shadow-sm">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Registration Certificate</h3>
                    <p className="text-xs text-gray-400">BCRA • Since 2014</p>
                  </div>
                </div>
                <a
                  href="/certificate/MRC-registration-certificate.jpeg"
                  download
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:scale-110"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>

              {/* Image */}
              <div className="px-6 pt-4 pb-0 sm:px-8">
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50">
                  <img
                    src="/certificate/MRC-registration-certificate.jpeg"
                    alt="MRC Registration Certificate — Mechanism for Rational Change, registered 2014 under BCRA"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{ maxHeight: "500px" }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 mx-6 sm:mx-8 mb-5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 px-5 py-3 flex items-center justify-between">
                <p className="text-xs font-medium text-emerald-700">
                  Registered under the Societies Registration Act Khuzdar, Balochistan, Pakistan
                </p>
                <div className="hidden sm:flex items-center gap-1.5 text-emerald-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

        {/* Dot pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider text-white/60">Need More Information?</span>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Want to{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Learn More</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400">
            Contact us for detailed policy documents, additional reports, or to request copies of any publication.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Contact Us
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="/leadership"
              className="group w-full sm:w-auto rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                Our Leadership
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
