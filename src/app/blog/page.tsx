"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import ShareButtons from "@/components/ShareButtons";

export default function Blog() {
  const [likes, setLikes] = useState<Record<string, { liked: boolean; count: number }>>({});

  function handleLike(slug: string) {
    setLikes((prev) => {
      const current = prev[slug] || { liked: false, count: 0 };
      if (current.liked) {
        return { ...prev, [slug]: { liked: false, count: current.count - 1 } };
      }
      return { ...prev, [slug]: { liked: true, count: current.count + 1 } };
    });
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pb-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <span className="inline-block animate-fade-in-up rounded-full bg-gradient-to-r from-primary-200 to-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            Stories & Updates
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl" style={{ animationDelay: "150ms" }}>
            Our{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl animate-fade-in-up text-base leading-relaxed text-zinc-600 sm:text-lg" style={{ animationDelay: "300ms" }}>
            Stories, updates, and insights from our work across Balochistan celebrating the
            resilience and achievements of the communities we serve.
          </p>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/20 via-white to-accent-50/20 px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b6b5c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-10">
            {posts.map((post, i) => {
              const state = likes[post.slug] || { liked: false, count: 0 };
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="animate-fade-in-up group relative overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="relative overflow-hidden md:col-span-2">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
                        style={{ minHeight: "220px", maxHeight: "300px" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary-100 px-3 py-0.5 text-xs font-semibold text-primary-700">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-zinc-400">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mt-3 text-lg font-bold text-zinc-800 transition-colors duration-300 group-hover:text-primary-700 sm:text-xl">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-700 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Actions bar */}
                      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-zinc-100 pt-4">
                        {/* Like */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleLike(post.slug)}
                            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all ${
                              state.liked
                                ? "border-primary-200 bg-primary-50 text-primary-600"
                                : "border-zinc-200 bg-white text-zinc-400 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
                            }`}
                            title="Like"
                          >
                            <svg className="h-4 w-4" fill={state.liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                          </button>
                          <span className={`min-w-[1.5rem] text-center text-xs font-semibold ${state.count > 0 ? "text-primary-600" : "text-zinc-400"}`}>
                            {state.count}
                          </span>
                        </div>

                        <span className="text-zinc-200">|</span>

                        {/* Share */}
                        <ShareButtons title={post.title} slug={post.slug} />

                        <span className="text-zinc-200">|</span>

                        {/* Date */}
                        <span className="text-xs text-zinc-400">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
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
            Your support helps us educate girls, empower women, and build resilient communities across Balochistan. Every contribution makes a difference.
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
              <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
