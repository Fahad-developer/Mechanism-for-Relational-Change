import Image from "next/image";
import Link from "next/link";
import MapSection from "@/components/MapSection";

const values = [
  {
    title: "Equity",
    description:
      "We believe every individual deserves equal access to opportunities, resources, and rights, regardless of gender, background, or circumstance.",
    color: "primary",
  },
  {
    title: "Safeguarding",
    description:
      "Protecting the well being of women, children, and youth is at the heart of everything we do. We ensure safe spaces and ethical practices in all our programs.",
    color: "secondary",
  },
  {
    title: "Inclusion",
    description:
      "We actively include marginalized voices especially girls, women, and persons with disabilities in every stage of our work.",
    color: "accent",
  },
  {
    title: "Innovation",
    description:
      "We embrace creative, locally rooted solutions, piloting new ideas at the community level before scaling them for greater impact.",
    color: "primary",
  },
  {
    title: "Advocacy",
    description:
      "We raise our voice for policy change, gender justice, and education access, amplifying the demands of the communities we serve.",
    color: "secondary",
  },
  {
    title: "Community Ownership",
    description:
      "We believe lasting change happens when communities lead. Our programs are designed with, by, and for the people we serve.",
    color: "accent",
  },
];

const districts = [
  { name: "Khuzdar", active: true },
  { name: "Kalat", active: true },
  { name: "Quetta", active: true },
  { name: "Lasbela / Hub", active: true },
  { name: "Kohlu", active: true },
  { name: "Other Districts", active: false },
];

