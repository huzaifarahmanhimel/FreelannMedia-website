// CaseStudies.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: "easeOut" },
  viewport: { once: true, amount: 0.4 },
});

export default function CaseStudies() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20 md:pt-24">
        <motion.p
          {...fadeUp(0)}
          className="text-center text-xs sm:text-sm tracking-[0.2em] text-white/70 uppercase"
        >
          Case Studies
        </motion.p>

        <motion.h2
          {...fadeUp(0.05)}
          className="mt-4 text-center font-extrabold leading-[1.05] tracking-tight"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl text-white/60">
            Some Solid
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl text-white">
            Case Studies
          </span>
        </motion.h2>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24 md:pb-28">
        <motion.div
          {...fadeUp(0.1)}
          className="relative mt-10 sm:mt-14 rounded-3xl border border-white/10 bg-[#0b0b10]/70 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04),_0_10px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,_rgba(66,99,235,0.18),transparent_70%)]" />
          <div className="absolute -top-52 -left-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,_rgba(109,40,217,0.12),transparent_70%)]" />

          <div className="relative px-6 sm:px-10 md:px-14 py-10 sm:py-12 md:py-14">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 text-white/70">
                <span className="text-sm font-semibold tracking-[0.18em]">01</span>
                <span className="text-sm font-semibold tracking-[0.18em]">
                  CASE STUDY
                </span>
              </div>

              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-blue-500 transition"
              >
                Book A Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <motion.h3
              {...fadeUp(0.12)}
              className="mt-6 text-2xl sm:text-3xl md:text-[40px] leading-tight font-semibold"
            >
              <span className="text-white/70">
                “With just 5,000 subscribers, Spencer now
              </span>{" "}
              <span className="text-white">generates $350K per month”</span>
            </motion.h3>

            <motion.div {...fadeUp(0.18)} className="mt-6 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/80?img=15"
                alt="Neel Nafis"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-semibold">Kyle Blackwell</p>
                <p className="text-white/60 text-sm">Founder</p>
              </div>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              <motion.div
                {...fadeUp(0.22)}
                className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8"
              >
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  <div className="col-span-1">
                    <p className="text-3xl sm:text-4xl font-extrabold">250%</p>
                    <p className="text-white/60 mt-1 text-sm">Revenue Growth</p>
                    <div className="mt-6 h-64 sm:h-72 flex items-end gap-6">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
                        className="w-24 sm:w-28 rounded-2xl bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.35)]"
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <p className="text-3xl sm:text-4xl font-extrabold">200%</p>
                    <p className="text-white/60 mt-1 text-sm">Saved on Ads</p>
                    <div className="mt-6 h-64 sm:h-72 flex items-end gap-6">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "55%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                        className="w-20 sm:w-24 rounded-2xl bg-indigo-300/80 shadow-[0_0_26px_rgba(165,180,252,0.35)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.24)} className="rounded-2xl overflow-hidden">
                <div className="relative">
                  <video
                    src="/videos/spencer-case.mp4"
                    className="w-full aspect-[16/9] object-cover"
                    controls
                    preload="metadata"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition">
                    <span className="rounded-xl bg-purple-700/90 px-4 py-3 shadow">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7-11-7z" fill="white" />
                      </svg>
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white/5" />
          <div className="px-6 sm:px-10 md:px-14 pb-8">
            <div className="h-[1px] w-full bg-white/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
