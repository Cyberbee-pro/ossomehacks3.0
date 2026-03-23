"use client";

import { PRIZE_ROWS, RECOGNITION_ITEMS } from "@/data/prizes";

function IconBadge({ icon }) {
  if (icon === "trophy") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M8 3h8v2a4 4 0 0 0 4 4v1a6 6 0 0 1-6 6h-1v2h3v2H8v-2h3v-2h-1a6 6 0 0 1-6-6V9a4 4 0 0 0 4-4V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M6 3h12v12H6z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m9 9 3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 15v5l2-2 2 2v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Prizes() {
  const byTrack = {
    claw: PRIZE_ROWS.filter((item) => item.track === "Claw & Shield"),
    open: PRIZE_ROWS.filter((item) => item.track === "Open Innovation with AI"),
  };

  return (
    <section className="px-4 py-16 font-poppins md:px-8 md:py-24">
      <div className="relative mx-auto w-full max-w-6xl border-2 border-yellow/80 bg-[#1f4047]/25 p-5 shadow-[8px_8px_0_0_#ffc627] md:p-8">
        <div className="mb-8 border-b border-dashed border-text/45 pb-6 md:mb-10">
          <h2 className="text-center font-poppins font-bold text-yellow text-5xl sm:text-7xl xl:text-8xl mb-12">
            Prizes
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/95 md:text-xl">
            Two tracks. Four cash awards.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[
            { id: "claw", heading: "Claw & Shield Track", items: byTrack.claw },
            { id: "open", heading: "Open Innovation with AI", items: byTrack.open },
          ].map((group) => (
            <article
              key={group.id}
              className="border border-text/45 bg-background/45"
            >
              <div className="border-b border-text/40 px-4 py-3 md:px-5">
                <h3 className="text-2xl font-bold leading-tight text-yellow md:text-3xl">{group.heading}</h3>
              </div>

              <div>
                {group.items.map((prize) => (
                  <div
                    key={prize.id}
                    className="grid grid-cols-1 gap-3 border-b border-dashed border-text/35 px-4 py-4 last:border-b-0 md:grid-cols-[150px_1fr_auto] md:items-center md:px-5"
                  >
                    <div>
                      <p className="text-3xl font-bold leading-none text-yellow">{prize.amount}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-text/80">{prize.type}</p>
                    </div>
                    <p className="text-lg font-semibold leading-tight text-text md:text-xl">{prize.title}</p>
                    <div className="inline-flex w-fit items-center gap-2 border border-text/55 bg-[#1f4047]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-text">
                      <IconBadge icon="certificate" />
                      {prize.perk}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border border-text/45 bg-background/35 p-4 md:p-5">
          <h3 className="mb-4 text-2xl font-bold uppercase tracking-[0.08em] text-yellow md:text-3xl">Additional Recognition</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {RECOGNITION_ITEMS.map((item) => (
              <div key={item.id} className="border border-text/40 bg-[#1f4047]/30 px-4 py-3">
                <div className="mb-2 inline-flex items-center gap-2 text-yellow">
                  <IconBadge icon={item.icon} />
                  <span className="text-xs font-semibold uppercase tracking-[0.1em]">Award</span>
                </div>
                <h4 className="text-xl font-semibold text-text">{item.title}</h4>
                <p className="mt-1 text-sm text-text/90">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
