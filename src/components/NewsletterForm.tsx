"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800 focus-within:ring-2 focus-within:ring-emerald-500"
    >
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none"
      />
      <button
        type="submit"
        className="bg-emerald-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
      >
        Join
      </button>
    </form>
  );
}
