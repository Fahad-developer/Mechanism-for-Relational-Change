import Link from "next/link";

const categories = [
  {
    title: "Girls' Education",
    description: "Promoting girls' education through the School of Scholars, Action for Education, and Future CEOs program.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
    ),
    color: "primary",
  },
  {
    title: "Women Empowerment & Livelihoods",
    description: "Girls Leadership Program, Her Power project (WFA), capacity building of small organizations, and voter education.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    ),
    color: "secondary",
  },
  {
    title: "Climate & Resilience",
    description: "Water resource management, emergency response, Ramzan drives, winter distributions, and DRR capacity building.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    ),
    color: "accent",
  },
  {
    title: "Girls' Health Rights",
    description: "Women Health Rights by Awaz Foundation and youth health rights awareness sessions in government girls' schools.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    ),
    color: "secondary",
  },
  {
    title: "STEM Pioneers Project",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.299M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.3M14.25 3.104c.251.023.501.05.75.082M19 14.3a2.259 2.259 0 0 1-1.323 2.077m-11.354 0a2.259 2.259 0 0 1-1.323-2.077m11.354 0H5.323m2.104 6.25h9.146a.75.75 0 0 0 .75-.75V15.5a.75.75 0 0 0-.75-.75h-9.146a.75.75 0 0 0-.75.75v4.25a.75.75 0 0 0 .75.75Z" />
    ),
    tagline: "Inspiring Girls in STEM — Kalat District",
    description:
      "Supported by the U.S. Consulate and the Pakistan-U.S. Alumni Network (PUAN), the STEM Pioneers Project was a six-month initiative implemented by MRC in Kalat District. The project promoted practical, inclusive, and future-focused STEM education in five girls' high schools by strengthening teachers' skills, introducing digital learning opportunities, and creating STEM learning spaces for students.",
    duration: "2023 — Kalat District",
    stats: [
      { label: "Schools", value: "5" },
      { label: "Students", value: "80" },
      { label: "Teachers", value: "20" },
    ],
    highlights: [
      "Trained STEM Ambassadors in STEM concepts, leadership, event planning, and IT skills",
      "Established STEM and computer labs in five girls' high schools",
      "Conducted STEM awareness sessions, intensive trainings, and IT courses",
      "Exposure visit to Magnifi Science Center for hands-on learning",
      "Created a sustainable STEM Education Network for ongoing collaboration",
    ],
    color: "accent",
  },
];

const featuredProjects = [
  {
    title: "School of Scholars",
    tagline: "Transforming Girls' Education Since 2015",
    description:
      "Founded by MRC in 2015, the School of Scholars is a girls' high school in Khuzdar, Balochistan. It was created to demonstrate how education can go beyond textbooks and prepare girls to become confident leaders, innovators, entrepreneurs, and active citizens. Currently, 231 girls are enrolled, while hundreds have graduated and moved forward in their education, careers, and community roles.",
    stats: [
      { label: "Students Enrolled", value: "231" },
      { label: "Year Founded", value: "2015" },
      { label: "Award", value: "Women Can Do" },
    ],
    highlights: [
      "STEM learning through Science Clubs, Tech Lovers, and innovation challenges",
      "Leadership and life skills development from an early age",
      "Entrepreneurship workshops and student-led business activities",
      "Project-based learning connected to real community issues",
      "Student-led clubs covering climate, sports, heritage, and civic engagement",
    ],
    color: "primary",
  },
  {
    title: "Girls Leadership Program",
    tagline: "Learning and Leading at Each Level",
    description:
      "A comprehensive initiative designed to empower young girls with leadership skills, confidence, and practical knowledge. 20 fellows were selected through a transparent process and received intensive training on leadership, communication, gender, education systems, technology, advocacy, and community engagement.",
    duration: "May 2022 – April 2024",
    stats: [
      { label: "Fellows", value: "20" },
      { label: "Duration", value: "2 Years" },
      { label: "Focus", value: "Leadership" },
    ],
    highlights: [
      "Intensive capacity building on leadership, advocacy, and digital safety",
      "Fellows designed and implemented community-based projects",
      "District-level STEM Science Festival for girls",
      "Quarterly stakeholder meetings with educators and community leaders",
      "Fellows became confident public speakers, advocates, and change-makers",
    ],
    color: "accent",
  },
  {
    title: "Her Power Project",
    tagline: "Girls' Leadership & Entrepreneurship Program",
    description:
      "A flagship initiative supported by Women Fund Asia designed to identify, support, and nurture emerging young women leaders in Balochistan. Out of 71 applicants, 20 young women were selected and provided with leadership training, entrepreneurship skills, and practical business development guidance.",
    duration: "Nov 2024 – Oct 2025",
    stats: [
      { label: "Applicants", value: "71" },
      { label: "Selected", value: "20" },
      { label: "Start-ups", value: "14+" },
    ],
    highlights: [
      "Participants launched businesses including Yad-e, Crazy for Momos, and Jhalawan Traditional Food",
      "Training in entrepreneurship, business development, and communication",
      "Young women turned their ideas into real businesses and community initiatives",
      "Participants now generating income through their own ideas",
      "Building local brands and inspiring other girls and families",
    ],
    color: "secondary",
  },
];

