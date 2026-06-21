import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Girls' Education",
    subtitle: "Building a Foundation for Lifelong Learning",
    description:
      "We believe education is the most powerful tool for transforming communities. Our flagship School of Scholars the first girls' school in Khuzdar introducing STEM and leadership education serves as a model institution demonstrating what quality, girl centred education looks like in rural Balochistan.",
    programs: [
      "School of Scholars 231 girls enrolled, hundreds graduated",
      "STEM education through Science Clubs and innovation challenges",
      "Action for Education advocacy for girls' access to learning",
      "Future CEOs entrepreneurship and enterprise skills for girls",
    ],
    impact: "Hundreds of girls empowered with education, confidence, and leadership skills to pursue higher education and careers.",
    image: "/girlsedu.jpg",
  },
  {
    number: "02",
    title: "Women Empowerment & Livelihoods",
    subtitle: "Creating Economic Opportunities for Women",
    description:
      "We equip women and young girls with the skills, confidence, and resources they need to become economically independent and leaders in their communities. Through leadership training, entrepreneurship development, and capacity building, we create pathways for women to thrive.",
    programs: [
      "Girls Leadership Program 20 fellows trained as change-makers",
      "Her Power Project (WFA) 20 young women launched start-ups",
      "Capacity building of small organizations (PPAF)",
      "Voter education and civic participation for women",
    ],
    impact: "Young women running businesses, generating income, and inspiring their families and communities.",
    image: "/womenempowerment.JPG",
  },
  {
    number: "03",
    title: "Climate & Resilience",
    subtitle: "Building Resilient Communities in a Changing Climate",
    description:
      "Balochistan faces severe climate challenges, from droughts to floods. We work with communities to build resilience through emergency response, sustainable resource management, and disaster risk reduction. Our approach combines immediate relief with long-term capacity building.",
    programs: [
      "Repair and maintenance of water resources",
      "Emergency response and food distributions (COVID-19)",
      "Ramzan drives in dropout affected communities",
      "Winter item distributions Apna Dastakhawn",
      "DRR capacity building with Start Network",
    ],
    impact: "Strengthened community resilience and improved access to essential resources during crises.",
    image: "/climate%20and%20resilence.JPG",
  },
  {
    number: "04",
    title: "Girls' Health Rights",
    subtitle: "Advocating for Health, Dignity, and Well-being",
    description:
      "We advocate for the health rights of girls and women, ensuring they have access to information, services, and support. Through awareness sessions and partnerships, we address critical health issues and promote well-being among young women in schools and communities.",
    programs: [
      "Women Health Rights project by Awaz Foundation",
      "Youth health rights sessions in government girls' schools",
      "Mental health awareness and support initiatives",
      "Community dialogue on reproductive health and rights",
    ],
    impact: "Increased awareness and access to health information for girls and women in Khuzdar.",
    image: "/tenis.jpeg",
  },
];

const approach = [
  {
    title: "Community-Led Development",
    description: "Every program is designed with, by, and for the community. We listen first, then act ensuring solutions are rooted in local needs and ownership.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    ),
  },
  {
    title: "Pilot Before Scale",
    description: "We practice ideas at the community level first, refining our approach before scaling. This ensures every program is tested, adapted, and ready for long-term success.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    ),
  },
  {
    title: "Partnership-Driven",
    description: "We collaborate with local organizations, government bodies, and international partners to amplify our impact and ensure sustainability.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    ),
  },
];

export default function WhatWeDo() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />
        <div className="pointer-events-none absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-secondary-100/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Our Approach
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            What{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              We Do
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            We design and deliver community-led programs that empower women, girls, and youth across
            Balochistan. Our work spans education, economic empowerment, climate resilience, and health
            rights all grounded in a participatory approach that puts communities first.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-primary-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/20 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-500">
              Three principles guide every program we design and deliver.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {approach.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-100/50 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-zinc-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      {pillars.map((pillar, idx) => {
        const isPrimary = pillar.number === "01" || pillar.number === "03";
        const accentColor = isPrimary ? "primary" : "accent";
        const c = accentColor === "primary"
          ? { border: "border-primary-200/60", glow: "bg-primary-100/40", badge: "bg-primary-100 text-primary-700", gradient: "from-primary-500 to-primary-700", text: "text-primary-600", lightBg: "bg-primary-50/30" }
          : { border: "border-accent-200/60", glow: "bg-accent-100/40", badge: "bg-accent-100 text-accent-700", gradient: "from-accent-500 to-accent-600", text: "text-accent-600", lightBg: "bg-accent-50/30" };

        return (
          <section
            key={pillar.number}
            className={`relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8 ${idx % 2 === 0 ? "bg-white" : c.lightBg}`}
          >
            <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary-100/15 blur-3xl animate-float" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent-100/10 blur-3xl animate-float-reverse" />

            <div className="relative mx-auto max-w-7xl">
              <div className={`flex flex-col gap-10 lg:flex-row lg:items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Number + Content */}
                <div className="flex-1 animate-fade-in-up">
                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.gradient} text-xl font-bold text-white shadow-lg`}>
                    {pillar.number}
                  </span>
                  <span className={`ml-3 inline-block rounded-full ${c.badge} px-3 py-0.5 text-xs font-semibold`}>
                    Pillar {pillar.number}
                  </span>
                  <h2 className={`mt-5 text-2xl font-bold text-zinc-800 sm:text-3xl lg:text-4xl`}>
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-zinc-500">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                    {pillar.description}
                  </p>

                  {/* Programs */}
                  <div className="mt-6 space-y-2.5">
                    {pillar.programs.map((program) => (
                      <div key={program} className="flex items-start gap-2.5">
                        <span className={`mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${c.gradient}`} />
                        <span className="text-sm text-zinc-600">{program}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className={`mt-6 rounded-xl border ${c.border} bg-white/60 p-4`}>
                    <span className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>Impact</span>
                    <p className="mt-1 text-sm text-zinc-600">{pillar.impact}</p>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  {pillar.image ? (
                    <div className="group relative overflow-hidden rounded-3xl shadow-lg shadow-primary-200/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-200/40">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                        style={{ maxHeight: "400px" }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className={`inline-block rounded-full ${c.badge} px-3 py-0.5 text-xs font-semibold`}>
                          Pillar {pillar.number}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className={`relative overflow-hidden rounded-3xl border ${c.border} bg-gradient-to-br ${c.lightBg} p-10 shadow-sm`}>
                      <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${c.glow} blur-2xl`} />
                      <div className="relative text-center">
                        <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${c.gradient} shadow-lg`}>
                          <span className="text-3xl font-bold text-white">{pillar.number}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-zinc-800">{pillar.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Partners Strip ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-16 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-400/15 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
            Get Involved
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to Make a Difference?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-100/80">
            Whether you&apos;re a potential partner, donor, or volunteer we&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/volunteer"
              className="w-full sm:w-auto rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
