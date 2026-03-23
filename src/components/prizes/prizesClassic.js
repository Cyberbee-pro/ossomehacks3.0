"use client";

import { motion } from "framer-motion";
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

export default function PrizesClassic() {
  return (
    <section className="relative overflow-hidden px-4 py-16 font-poppins md:px-8 md:py-24">
      <div className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#1f4047]/35 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-yellow text-5xl font-bold leading-tight sm:text-7xl md:text-8xl">
            Rewards and Prizes
          </h2>
          <p className="mt-4 max-w-3xl text-base text-text/90 md:text-xl">
            Compete across both tracks for cash rewards, certificates, and sponsor-backed recognitions.
          </p>
        </motion.div>

        <div className="border-y-2 border-text/70">
          {PRIZE_ROWS.map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="grid grid-cols-1 gap-3 border-b border-text/30 px-0 py-6 last:border-b-0 md:grid-cols-[220px_1fr_220px] md:items-center md:gap-6"
            >
              <div>
                <p className="text-3xl font-bold text-yellow md:text-4xl">{prize.amount}</p>
                <p className="text-sm font-medium tracking-[0.08em] text-text/80 uppercase">{prize.type}</p>
              </div>

              <p className="text-xl font-semibold leading-snug text-text md:text-2xl">{prize.title}</p>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-text/60 px-4 py-1.5 text-sm font-semibold tracking-[0.08em] text-text uppercase">
                <IconBadge icon="certificate" />
                {prize.perk}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {RECOGNITION_ITEMS.map((item) => (
            <div key={item.id} className="border border-text/45 bg-[#1f4047]/20 px-5 py-4">
              <div className="mb-2 inline-flex items-center gap-2 text-yellow">
                <IconBadge icon={item.icon} />
                <span className="text-xs font-semibold uppercase tracking-[0.1em]">Recognition</span>
              </div>
              <h3 className="text-2xl font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-text/85 md:text-base">{item.note}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
