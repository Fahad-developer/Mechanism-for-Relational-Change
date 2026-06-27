import { connectDB } from "@/lib/db";
import { NewsModel } from "@/lib/News";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  await connectDB();
  const news = await NewsModel.find({ isPublished: true }).sort({ createdAt: -1 });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Latest Updates
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            MRC{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              News
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            Stay informed with the latest announcements, press releases, and updates
            from our work across Balochistan.
          </p>
        </div>
      </section>

      {/* ── News List ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/20 via-white to-accent-50/20 px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          {news.length === 0 ? (
            <div className="animate-fade-in-up text-center py-20">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-zinc-700">No news yet</h3>
              <p className="mt-2 text-sm text-zinc-500">Check back soon for the latest updates.</p>
            </div>
          ) : (
            <div className="grid gap-10">
              {news.map((item, i) => (
                <div
                  key={item._id?.toString() || i}
                  className="animate-fade-in-up group relative overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="relative overflow-hidden md:col-span-2">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
                          style={{ minHeight: "220px", maxHeight: "300px" }}
                        />
                      ) : (
                        <div className="flex h-full min-h-[220px] max-h-[300px] items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                          <svg className="h-16 w-16 text-primary-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary-100 px-3 py-0.5 text-xs font-semibold text-primary-700">
                          {item.category}
                        </span>
                        <span className="text-xs text-zinc-400">
                          {new Date(item.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                      </div>

                      <h2 className="mt-3 text-lg font-bold text-zinc-800 transition-colors duration-300 group-hover:text-primary-700 sm:text-xl">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-zinc-600 line-clamp-4">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Donate CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-400/15 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
            Support Our Mission
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Help Us Create{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Change</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-100/80">
            Your support helps us educate girls, empower women, and build resilient communities across Balochistan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/donate"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                Donate Now
              </span>
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
