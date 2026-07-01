import HeroImageSlider from "@/components/HeroImageSlider";
import PartnersBanner from "@/components/PartnersBanner";

const values = [
  "Equity",
  "Safeguarding",
  "Inclusion",
  "Innovation",
  "Advocacy",
  "Community Ownership",
];

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-0 sm:min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20 px-6 lg:px-8">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/30 blur-3xl animate-float-reverse" />

        {/* Two-column grid */}
        <div className="relative flex w-full max-w-6xl mx-auto flex-col items-center lg:grid lg:grid-cols-2 lg:items-stretch gap-8 lg:gap-16">
          {/* Left column — text + stats */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-5 text-center lg:text-left">
            <h1
              className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl animate-fade-in-left"
              style={{ animationDelay: "0ms" }}
            >
              Mechanism for Relational{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Change
              </span>
            </h1>

            <p
              className="max-w-md mx-auto lg:mx-0 text-base leading-relaxed text-zinc-600 sm:text-lg animate-fade-in-left"
              style={{ animationDelay: "200ms" }}
            >
              We empower women and girls in rural Balochistan through
              education, STEM learning, and leadership, creating lasting change for generations to come.
            </p>

            <div
              className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start pt-2 animate-fade-in-left"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="/donate"
                className="rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-200/60 transition-all hover:bg-primary-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Support Education
              </a>
              <a
                href="/what-we-do"
                className="rounded-full border border-zinc-300 bg-white px-8 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-secondary-400 hover:text-secondary-600 hover:bg-secondary-50 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Our Programs
              </a>
            </div>

            <div
              className="grid grid-cols-3 gap-6 pt-4 max-w-sm mx-auto lg:mx-0"
              style={{ animationDelay: "600ms" }}
            >
              {[
                { label: "Girls Schools", value: "1300+" },
                { label: "Completed Projects", value: "12+" },
                { label: "On Going Projects", value: "3" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="animate-fade-in-up transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  style={{ animationDelay: `${700 + i * 150}ms` }}
                >
                  <p className="text-2xl font-bold text-primary-700 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image slider, full height, banner pinned bottom */}
          <HeroImageSlider />
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-accent-50/30 to-primary-50/60 px-6 py-24 sm:py-32 lg:px-8">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-200/25 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 rounded-full bg-secondary-100/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        {/* Dots pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <span className="inline-block rounded-full bg-primary-100 px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
              Our Foundation
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              What <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Drives</span> Us
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Everything we do is rooted in a clear vision and a relentless mission to create lasting change.
            </p>
          </div>

          {/* Feature Cards — full-height grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                label: "Vision",
                title: "Our Vision",
                text: "A peaceful, educated, empowered and inclusive society where girls, youth and women lead change.",
                color: "primary",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                ),
              },
              {
                num: "02",
                label: "Mission",
                title: "Our Mission",
                text: "To empower girls, youth and women through education, leadership, advocacy, skills, technology and community-led development.",
                color: "accent",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                ),
              },
              {
                num: "03",
                label: "Approach",
                title: "Our Approach",
                text: "We pilot programs at the community level first, practicing ideas before scaling them. Every initiative is built on community ownership and local leadership.",
                color: "secondary",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                ),
              },
            ].map((card) => {
              const isPrimary = card.color === "primary";
              const isAccent = card.color === "accent";
              const border = isPrimary ? "border-primary-200/60" : isAccent ? "border-accent-200/60" : "border-secondary-200/60";
              const shadow = isPrimary ? "shadow-primary-200/40" : isAccent ? "shadow-accent-200/40" : "shadow-secondary-200/40";
              const blob = isPrimary ? "bg-primary-100/50" : isAccent ? "bg-accent-100/50" : "bg-secondary-100/50";
              const iconBg = isPrimary ? "from-primary-500 to-primary-700" : isAccent ? "from-accent-500 to-accent-600" : "from-secondary-500 to-secondary-600";
              const iconShadow = isPrimary ? "shadow-primary-200/50" : isAccent ? "shadow-accent-200/50" : "shadow-secondary-200/50";
              const numColor = isPrimary ? "text-primary-500" : isAccent ? "text-accent-500" : "text-secondary-500";

              return (
                <div
                  key={card.num}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border ${border} bg-white/80 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${shadow}`}
                >
                  <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full ${blob} blur-2xl transition-all duration-500 group-hover:scale-150`} />
                  <div className="relative flex flex-col gap-5">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${iconBg} text-white shadow-lg ${iconShadow} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        {card.icon}
                      </svg>
                    </div>
                    <div>
                      <span className={`text-xs font-semibold uppercase tracking-widest ${numColor}`}>{card.num} — {card.label}</span>
                      <h3 className="mt-2 text-xl font-bold text-zinc-800">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Values Strip */}
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-primary-200/50 bg-gradient-to-r from-primary-100/60 via-accent-100/30 to-primary-100/60 p-8 shadow-sm sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <p className="relative text-center text-xs font-semibold uppercase tracking-widest text-primary-600">
              Core Values That Guide Us
            </p>
            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
              {values.map((value, i) => (
                <span
                  key={value}
                  className="animate-fade-in-up inline-flex items-center gap-1.5 rounded-full border border-primary-200/60 bg-white/90 px-5 py-2 text-sm font-medium text-primary-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary-300 hover:bg-primary-50 hover:shadow-md hover:shadow-primary-200/30"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-24 sm:py-28 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-400/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="animate-fade-in-up text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
              Our Impact
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              By the{" "}
              <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Numbers</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:items-center">
            {/* Image side */}
            <div className="animate-fade-in-up lg:col-span-2" style={{ animationDelay: "200ms" }}>
              <img
                src="/impact.png"
                alt="MRC Impact — transforming lives across Balochistan"
                className="w-full"
              />
            </div>

            {/* Stats grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
              {[
                { value: "231+", label: "Girls Enrolled in School", icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" },
                { value: "40+", label: "Fellows Trained as Leaders", icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" },
                { value: "5+", label: "Districts Reached", icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" },
                { value: "14+", label: "Start-ups Launched", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-xl"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-primary-400 to-accent-400 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-10" />
                  <div className="relative">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-300 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                      </svg>
                    </div>
                    <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnersBanner />

      {/* ── Programs / What We Do ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-100/15 blur-3xl animate-float-reverse" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              Our Programs
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              What{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">We Do</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-500">
              Across four pillars, we design and deliver programs that create lasting change for women, girls, and youth in Balochistan.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {[
              {
                num: "01",
                title: "Girls' Education",
                desc: "Promoting quality education through the School of Scholars, a model girls' school in Khuzdar with 231 students enrolled, plus STEM Pioneers in Kalat District.",
                color: "primary",
                href: "/what-we-do",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                ),
              },
              {
                num: "02",
                title: "Women Empowerment",
                desc: "Leadership training, entrepreneurship programs, and capacity building creating economic opportunities for women.",
                color: "secondary",
                href: "/what-we-do",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                ),
              },
              {
                num: "03",
                title: "Climate & Resilience",
                desc: "Emergency response, water resource management, winter distributions, and disaster risk reduction in vulnerable communities.",
                color: "accent",
                href: "/what-we-do",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                ),
              },
              {
                num: "04",
                title: "Girls' Health Rights",
                desc: "Advocating for health rights, mental health awareness, and access to information for girls and women in schools and communities.",
                color: "primary",
                href: "/what-we-do",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                ),
              },
            ].map((program, idx) => {
              const isP = program.color === "primary";
              const isA = program.color === "accent";
              const border = isP ? "border-primary-200/60 hover:border-primary-300" : isA ? "border-accent-200/60 hover:border-accent-300" : "border-secondary-200/60 hover:border-secondary-300";
              const iconGrad = isP ? "from-primary-500 to-primary-700" : isA ? "from-accent-500 to-accent-600" : "from-secondary-500 to-secondary-600";
              const numColor = isP ? "text-primary-500" : isA ? "text-accent-500" : "text-secondary-500";
              const badge = isP ? "bg-primary-100 text-primary-700" : isA ? "bg-accent-100 text-accent-700" : "bg-secondary-100 text-secondary-700";

              return (
                <a
                  key={program.num}
                  href={program.href}
                  className="animate-fade-in-up group relative overflow-hidden rounded-2xl border bg-white/70 p-6 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className={`pointer-events-none absolute -inset-1 rounded-2xl opacity-0 transition-all duration-700 group-hover:opacity-100 ${border}`} style={{ margin: "-1px" }} />
                  <div className="relative flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${iconGrad} text-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md`}>
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        {program.icon}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold uppercase tracking-widest ${numColor}`}>{program.num}</span>
                        <span className={`rounded-full ${badge} px-2 py-0.5 text-[10px] font-semibold`}>
                          {program.title}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700">
                        {program.desc}
                      </p>
                    </div>
                    <div className="shrink-0 self-center text-zinc-300 transition-all duration-500 group-hover:translate-x-1 group-hover:text-primary-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="animate-fade-in-up mt-10 text-center" style={{ animationDelay: "700ms" }}>
            <a
              href="/what-we-do"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              View All Programs
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-teal-800 px-6 py-24 sm:py-32 lg:px-8">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-400/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />
        <div className="pointer-events-none absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-emerald-300/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="animate-fade-in-up text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm shadow-sm">
              Get Involved
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Make a{" "}
              <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Difference</span>
              ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-100/80">
              Whether you want to volunteer your time, partner with us, or make a donation every
              action brings us closer to an empowered and inclusive Balochistan.
            </p>
          </div>

          <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "200ms" }}>
            <a
              href="/donate"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.97]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                Donate Now
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="/volunteer"
              className="group w-full sm:w-auto rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 active:scale-[0.97]"
            >
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                Volunteer With Us
              </span>
            </a>
          </div>

          <div className="animate-fade-in-up mt-8 text-center" style={{ animationDelay: "400ms" }}>
            <p className="text-sm text-emerald-200/60">
              Or{" "}
              <a href="/contact" className="font-semibold text-accent-300 underline underline-offset-2 transition-colors hover:text-accent-200">
                contact us
              </a>{" "}
              to learn more about partnership opportunities.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
