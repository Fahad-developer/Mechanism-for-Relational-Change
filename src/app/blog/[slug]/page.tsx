"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { posts } from "@/data/posts";
import ShareButtons from "@/components/ShareButtons";

export default function BlogPost() {
  const params = useParams();
  const post = posts.find((p) => p.slug === params.slug);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  if (!post) {
    return (
      <section className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-800">Post Not Found</h1>
          <Link href="/blog" className="mt-4 inline-block text-primary-600 underline">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  function handleLike() {
    if (liked) {
      setLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-16 sm:pb-20">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-200/20 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Blog
          </Link>

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
            <span className="text-xs text-zinc-400">{post.date}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ── Image ── */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8 -mt-6">
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            style={{ maxHeight: "450px" }}
          />
        </div>
      </div>

      {/* ── Content ── */}
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="space-y-5 text-base leading-relaxed text-zinc-700 sm:text-lg">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Like + Share */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-zinc-100 pt-6">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              liked
                ? "border-primary-200 bg-primary-50 text-primary-600"
                : "border-zinc-200 bg-white text-zinc-500 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
            }`}
          >
            <svg className="h-4 w-4" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            Like{likeCount > 0 && <span className="font-semibold text-primary-600">{likeCount}</span>}
          </button>

          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </article>

      {/* ── Related Posts ── */}
      <section className="bg-zinc-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-zinc-800 sm:text-3xl">Related Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                      {related.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-zinc-800 transition-colors group-hover:text-primary-700">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-400/15 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-300/10 blur-3xl animate-float-reverse" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Support Our{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-100/80">
            Help us continue creating change for women and girls in Balochistan.
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
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