const colorConfig: Record<string, { badgeBg: string; badgeText: string; border: string; shadow: string; gradient: string; iconBg: string; glow: string; lightBg: string; statBorder: string }> = {
  primary: {
    badgeBg: "bg-primary-100",
    badgeText: "text-primary-700",
    border: "border-primary-200/60",
    shadow: "shadow-primary-200/40",
    gradient: "from-primary-500 to-primary-700",
    iconBg: "bg-primary-500",
    glow: "bg-primary-100/50",
    lightBg: "bg-primary-50/40",
    statBorder: "border-primary-200",
  },
  accent: {
    badgeBg: "bg-accent-100",
    badgeText: "text-accent-700",
    border: "border-accent-200/60",
    shadow: "shadow-accent-200/40",
    gradient: "from-accent-500 to-accent-600",
    iconBg: "bg-accent-500",
    glow: "bg-accent-100/50",
    lightBg: "bg-accent-50/40",
    statBorder: "border-accent-200",
  },
  secondary: {
    badgeBg: "bg-secondary-100",
    badgeText: "text-secondary-700",
    border: "border-secondary-200/60",
    shadow: "shadow-secondary-200/40",
    gradient: "from-secondary-500 to-secondary-600",
    iconBg: "bg-secondary-500",
    glow: "bg-secondary-100/50",
    lightBg: "bg-secondary-50/40",
    statBorder: "border-secondary-200",
  },
};

export default function Projects() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Our Work
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Our{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            From education and leadership to climate resilience and health rights our projects are
            designed with communities, for communities. Every initiative is piloted at the grassroots
            level before being scaled for lasting impact.
          </p>
        </div>
      </section>

      {/* ── Project Categories ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-100/20 blur-3xl animate-float-reverse" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              Areas of{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-500">
              Our work spans four key pillars, each driving sustainable change in Balochistan.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {categories.map((cat) => {
              const c = colorConfig[cat.color];
              return (
                <div
                  key={cat.title}
                  className={`group relative overflow-hidden rounded-2xl border ${c.border} bg-white/70 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${c.shadow}`}
                >
                  <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${c.glow} blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100`} />
                  <div className="relative flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${c.iconBg} text-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        {cat.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${c.badgeText}`}>{cat.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
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
              Flagship Initiatives
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-500">
              A closer look at our key initiatives driving measurable change in communities.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {featuredProjects.map((project, idx) => {
              const c = colorConfig[project.color];
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.title}
                  className={`animate-fade-in-up relative overflow-hidden rounded-3xl border ${c.border} bg-white/80 p-8 shadow-sm transition-all duration-500 hover:shadow-xl ${c.shadow} sm:p-10`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${c.glow} blur-2xl transition-all duration-500 group-hover:scale-150`} />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <span className={`inline-block rounded-full ${c.badgeBg} px-3 py-0.5 text-xs font-semibold ${c.badgeText}`}>
                          Featured Project
                        </span>
                        <h3 className={`mt-3 text-2xl font-bold ${c.badgeText} sm:text-3xl`}>
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-zinc-500">
                          {project.tagline}
                        </p>
                        {project.duration && (
                          <p className="mt-1 text-xs text-zinc-400">
                            {project.duration}
                          </p>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 sm:gap-6 shrink-0">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <p className={`text-2xl font-bold ${c.badgeText}`}>{stat.value}</p>
                            <p className="text-xs text-zinc-500">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-sm leading-relaxed text-zinc-600">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5">
                          <span className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${c.iconBg}`} />
                          <span className="text-sm text-zinc-600">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-400/15 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
            Support Our Mission
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Partner With{" "}
            <span className="bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-100/80">
            Every project we run is made possible through the support of partners, donors, and
            volunteers. Join us in creating lasting change for the women and girls of Balochistan.
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
