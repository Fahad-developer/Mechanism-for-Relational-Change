"use client";

export default function ReportsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Transparency
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Reports &{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Policies
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            MRC is committed to transparency. Find our reports, policies, and governance documents here.
          </p>
        </div>
      </section>

      {/* Empty State */}
      <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">
        <div className="relative mx-auto max-w-3xl animate-fade-in-up text-center py-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-primary-500">
            <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-zinc-700">No reports or policies available yet</h3>
          <p className="mt-2 text-sm text-zinc-500">Check back soon for annual reports, audited financials, and policy documents.</p>
        </div>
      </section>

      {/* Registration Certificate */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30 px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-secondary-200 to-secondary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-700 shadow-sm">
              Legal
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
              Registration{" "}
              <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent">Certificate</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-500">
              MRC is officially registered under the Societies Registration Act of Pakistan.
            </p>
          </div>

          <div className="mt-12 animate-fade-in-up overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/30 transition-all duration-500 hover:shadow-2xl">
            <img
              src="/certificate/MRC-registration-certificate.jpeg"
              alt="MRC Registration Certificate — Official registration under the Societies Registration Act"
              className="w-full object-contain"
              style={{ maxHeight: "700px" }}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-zinc-500">
              Mechanism for Rational Change (MRC) — Registered in 2014 under BCRA, Khuzdar, Balochistan, Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-400/15 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
            Questions?
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Need More{" "}
            <span className="bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">Information</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-100/80">
            Contact us for additional reports, detailed policy documents, or to request copies of any publication.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="/leadership"
              className="w-full sm:w-auto rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Our Leadership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