const timeline = [
  {
    year: "2015",
    title: "Founded",
    description:
      "MRC was established under the Societies Registration Act as a legally registered, women-led non-profit in Khuzdar, Balochistan.",
  },
  {
    year: "2015–2020",
    title: "Community Piloting",
    description:
      "Built grassroots trust by piloting education and empowerment programs at the community level, refining the approach before scaling.",
  },
  {
    year: "2020",
    title: "School of Scholars",
    description:
      "Launched Khuzdar's first girls' school introducing STEM and leadership education a model institution for the region.",
  },
  {
    year: "2022",
    title: "Girls Leadership Program",
    description:
      "Launched a comprehensive fellowship empowering 20 young girls with leadership skills, community engagement, and advocacy training.",
  },
  {
    year: "2025",
    title: "Her Power Project",
    description:
      "With support from Women Fund Asia, launched a flagship initiative turning young women's ideas into real businesses and start-ups.",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string; iconBg: string }> = {
  primary: {
    bg: "bg-primary-50",
    text: "text-primary-700",
    border: "border-primary-200",
    gradient: "from-primary-500 to-primary-700",
    iconBg: "bg-primary-100",
  },
  secondary: {
    bg: "bg-secondary-50",
    text: "text-secondary-700",
    border: "border-secondary-200",
    gradient: "from-secondary-500 to-secondary-600",
    iconBg: "bg-secondary-100",
  },
  accent: {
    bg: "bg-accent-50",
    text: "text-accent-700",
    border: "border-accent-200",
    gradient: "from-accent-500 to-accent-600",
    iconBg: "bg-accent-100",
  },
};

function ValueCard({ value }: { value: typeof values[0] }) {
  const c = colorMap[value.color];
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${c.border} ${c.bg}/30 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl`}
    >
      <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${c.bg} blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100`} />
      <div className="relative">
        
        <h3 className={`mt-4 text-lg font-semibold ${c.text}`}>{value.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700">
          {value.description}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />
        <div className="pointer-events-none absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-primary-100/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Who We Are
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            About{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              MRC
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            Mechanism for Rational Change (MRC) is a legally registered, women-led non-profit organization
            based in Khuzdar, Balochistan, Pakistan. Established in 2015, we are dedicated to empowering
            women, children, and youth through education, leadership, entrepreneurship, mental health,
            climate action, and skill enhancement.
          </p>
          <p className="mx-auto mt-4 max-w-3xl animate-fade-in-up text-sm leading-relaxed text-zinc-500" style={{ animationDelay: "450ms" }}>
            Our unique approach focuses on practicing ideas before scaling them. Through our model institution,
            the School of Scholars the first girls&apos; school in Khuzdar introducing STEM and leadership
            education we pilot programs at the community level before developing long-term projects that
            create lasting change.
          </p>
        </div>
      </section>

      {/* ── Team Image ── */}
      <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="group relative overflow-hidden rounded-3xl shadow-xl shadow-primary-200/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-200/40">
            <Image
              src="/MRC%20Team.jpeg"
              alt="MRC Team — The women and girls leading change in Balochistan"
              width={1200}
              height={600}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
              style={{ maxHeight: "500px" }}
            />
            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Our Team
              </span>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/90 drop-shadow-sm sm:text-base">
                The women and girls at the heart of MRC leading change, building futures, and
                transforming communities across Balochistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-100/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-7xl">
          <div className="animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              Our Purpose
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              Vision &amp;{" "}
              <span className="bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent">Mission</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Vision */}
            <div className="group relative overflow-hidden rounded-3xl border border-primary-200/60 bg-white/80 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-200/40 sm:p-10">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary-100/50 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-200/50 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary-500">Our Vision</span>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600">
                    A peaceful, educated, empowered and inclusive society where girls, youth and women
                    lead change.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative overflow-hidden rounded-3xl border border-accent-200/60 bg-white/80 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-200/40 sm:p-10">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent-100/50 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-200/50 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-500">Our Mission</span>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600">
                    To empower girls, youth and women through education, leadership, advocacy, skills,
                    technology and community-led development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary-100/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary-100/20 blur-3xl animate-float-reverse" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-primary-200 to-secondary-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
              What We Stand For
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              Our <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-500">
              Six principles that guide every decision, program, and partnership we undertake.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.title} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Where We Work ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/60 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-100/20 blur-3xl animate-float-reverse" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
              Our Reach
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              Where <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">We Work</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-500">
              We are actively working across multiple districts in Balochistan, with a focus on
              underserved and rural communities.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {districts.map((district, i) => (
              <div key={district.name} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <button
                  disabled={!district.active}
                  className={`group relative min-w-[150px] overflow-hidden rounded-2xl border p-5 text-center font-medium shadow-sm transition-all duration-300 ${
                    district.active
                      ? "border-primary-200/60 bg-white/80 text-primary-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-200/30 cursor-pointer"
                      : "border-zinc-200 bg-zinc-50/50 text-zinc-400 cursor-not-allowed"
                  }`}
                >
                  {district.active && (
                    <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-primary-200 to-primary-200 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40" />
                  )}
                  <div className="relative">
                    <span className="text-base font-semibold">{district.name}</span>
                    {!district.active && (
                      <span className="mt-1 block text-xs text-zinc-400">Coming Soon</span>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Interactive Map */}
          <div className="mt-12 animate-fade-in-up overflow-hidden rounded-3xl border border-primary-200/50 bg-white/60 shadow-sm" style={{ animationDelay: "300ms" }}>
            <MapSection />
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/60 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary-100/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-primary-100/20 blur-3xl animate-float-reverse" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              Our <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-500">
              From a grassroots vision to a growing movement here&apos;s how we&apos;ve evolved.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline track */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary-300 via-accent-200 to-primary-300 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className="animate-fade-in-up relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* Dot + Year */}
                  <div className="relative z-10 flex items-center gap-4 md:w-48 md:flex-col md:items-center md:gap-2 shrink-0">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary-200 bg-white shadow-md">
                      <div className="h-3.5 w-3.5 rounded-full bg-primary-500 shadow-sm shadow-primary-300" />
                    </div>
                    <span className="text-sm font-bold text-primary-700">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className="group relative ml-16 flex-1 overflow-hidden rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-200/20 sm:p-8 md:ml-0">
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-100/50 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
                    <div className="relative">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary-500">{item.year}</span>
                      <h3 className="mt-1 text-lg font-bold text-zinc-800">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-400/15 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
            Get Involved
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Join Us in Creating{" "}
            <span className="bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">Change</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-100/80">
            Whether you want to volunteer, partner with us, or support our mission every contribution
            brings us closer to a peaceful, empowered, and inclusive Balochistan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/volunteer"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              <span className="relative z-10">Get Involved</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
