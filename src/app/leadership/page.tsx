"use client";

import Image from "next/image";

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />
        <div className="pointer-events-none absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-secondary-100/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Our People
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Our{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Leadership
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            Meet the visionary founder driving MRC&apos;s mission to empower women and girls in Balochistan.
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-primary-100/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-accent-100/15 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Image Side */}
            <div className="animate-fade-in-up order-1 lg:order-1">
              <div className="group relative mx-auto max-w-md lg:mx-0">
                {/* Decorative elements */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-200/40 to-accent-200/30 blur-2xl transition-all duration-700 group-hover:scale-105" />
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 opacity-20" />

                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl border-2 border-white shadow-2xl shadow-primary-200/30 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-primary-300/40">
                  <Image
                    src="/ceo.jpg"
                    alt="Sumera Mehboob — Founder & CEO of MRC"
                    width={500}
                    height={600}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Name tag */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0">
                  <div className="rounded-2xl border border-white bg-white px-5 py-3 shadow-xl shadow-zinc-200/40 backdrop-blur-sm">
                    <p className="text-sm font-bold text-zinc-800">Sumera Mehboob</p>
                    <p className="text-xs font-semibold text-primary-600">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="animate-fade-in-up order-2 lg:order-2" style={{ animationDelay: "200ms" }}>
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                    Sumera{" "}
                    <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                      Mehboob
                    </span>
                  </h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary-600">
                    Founder & Chief Executive Officer
                  </p>
                </div>

                {/* Bio */}
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-zinc-600">
                    Sumera Mehboob is an education advocate, social development professional, and community leader from Khuzdar, Balochistan. As the Founder and CEO of Mechanism for Rational Change (MRC), she works to advance girls&apos; education, youth leadership, women&apos;s empowerment, STEM learning, mental health, and climate resilience.
                  </p>
                  <p className="text-base leading-relaxed text-zinc-600">
                    She also founded the School of Scholars, an innovative girls&apos; school that combines academic education with technology, leadership, entrepreneurship, and life skills. Through MRC, Sumera has supported hundreds of girls and young people to become leaders, advocates, entrepreneurs, and community change-makers.
                  </p>
                </div>

                {/* Vision Quote */}
                <blockquote className="relative rounded-2xl border-l-4 border-primary-400 bg-gradient-to-r from-primary-50/80 to-accent-50/40 px-6 py-5">
                  <svg className="absolute right-4 top-4 h-8 w-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <p className="text-sm italic leading-relaxed text-zinc-600">
                    &ldquo;Her vision is to create an educated, equitable, resilient, and inclusive Balochistan where women, girls, and young people have the opportunity and confidence to lead positive change.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30 px-6 py-20 sm:py-28 lg:px-8">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent-100/20 blur-3xl animate-float" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              Affiliations
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
              Credentials &{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Recognition</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Global Shapers",
                detail: "Founding Curator, Khuzdar Hub",
                icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
              },
              {
                title: "Acumen Fellow",
                detail: "Social impact leadership program",
                icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342",
              },
              {
                title: "Pak–U.S. Alumni Network",
                detail: "Member",
                icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
              },
              {
                title: "Australia Awards",
                detail: "Alumna",
                icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
              },
              {
                title: "START Network",
                detail: "National Steering Committee Member",
                icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
              },
              {
                title: "School of Scholars",
                detail: "Founder — MRC's model girls' school",
                icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342",
              },
            ].map((cred, idx) => (
              <div
                key={cred.title}
                className="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-zinc-100 bg-white/80 p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary-200/60"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-100/50 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={cred.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-800">{cred.title}</h3>
                    <p className="mt-0.5 text-xs text-zinc-500">{cred.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="relative overflow-hidden bg-white px-6 py-20 sm:py-28 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-secondary-200 to-secondary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-700 shadow-sm">
              Structure
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
              Governance{" "}
              <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent">Structure</span>
            </h2>
          </div>

          <div className="mt-10 animate-fade-in-up rounded-2xl border border-zinc-100 bg-gradient-to-br from-zinc-50 to-white p-6 sm:p-8 shadow-sm">
            <p className="text-sm leading-relaxed text-zinc-600">
              MRC operates under the Societies Registration Act with a governing board that meets quarterly. The board provides strategic direction, ensures financial accountability, and oversees organizational performance. Day-to-day management is led by the CEO and senior team.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Women-led governance (~80% women staff)",
                "Registered under BCRA since 2014",
                "Quarterly board meetings",
                "Annual general meetings",
                "Independent financial auditing",
                "Safeguarding & child protection policies",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary-500 to-primary-600" />
                  <span className="text-sm text-zinc-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-teal-800 px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-400/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Join</span> Our Mission?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-100/80">
            Whether you want to volunteer, partner, or support our work — we&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/volunteer"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              <span className="relative z-10">Get Involved</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
