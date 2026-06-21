"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What is MRC and what does it do?",
    a: "Mechanism for Rational Change (MRC) is a legally registered, women-led non-profit organization based in Khuzdar, Balochistan, Pakistan. Established in 2015, we empower women, children, and youth through education, leadership development, entrepreneurship, mental health awareness, climate action, and skill enhancement.",
  },
  {
    q: "Where does MRC work?",
    a: "We are actively working across multiple districts in Balochistan, including Khuzdar, Kalat, Quetta, Lasbela/Hub, and Kohlu, with a focus on underserved and rural communities.",
  },
  {
    q: "How is MRC funded?",
    a: "MRC is funded through grants from international partners, institutional donors, and individual contributions. Our partners have included Women Fund Asia, PPAF, Awaz Foundation, Start Network, and others who share our commitment to women's empowerment and community development.",
  },
  {
    q: "How can I volunteer with MRC?",
    a: "We welcome volunteers who are passionate about girls' education, women's empowerment, and community development. You can reach out through our Contact page or follow us on social media for volunteer opportunity announcements.",
  },
  {
    q: "Can I donate to support MRC's work?",
    a: "Yes! Your donations help us educate girls, empower women, and build resilient communities across Balochistan. Every contribution, big or small, makes a meaningful difference in the lives of the communities we serve.",
  },
  {
    q: "What is the School of Scholars?",
    a: "The School of Scholars is MRC's flagship girls' high school in Khuzdar, founded in 2015. It is the first girls' school in the region introducing STEM and leadership education. Currently, 231 girls are enrolled, and it has received the Women Can Do Award from the U.S. Consulate Karachi.",
  },
  {
    q: "What is the Girls Leadership Program?",
    a: "The Girls Leadership Program was a comprehensive fellowship that trained 20 young girls in leadership, communication, advocacy, and community engagement. Fellows designed and implemented community projects, led awareness campaigns, and became confident change-makers in their communities.",
  },
  {
    q: "What is the Her Power project?",
    a: "Her Power is a flagship initiative supported by Women Fund Asia that identified and nurtured 20 young women leaders in Balochistan. Participants received entrepreneurship training and launched their own start-ups, ranging from food businesses to tech platforms.",
  },
  {
    q: "Does MRC work on climate change?",
    a: "Yes. MRC runs climate and resilience programs including water resource management, emergency response, food distributions, winter item distributions, and disaster risk reduction capacity building in partnership with the Start Network.",
  },
  {
    q: "How can I partner with MRC?",
    a: "We're always looking to collaborate with organizations, institutions, and individuals who share our vision. Reach out through our Contact page or email us at info@mrcbalochistan.org to discuss partnership opportunities.",
  },
  {
    q: "Is MRC a registered organization?",
    a: "Yes, MRC was established in 2015 under the Societies Registration Act and is a legally registered, women-led non-profit organization in Pakistan.",
  },
  {
    q: "How can I stay updated on MRC's work?",
    a: "Follow us on social media — Instagram, Facebook, Twitter/X, and LinkedIn — for regular updates on our programs, impact stories, and ways to get involved.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen(open === i ? null : i);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Got Questions?
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            Everything you need to know about MRC, our programs, and how you can get involved.
          </p>
        </div>
      </section>

      {/* ── FAQ List ── */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="animate-fade-in-up overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-zinc-50 sm:px-8"
                  >
                    <span className="text-sm font-semibold text-zinc-800 sm:text-base">
                      {faq.q}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-zinc-400 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-primary-500" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-zinc-100 px-6 py-5 sm:px-8">
                      <p className="text-sm leading-relaxed text-zinc-600">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Still have questions? ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
            Still Have Questions?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
            We&apos;re Here to{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Help</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-zinc-500">
            If you couldn&apos;t find what you were looking for, feel free to reach out to us directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
