"use client";

import { useRef, useEffect, useState } from "react";

/* ── Animated Counter Hook ── */
function useCountUp(target: number, suffix = "", startOnView = true) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(!startOnView);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    const el = ref.current;
    if (!el) return;
    const duration = 2200;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * target);
      if (!el) return;
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [started, target, suffix]);

  return ref;
}

/* ── Progress Bar ── */
function ProgressBar({ percentage, color, delay = 0 }: { percentage: number; color: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-100">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-[1.5s] ease-out`}
        style={{ width: visible ? `${percentage}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

/* ── Floating Particle ── */
function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Data ── */
const heroBigNumbers = [
  { value: 180, suffix: "", label: "Schools Reached", sub: "across Balochistan", gradient: "from-emerald-400 to-teal-500", ringColor: "border-emerald-400/30" },
  { value: 1800, suffix: "+", label: "Girls Trained on STEM", sub: "through Science Clubs", gradient: "from-amber-400 to-orange-500", ringColor: "border-amber-400/30" },
  { value: 1300, suffix: "+", label: "Girls Returned to School", sub: "through advocacy", gradient: "from-blue-400 to-indigo-500", ringColor: "border-blue-400/30" },
  { value: 700, suffix: "", label: "Teachers Trained", sub: "in participatory methods", gradient: "from-violet-400 to-purple-500", ringColor: "border-violet-400/30" },
  { value: 150, suffix: "", label: "Education Champions", sub: "local advocates", gradient: "from-pink-400 to-rose-500", ringColor: "border-pink-400/30" },
  { value: 73, suffix: "", label: "Women Enterprises", sub: "income for 225 families", gradient: "from-cyan-400 to-blue-500", ringColor: "border-cyan-400/30" },
  { value: 225, suffix: "", label: "Families Benefited", sub: "from women-led businesses", gradient: "from-lime-400 to-green-500", ringColor: "border-lime-400/30" },
  { value: 8000, suffix: "", label: "School Girls Engaged", sub: "by MRC fellows", gradient: "from-fuchsia-400 to-pink-500", ringColor: "border-fuchsia-400/30" },
];

const journeySteps = [
  { step: "01", title: "Pilot", desc: "Test ideas in real community settings — School of Scholars is our living laboratory.", color: "from-emerald-500 to-teal-600", icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" },
  { step: "02", title: "Learn", desc: "Gather evidence, track outcomes, and adapt based on what works.", color: "from-blue-500 to-indigo-600", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },
  { step: "03", title: "Mobilize", desc: "Build local champions, youth teams, and community ownership.", color: "from-violet-500 to-purple-600", icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" },
  { step: "04", title: "Advocate", desc: "Connect community evidence with institutions and decision-makers.", color: "from-amber-500 to-orange-600", icon: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" },
  { step: "05", title: "Scale", desc: "Expand through schools, networks, public institutions and policy.", color: "from-rose-500 to-pink-600", icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" },
];

const impactAreas = [
  {
    category: "Girls' Education & Literacy",
    tagline: "Building futures through learning",
    gradient: "from-emerald-500 to-teal-600",
    stats: [
      { value: "180", label: "Schools Reached", bar: 90, desc: "Schools focused on through education programs" },
      { value: "1,800+", label: "Girls Trained on STEM", bar: 85, desc: "Through Science Clubs and innovation challenges" },
      { value: "1,300+", label: "Girls Returned to School", bar: 75, desc: "Through retention-focused advocacy campaigns" },
      { value: "700", label: "Teachers Trained", bar: 70, desc: "In participatory and STEM approaches" },
      { value: "150", label: "Education Champions", bar: 60, desc: "Local advocates in rights and leadership" },
    ],
  },
  {
    category: "Leadership & Civic Agency",
    tagline: "Empowering the next generation",
    gradient: "from-violet-500 to-purple-600",
    stats: [
      { value: "150", label: "Girls Completed Leadership", bar: 80, desc: "Comprehensive leadership and advocacy training" },
      { value: "90", label: "Girls on Exposure Visits", bar: 55, desc: "Building networks with Karachi institutions" },
      { value: "8,000", label: "School Girls Engaged", bar: 95, desc: "Through advocacy campaigns and initiatives" },
      { value: "30", label: "Education Champions (Malala)", bar: 40, desc: "Trained in rights, leadership and advocacy" },
    ],
  },
  {
    category: "Entrepreneurship & Skills",
    tagline: "Creating economic independence",
    gradient: "from-amber-500 to-orange-600",
    stats: [
      { value: "73", label: "Women Enterprises", bar: 70, desc: "Income source for 225 families in Khuzdar" },
      { value: "225", label: "Families Benefited", bar: 85, desc: "Livelihoods improved through enterprises" },
      { value: "20", label: "Kids Trained as CEOs", bar: 45, desc: "Through Future CEOs program" },
      { value: "20", label: "Kids Enterprises", bar: 45, desc: "Established through Kidvation Global" },
    ],
  },
  {
    category: "Climate Action & Resilience",
    tagline: "Building resilient communities",
    gradient: "from-cyan-500 to-blue-600",
    stats: [
      { value: "35", label: "Climate Change Advocates", bar: 50, desc: "Engaging schools and communities" },
      { value: "500", label: "Trees Planted", bar: 65, desc: "Community-led reforestation" },
      { value: "3", label: "Emergencies Responded", bar: 30, desc: "With community support and relief" },
      { value: "300", label: "Families (COVID-19)", bar: 60, desc: "Emergency relief distributions" },
    ],
  },
];

const programs = [
  { name: "Action for Education", partner: "Malala Fund", status: "Active", highlight: "30 Champions, 5 campaigns, 73 girls returned" },
  { name: "School of Scholars", partner: "MRC", status: "Active", highlight: "Model girls' school, STEM + leadership" },
  { name: "STEM Pioneers", partner: "U.S. Consulate & PUAN", status: "Completed", highlight: "5 schools, 80 students, 20 teachers" },
  { name: "Her Power", partner: "Women Fund Asia", status: "Active", highlight: "20 women, ventures in food, fashion, tech" },
  { name: "Future CEOs", partner: "Kidvation Global", status: "Active", highlight: "20 students, 37 sessions, public festival" },
  { name: "Climate Action", partner: "Science Fuse", status: "Active", highlight: "35 advocates, 500 trees, zero polythene" },
  { name: "Girls Leadership", partner: "MRC", status: "Completed", highlight: "150 girls, advocacy, research, peer networks" },
  { name: "Girls Health Rights", partner: "Awaz Foundation", status: "Active", highlight: "Health awareness, mental health, community dialogue" },
];

/* ── Big Number Card ── */
function BigNumberCard({ stat, index }: { stat: typeof heroBigNumbers[0]; index: number }) {
  const countRef = useCountUp(stat.value, stat.suffix);
  return (
    <div
      className="animate-fade-in-up group relative"
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      <div className="relative mx-auto flex h-40 w-40 flex-col items-center justify-center sm:h-48 sm:w-48">
        {/* Outer rotating ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-dashed ${stat.ringColor} animate-[spin_25s_linear_infinite]`} />
        {/* Inner ring */}
        <div className="absolute inset-3 rounded-full border border-white/10" />
        {/* Glow on hover */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-15`} />
        {/* Content */}
        <div className="relative z-10 text-center">
          <p className={`text-4xl font-black tracking-tight text-white sm:text-5xl bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
            <span ref={countRef}>0</span>
          </p>
          <p className="mt-1 text-xs font-semibold text-white/70 sm:text-sm">{stat.label}</p>
          <p className="mt-0.5 text-[10px] text-white/40 sm:text-xs">{stat.sub}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Scroll Ticker ── */
function ScrollTicker() {
  const items = [
    "180 Schools", "1,800+ Girls STEM", "1,300+ Returned to School", "700 Teachers", "150 Champions",
    "73 Enterprises", "225 Families", "8,000 Girls Engaged", "35 Climate Advocates", "500 Trees Planted",
  ];
  return (
    <div className="relative overflow-hidden bg-primary-700 py-3">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-primary-700 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-primary-700 to-transparent z-10" />
      <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-semibold text-white/60">
            {item}
            <span className="ml-6 text-white/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function ImpactPage() {
  return (
    <>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 0; } 100% { transform: scale(0.9); opacity: 0.5; } }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-teal-800 pt-32 pb-12 sm:pt-40">
        <Particles />
        <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent-400/10 blur-3xl animate-float-reverse" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="inline-flex items-center gap-2 animate-fade-in-up rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Verified Data • As of August 2026</span>
          </div>
          <h1 className="mt-6 animate-fade-in-up text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl" style={{ animationDelay: "150ms" }}>
            Our Impact,{" "}
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-emerald-300 bg-clip-text text-transparent">
              By the Numbers
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl animate-fade-in-up text-base leading-relaxed text-emerald-100/70 sm:text-lg" style={{ animationDelay: "300ms" }}>
            From a grassroots literacy pilot to province-wide influence, here&apos;s what community-led change looks like.
          </p>
        </div>
      </section>

      {/* ═══════════════ TICKER ═══════════════ */}
      <ScrollTicker />

      {/* ═══════════════ BIG NUMBERS Mosaic ═══════════════ */}
      <section className="relative bg-gradient-to-b from-primary-800 to-primary-900 px-6 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative mx-auto max-w-6xl">
          <p className="animate-fade-in-up text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Cumulative Results Across All Programs</p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {heroBigNumbers.slice(0, 4).map((stat, i) => (
              <BigNumberCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {heroBigNumbers.slice(4).map((stat, i) => (
              <BigNumberCard key={stat.label} stat={stat} index={i + 4} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ JOURNEY ═══════════════ */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/20 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
              Our Impact{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="mt-3 text-base text-zinc-500">From community pilot to systemic change our five-stage delivery model.</p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary-300 via-accent-200 to-primary-300 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-10">
              {journeySteps.map((step, i) => (
                <div
                  key={step.step}
                  className="animate-fade-in-up relative flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Step badge */}
                  <div className={`relative z-10 flex items-center gap-4 ${i % 2 === 0 ? "md:w-1/2 md:justify-end md:pr-12" : "md:w-1/2 md:justify-start md:pl-12 md:order-2"}`}>
                    <div className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-br shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl" style={{ borderColor: "white" }}>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:w-1/2 md:pl-12" : "md:w-1/2 md:pr-12 md:order-1 md:text-right"}`}>
                    <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200/60">
                      <span className="text-xs font-bold text-primary-500">STEP {step.step}</span>
                      <h3 className="mt-1 text-xl font-bold text-zinc-800">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ IMPACT AREAS ═══════════════ */}
      {impactAreas.map((area, idx) => (
        <section
          key={area.category}
          className={`relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8 ${idx % 2 === 0 ? "bg-gradient-to-br from-zinc-50 to-white" : "bg-white"}`}
        >
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/10 blur-3xl animate-float" />

          <div className="relative mx-auto max-w-5xl">
            <div className="animate-fade-in-up flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} text-white shadow-lg`}>
                <span className="text-lg font-black">{idx + 1}</span>
              </div>
              <div>
                <span className={`inline-block rounded-full bg-gradient-to-r ${area.gradient} px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white`}>
                  {area.category}
                </span>
                <h2 className="mt-1 text-2xl font-bold text-zinc-800 sm:text-3xl">{area.tagline}</h2>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {area.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="animate-fade-in-up group rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-primary-200/40"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className={`text-3xl font-black bg-gradient-to-br ${area.gradient} bg-clip-text text-transparent`}>{stat.value}</span>
                      <div>
                        <p className="text-sm font-semibold text-zinc-700">{stat.label}</p>
                        <p className="text-xs text-zinc-400">{stat.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-zinc-300">{stat.bar}%</span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar percentage={stat.bar} color={area.gradient} delay={i * 100} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════ PROGRAMS ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/20 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              Our Programmes
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
              Driving Change{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Through Programs</span>
            </h2>
            <p className="mt-3 text-sm text-zinc-400">Pilot → Learn → Mobilize → Advocate → Scale</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, idx) => (
              <div
                key={program.name}
                className="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white/80 p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary-200/60"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary-100/50 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      program.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
                    }`}>
                      {program.status}
                    </span>
                    <span className="text-[10px] text-zinc-400">{program.partner}</span>
                  </div>
                  <h3 className="mt-2.5 text-sm font-bold text-zinc-800 group-hover:text-primary-700 transition-colors">{program.name}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">{program.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CROSS-CUTTING (Dark) ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-teal-800 px-6 py-24 sm:py-32 lg:px-8">
        <Particles />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
              Our Approach
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Three Cross-Cutting{" "}
              <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Commitments</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { title: "Gender Equality & Social Inclusion", desc: "Prioritising women, girls and groups facing structural exclusion in all programs.", icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" },
              { title: "Climate Resilience", desc: "Connecting education and livelihoods with locally relevant climate adaptation.", icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" },
              { title: "Mental Health & Safeguarding", desc: "Building safe participation and responsible delivery into every programme.", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:shadow-xl"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-300 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 transition-colors group-hover:text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/15 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Scale</span> This Impact?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
            Every contribution helps us reach more schools, train more girls, and build stronger communities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              Support Our Work
            </a>
            <a
              href="/volunteer"
              className="w-full sm:w-auto rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
