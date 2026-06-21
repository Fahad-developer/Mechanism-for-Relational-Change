"use client";

import { useState } from "react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mrcbalochistan/",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 1 0 0l0 0m-8.48 1.975a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-12.5Z" />
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/MercBalochistan",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 1 0 0l0 0m-8.48 1.975a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-12.5Z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Mechanism-For-Rational-Change-MRC-359280190911089",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 1 0 0l0 0m-8.48 1.975a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-12.5Z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mrc-balochistan-30206a2b1",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 1 0 0l0 0m-8.48 1.975a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-12.5Z" />
    ),
  },
];

const contactInfo = [
  {
    label: "Email",
    value: "info@mrcbalochistan.org",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    ),
  },
  {
    label: "Location",
    value: "Saddullah Street Umer Farooq Chowk Khuzdar, Baluchistan, Pakistan.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    ),
  },
  {
    label: "Phone",
    value: "+92-0848-412037",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 1 0 0l0 0m-8.48 1.975a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-12.5Z" />
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch {}
    setLoading(false);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Get in Touch
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Contact{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            We&apos;d love to hear from you. Whether you want to partner, volunteer, donate, or simply
            learn more about our work reach out and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-100/10 blur-3xl animate-float-reverse" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* ── Left: Form ── */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-zinc-800 sm:text-3xl">
                Send Us a{" "}
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Fill out the form and we&apos;ll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                      Full Name <span className="text-secondary-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-sm transition-all duration-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                      Email <span className="text-secondary-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-sm transition-all duration-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-700">
                    Subject <span className="text-secondary-500">*</span>
                  </label>
                  <select
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-800 shadow-sm transition-all duration-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donation">Donation / Support</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                    Message <span className="text-secondary-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 shadow-sm transition-all duration-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 resize-y"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-br from-primary-600 to-primary-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
                >
                  {sent ? "✓ Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>

            {/* ── Right: Info + Social ── */}
            <div className="animate-fade-in-up space-y-8" style={{ animationDelay: "200ms" }}>
              {/* Contact Info */}
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-zinc-800">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          {info.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-700">{info.label}</p>
                        <p className="text-sm text-zinc-500">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-bold text-zinc-800">Follow Us</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Stay connected through our social media channels.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { name: "Instagram", href: "https://www.instagram.com/mrcbalochistan/", bg: "bg-gradient-to-br from-pink-500 to-purple-600" },
                    { name: "Twitter / X", href: "https://twitter.com/MercBalochistan", bg: "bg-zinc-900" },
                    { name: "Facebook", href: "https://www.facebook.com/Mechanism-For-Rational-Change-MRC-359280190911089", bg: "bg-blue-600" },
                    { name: "LinkedIn", href: "https://www.linkedin.com/in/mrc-balochistan-30206a2b1", bg: "bg-blue-700" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-full ${social.bg} px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                <iframe
                  title="MRC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92415.02471483706!2d66.56682561161864!3d27.80080385105176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935b6a4a9e1e6b7%3A0x3b8e9f1c5f9e6b7!2sKhuzdar%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "1rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
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
            Quick Response
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We&apos;d Love to Hear From You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-100/80">
            Whether you have a question, an idea, or want to collaborate we&apos;re here.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@mrcbalochistan.org"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              <span className="relative z-10">Email Us Directly</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <Link
              href="/volunteer"
              className="w-full sm:w-auto rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
