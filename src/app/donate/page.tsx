"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface PaymentMethod {
  _id: string;
  name: string;
  type: string;
  details: string;
  icon?: string;
  isActive: boolean;
  order: number;
}

const typeIcons: Record<string, string> = {
  bank: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
  easypaisa: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  jazzcash: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  paypal: "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z",
  stripe: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  other: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z",
};

const typeLabels: Record<string, string> = {
  bank: "Bank Transfer",
  easypaisa: "Easypaisa",
  jazzcash: "JazzCash",
  paypal: "PayPal",
  stripe: "Stripe",
  other: "Other",
};

export default function Donate() {
  const [methods, setMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    fetch("/api/payment-methods?active=true")
      .then((r) => r.json())
      .then((d) => {
        if (d.methods) setMethods(d.methods);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Support Our Mission
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Make a{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Donation
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            Your contribution empowers women and girls in rural Balochistan through education, leadership, and community development.
          </p>
        </div>
      </section>

      {/* ── Impact Stats ── */}
      <section className="relative bg-white px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Girls Educated", value: "500+", icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z", color: "text-emerald-500 bg-emerald-50" },
              { label: "Women Empowered", value: "2,000+", icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z", color: "text-amber-500 bg-amber-50" },
              { label: "Schools Built", value: "3", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008V11.25Z", color: "text-blue-500 bg-blue-50" },
              { label: "Communities Reached", value: "10,000+", icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z", color: "text-accent-500 bg-accent-50" },
            ].map((stat, i) => (
              <div key={stat.label} className="animate-fade-in-up group rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${stat.color} transition-all group-hover:scale-110`}>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <p className="mt-3 text-2xl font-bold text-zinc-800">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment Methods ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/50 via-white to-accent-50/50 px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
              Send Your Donation
            </span>
            <h2 className="mt-4 text-3xl font-bold text-zinc-800 sm:text-4xl">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Payment Method
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-500">
              Send your contribution directly using any of the methods below. Every donation helps us empower more women and girls in Balochistan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {methods.map((method, i) => (
              <div
                key={method._id}
                className="animate-fade-in-up group rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-all group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={typeIcons[method.type] || typeIcons.other} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-800">{method.name}</h3>
                    <span className="inline-block rounded-full bg-primary-50 px-3 py-0.5 text-xs font-medium text-primary-600">
                      {typeLabels[method.type] || method.type}
                    </span>
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-zinc-50 p-4">
                  <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-700">
                    {method.details}
                  </p>
                </div>
              </div>
            ))}
            {methods.length === 0 && (
              <div className="col-span-full py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100">
                  <svg className="h-8 w-8 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium text-zinc-500">No payment methods available yet.</p>
                <p className="mt-1 text-xs text-zinc-400">Please check back later.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── How to Donate ── */}
      <section className="relative bg-white px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-800 sm:text-4xl">
              How to{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Donate</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Choose a Method", desc: "Select your preferred payment method from the options above." },
              { step: "02", title: "Send Your Contribution", desc: "Transfer your donation using the account details provided." },
              { step: "03", title: "Notify Us (Optional)", desc: "Let us know about your donation so we can acknowledge and thank you." },
            ].map((s, i) => (
              <div key={s.step} className="animate-fade-in-up text-center" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-lg font-bold text-white shadow-lg shadow-primary-200/50">
                  {s.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Every Contribution Counts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-100">
            Even a small donation can help educate a girl, empower a woman, or build a stronger community in Balochistan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/volunteer"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
