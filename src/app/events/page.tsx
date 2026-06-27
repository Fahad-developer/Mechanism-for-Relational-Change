import { connectDB } from "@/lib/db";
import { EventModel } from "@/lib/Event";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  await connectDB();
  const events = await EventModel.find({ isUpcoming: true }).sort({ date: 1 });

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-24 px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-200/25 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-200/15 blur-3xl animate-float-reverse" />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center animate-fade-in-up">
          <span className="inline-block rounded-full bg-gradient-to-r from-accent-200 to-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-700 shadow-sm">
            Events
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="mt-3 text-base leading-relaxed text-zinc-500">
            Join us at our upcoming programs, workshops, and community gatherings across Balochistan.
          </p>
        </div>

        {events.length === 0 ? (
          <div className="mt-16 animate-fade-in-up text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 text-primary-500">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-zinc-700">No upcoming events</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Check back soon for new events and programs.
            </p>
          </div>
        ) : (
          <div className="mt-14 space-y-6">
            {events.map((event, i) => {
              const eventDate = new Date(event.date);
              const month = eventDate.toLocaleString("default", { month: "short" });
              const day = eventDate.getDate();

              return (
                <div
                  key={event._id?.toString() || i}
                  className="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/70 backdrop-blur-sm p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="flex flex-col gap-6 sm:flex-row">
                    {/* Date badge */}
                    <div className="flex shrink-0 flex-col items-center justify-center self-start rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 px-5 py-3 text-white shadow-md shadow-primary-200/40 sm:w-20">
                      <span className="text-xs font-semibold uppercase tracking-wider">{month}</span>
                      <span className="text-2xl font-bold">{day}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-zinc-800 transition-colors group-hover:text-primary-700">
                        {event.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-3 text-sm text-zinc-500">
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="h-4 w-4 text-primary-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          {event.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="h-4 w-4 text-primary-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {event.description}
                      </p>
                    </div>

                    {/* Image */}
                    {event.image && (
                      <div className="shrink-0 w-full sm:w-40 h-40 overflow-hidden rounded-xl">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={160}
                          height={160}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
