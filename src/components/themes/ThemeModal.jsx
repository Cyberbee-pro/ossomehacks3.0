"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeModal({ theme, open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && theme && (
        <motion.div
          className="fixed inset-0 z-[120] bg-black/65 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto mt-4 flex h-[calc(100dvh-2rem)] w-[min(1080px,96vw)] flex-col overflow-hidden border-2 border-yellow/70 bg-[#0f2024] text-text shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:mt-8 md:h-[calc(100dvh-4rem)]"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-yellow/35 px-5 py-4 md:px-7 md:py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow/85">
                  Theme Brief
                </p>
                <h3 className="mt-1 text-2xl font-bold leading-tight text-yellow md:text-4xl">
                  {theme.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-text/90 md:text-base">{theme.subtitle}</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="ml-3 border border-yellow/55 px-3 py-1 text-sm font-semibold uppercase tracking-[0.08em] text-yellow transition hover:bg-yellow hover:text-background"
                aria-label="Close theme modal"
              >
                Close
              </button>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[330px_1fr]">
              <div className="relative border-b border-yellow/30 md:border-r md:border-b-0">
                <div className="relative h-[230px] w-full md:h-full">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 330px"
                    className="object-contain p-4 md:p-6"
                  />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,198,39,0.12),_transparent_65%)]" />
              </div>

              <div className="min-h-0 overflow-y-auto px-5 py-5 md:px-7 md:py-6">
                <p className="max-w-3xl text-sm leading-relaxed text-text/95 md:text-base">
                  {theme.summary}
                </p>

                <div className="mt-6 space-y-5">
                  {theme.sections.map((section) => (
                    <section key={section.title} className="border-l-2 border-yellow/60 pl-4">
                      <h4 className="text-base font-semibold uppercase tracking-[0.06em] text-yellow md:text-lg">
                        {section.title}
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="text-sm leading-relaxed text-text/90 md:text-[15px]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
