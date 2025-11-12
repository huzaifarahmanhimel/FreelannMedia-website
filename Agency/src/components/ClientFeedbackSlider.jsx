import { motion } from "framer-motion";
import React from "react";

// ClientFeedbackSlider (450x500 fixed card size)
// - Each card has a consistent 450px width and 500px height.
// - Keeps auto-running marquee motion and responsive paddings.

const SAMPLE = [
  {
    name: "Spencer Pawliw",
    niche: "Ecom Niche",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    chips: ["Generated 1M+ Views", "7k+ Subs"],
  },
  {
    name: "Nathan Nazareth",
    niche: "Dropshipping niche",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop",
    chips: ["Generated 15M+ Views", "500k+ Subs"],
  },
  {
    name: "Lucy Watson",
    niche: "AWS Niche",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1600&auto=format&fit=crop",
    chips: ["4.2M+ Views", "120k+ Subs"],
  },
  {
    name: "Jon Reyes",
    niche: "Fitness Niche",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop",
    chips: ["2.7M+ Views", "85k+ Subs"],
  },
  {
    name: "Amelia Grant",
    niche: "Coaching Niche",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
    chips: ["3.1M+ Views", "60k+ Subs"],
  },
];

const Chip = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md ring-1 ring-white/20">
      {children}
    </span>
  );
};

const FeedbackCard = ({ item }) => {
  return (
    <div className="relative w-[450px] h-[500px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
          {item.name}
        </h3>
        <p className="mt-1 text-sm text-neutral-300/90">{item.niche}</p>

        {item.chips && item.chips.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.chips.map((c, i) => (
              <Chip key={i}>{c}</Chip>
            ))}
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </div>
  );
};

const Marquee = ({ items, speed = 38 }) => {
  return (
    <div className="relative overflow-hidden px-8 sm:px-12 lg:px-20"> {/* Side padding */}
      <motion.div
        className="flex gap-8 sm:gap-10 pr-8"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" }}
      >
        {[...Array(2)].map((_, copyIndex) => (
          <div key={copyIndex} className="flex shrink-0 gap-8 sm:gap-10">
            {items.map((it, i) => (
              <FeedbackCard key={`${copyIndex}-${i}`} item={it} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ClientFeedbackSlider = ({ items = SAMPLE, title = "How We", subtitle = "Benefit Our Clients" }) => {
  return (
    <section className="relative w-full bg-neutral-950 py-12 sm:py-16 md:py-20 text-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className="text-center">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300/80">Feedback</p>
          <h2 className="mt-2 text-[clamp(1.4rem,5vw,2.5rem)] font-extrabold tracking-tight text-neutral-300">{title}</h2>
          <h3 className="text-[clamp(1.6rem,6vw,3rem)] font-extrabold tracking-tight text-white">{subtitle}</h3>
        </div>

        <div className="mt-10">
          <Marquee items={items} speed={40} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 sm:block sm:w-20 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 sm:block sm:w-20 bg-gradient-to-l from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:6px_6px]" />
    </section>
  );
};

export default ClientFeedbackSlider;