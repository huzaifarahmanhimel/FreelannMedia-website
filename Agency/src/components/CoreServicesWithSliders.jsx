import { motion } from "framer-motion";

/**
 * CoreServicesWithSliders (Responsive)
 * - Merged heading + dual auto-running sliders
 * - Fully responsive (clamp fonts, mobile card widths, safe paddings)
 * - Honors prefers-reduced-motion (stops auto-scroll, becomes swipeable)
 */

const SERVICES_ROW_A = [
  { title: "Short Form Videos", body: "Top‑of‑funnel videos for Reels and TikTok." },
  { title: "SAAS Videos", body: "Organic podcasts and explainers to build trust." },
  { title: "Ad Creatives", body: "Direct‑response assets that convert with paid traffic." },
  { title: "Product Demos", body: "Showcase features with crisp motion and UI shots." },
  { title: "VSLs", body: "Compelling long‑form stories that sell without hype." },
  { title: "Launch Videos", body: "Trailer‑style edits to kick off new offers." },
];

const SERVICES_ROW_B = [
  { title: "UGC Ads", body: "Native, relatable creatives with strong hooks." },
  { title: "Brand Films", body: "Identity pieces that build emotional affinity." },
  { title: "Testimonial Edits", body: "Social proof that actually lands." },
  { title: "Web Banners", body: "Lightweight loops for landing pages." },
  { title: "YouTube Shorts", body: "Channel growth with tight, punchy edits." },
  { title: "Course Promos", body: "Lesson teasers and module highlights." },
];

function CubeIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className="h-8 w-8 sm:h-9 sm:w-9 opacity-90">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#6d8cff" />
          <stop offset="1" stopColor="#00e6a8" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#g)" strokeWidth="2">
        <rect x="6" y="10" width="52" height="44" rx="8" opacity=".3" />
        <path d="M12 20l20 10 20-10M32 30v20M12 40l20 10 20-10" />
      </g>
    </svg>
  );
}

function ServiceCard({ title, body }) {
  return (
    <div className="group relative grid min-w-[72vw] xs:min-w-[60vw] sm:min-w-[22rem] lg:min-w-[22rem] max-w-sm grid-rows-[auto_1fr] rounded-2xl sm:rounded-3xl border border-white/10 bg-[radial-gradient(120%_120%_at_10%_-20%,rgba(109,140,255,0.08),transparent_50%)] p-4 sm:p-6 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition-colors duration-300 hover:bg-white/5">
      <div className="mb-3 sm:mb-4 flex items-center gap-3">
        <CubeIcon />
        <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-white">{title}</h3>
      </div>
      <p className="max-w-[48ch] text-[13.5px] sm:text-[15px] leading-relaxed text-neutral-300/80">
        {body}
      </p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/5" />
    </div>
  );
}

function Marquee({ items, reverse = false, speed = 34 }) {
  // If speed is 0 (reduced motion), we render a static, swipeable row.
  if (speed === 0) {
    return (
      <div className="relative -mx-3 overflow-x-auto px-3 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className={`flex gap-3 sm:gap-6 ${reverse ? 'flex-row-reverse' : ''}`}>
          {items.map((it, i) => (
            <ServiceCard key={i} title={it.title} body={it.body} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-3 sm:gap-6 pr-6"
        aria-hidden
        initial={{ x: reverse ? "-50%" : 0 }}
        animate={{ x: reverse ? 0 : "-50%" }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" }}
      >
        {[...Array(2)].map((_, copyIndex) => (
          <div key={copyIndex} className="flex shrink-0 gap-3 sm:gap-6">
            {items.map((it, i) => (
              <ServiceCard key={`${copyIndex}-${i}`} title={it.title} body={it.body} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function CoreServicesWithSliders() {
  const shouldReduceMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rowSpeed = shouldReduceMotion ? 0 : 34; // stop auto-scroll if user prefers reduced motion

  return (
    <section className="relative isolate w-full bg-neutral-950 text-white">
      {/* Heading block */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300/80"
          >
            Core Services
          </motion.span>

          <div className="relative px-2">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 select-none text-balance text-[clamp(1.75rem,6vw,4rem)] font-extrabold tracking-tight text-neutral-400/20 blur-[1px]"
            >
              Types Of Work
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-balance text-[clamp(1.75rem,6vw,4rem)] font-extrabold tracking-tight text-neutral-400"
            >
              Types Of Work
            </motion.h2>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            className="mt-2 sm:mt-3 text-[clamp(1.4rem,5.5vw,3.5rem)] font-extrabold tracking-tight text-white"
          >
            We Do
          </motion.h3>
        </div>
      </div>

      {/* Sliders block */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 pb-14 pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
        {/* Row A */}
        <Marquee items={SERVICES_ROW_A} speed={rowSpeed} />
        <div className="h-4 sm:h-6 md:h-8" />
        {/* Row B (opposite direction) */}
        <Marquee items={SERVICES_ROW_B} reverse speed={rowSpeed} />
      </div>

      {/* Side fades (hide on small screens to avoid clipping) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-neutral-950 to-transparent sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-neutral-950 to-transparent sm:block" />
      {/* Vignette & grain */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:6px_6px]" />
    </section>
  );
}
