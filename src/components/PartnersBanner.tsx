import Image from "next/image";

const partners = [
  { name: "NHN", src: "/banner/NHN-removebg.png" },
  { name: "Awaz Foundation", src: "/banner/awaz-removebg.png" },
  { name: "IDSP", src: "/banner/idsp-removebg.png" },
  { name: "Malala Fund", src: "/banner/malalala-removebg.png" },
  { name: "PPAF", src: "/banner/ppaf.png" },
  { name: "Start Network", src: "/banner/startnetwork-removebg.png" },
  { name: "Women Fund Asia", src: "/banner/wfa-removebg.png" },
];

export default function PartnersBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/20 to-accent-50/20 px-6 py-20 sm:py-24 lg:px-8">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary-100/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent-100/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl animate-fade-in-up text-center">
          <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
            Our Partners
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Leading Organizations
            </span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-500">
            Collaborating with national and international partners to drive meaningful change across Balochistan.
          </p>
        </div>

        {/* Scrolling banner */}
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/50 px-4 sm:px-8 py-5 sm:py-8 backdrop-blur-sm">
          <div className="flex animate-marquee items-center gap-8 sm:gap-16">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex h-14 sm:h-20 w-28 sm:w-40 shrink-0 items-center justify-center grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
