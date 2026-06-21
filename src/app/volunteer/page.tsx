"use client";

import { useState } from "react";
import Link from "next/link";

const benefits = [
  {
    title: "Make a Real Impact",
    desc: "Your time and skills directly empower women and girls in rural Balochistan, creating lasting change in underserved communities.",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    title: "Build Skills & Experience",
    desc: "Gain hands-on experience in community development, project management, education, and advocacy while working alongside experienced professionals.",
    icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
    color: "text-blue-500 bg-blue-50",
  },
  {
    title: "Join a Supportive Community",
    desc: "Connect with like-minded individuals passionate about social change, women's rights, and community empowerment across Pakistan.",
    icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
    color: "text-accent-500 bg-accent-50",
  },
];

const opportunities = [
  {
    title: "Education & Teaching",
    desc: "Teach girls at our School of Scholars or help develop STEM and leadership curriculum.",
    icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.966 8.966 0 0 0-6 2.292m0-14.25v14.25",
  },
  {
    title: "Community Outreach",
    desc: "Help organize awareness campaigns, community events, and advocacy programs in rural areas.",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
  },
  {
    title: "Women's Empowerment",
    desc: "Support entrepreneurship training, mentorship programs, and leadership workshops for young women.",
    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
  {
    title: "Climate & Resilience",
    desc: "Participate in climate action projects, water management, and disaster response initiatives.",
    icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
  },
];

export default function Volunteer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {}
    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 flex items-center">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />
        <div className="relative mx-auto max-w-lg px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 shadow-lg animate-fade-in-up">
            <svg className="h-10 w-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h1 className="mt-6 animate-fade-in-up text-3xl font-bold text-zinc-800" style={{ animationDelay: "150ms" }}>
            Thank You for Volunteering!
          </h1>
          <p className="mt-3 animate-fade-in-up text-zinc-600" style={{ animationDelay: "300ms" }}>
            We appreciate your interest in supporting MRC&apos;s mission. Our team will review your application and reach out to you at <strong>{form.email}</strong> with the next steps.
          </p>
          <div className="mt-8 animate-fade-in-up flex flex-col items-center gap-3 sm:flex-row sm:justify-center" style={{ animationDelay: "450ms" }}>
            <Link href="/" className="rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Back to Home
            </Link>
            <Link href="/contact" className="rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-700 transition-all hover:border-zinc-400 hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Get Involved
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Volunteer{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            Join MRC in empowering women and girls across Balochistan. Your time, skills, and passion can make a lasting difference.
          </p>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="relative bg-white px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
              Why Volunteer?
            </span>
            <h2 className="mt-4 text-3xl font-bold text-zinc-800 sm:text-4xl">
              Make a Difference.{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Grow With Us.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div key={b.title} className="animate-fade-in-up group rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${b.color} transition-all group-hover:scale-110`}>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-800">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opportunities ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/50 via-white to-accent-50/50 px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              Opportunities
            </span>
            <h2 className="mt-4 text-3xl font-bold text-zinc-800 sm:text-4xl">
              Find Your{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Role
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-500">
              We have a variety of volunteer opportunities to match your skills and interests.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((opp, i) => (
              <div key={opp.title} className="animate-fade-in-up group rounded-2xl border border-zinc-200/70 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-all group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={opp.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-zinc-800">{opp.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{opp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="relative bg-white px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="animate-fade-in-up rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-xl shadow-zinc-500/5 sm:p-10 lg:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-zinc-800 sm:text-3xl">Apply to Volunteer</h2>
              <p className="mt-2 text-zinc-500">Fill out the form below and we&apos;ll get back to you with the next steps.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-zinc-700">Full Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 transition-all focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/10" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-zinc-700">Email Address *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 transition-all focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/10" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-zinc-700">Phone Number *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 transition-all focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/10" placeholder="03XX-XXXXXXX" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-zinc-700">Availability *</label>
                  <select required value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-800 transition-all focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/10">
                    <option value="">Select availability</option>
                    <option value="weekdays">Weekdays (Mon-Fri)</option>
                    <option value="weekends">Weekends</option>
                    <option value="evenings">Evenings</option>
                    <option value="flexible">Flexible</option>
                    <option value="full-time">Full Time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-zinc-700">Skills & Experience *</label>
                <textarea required value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })}
                  rows={3}
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 transition-all focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/10"
                  placeholder="Tell us about your skills, experience, and what you'd like to contribute..." />
              </div>

              <div>
                <label className="text-sm font-semibold text-zinc-700">Why do you want to volunteer? (optional)</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 transition-all focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/10"
                  placeholder="Share your motivation and how you'd like to make a difference..." />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Not Ready to Volunteer?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-100">
            You can still make a difference. Consider donating to support our programs or sharing our mission with your network.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
