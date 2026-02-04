import React from "react";
import { motion } from "framer-motion";

export default function UpgradeStatsSectionFinal() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Floating Badges Left */}
        <div className="pointer-events-none absolute left-1 sm:left-6 top-4 sm:top-10 flex flex-col gap-4">
          <FloatingBadge text="Viral Reels Editing" delay={0} />
          <div className="flex items-center gap-3 pl-1">
            <FloatIcon label="mic" delay={0.4}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-80">
                <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3Z" stroke="white" strokeWidth="1.5" />
                <path d="M5 11a7 7 0 1 0 14 0" stroke="white" strokeWidth="1.5" />
                <path d="M12 18v4" stroke="white" strokeWidth="1.5" />
              </svg>
            </FloatIcon>
            <FloatingBadge text="Content Strategy" delay={0.15} small />
            <GlowArrow delay={0.2} />
          </div>
        </div>

        {/* Floating Badges Right */}
        <div className="pointer-events-none absolute right-1 sm:right-6 top-6 sm:top-12 flex flex-col gap-4 items-end">
          <div className="flex items-center gap-3 pr-1">
            <FloatIcon label="phone" delay={0.3}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-80">
                <path d="M15 3H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" stroke="white" strokeWidth="1.5" />
                <path d="M9 7h6M9 17h6" stroke="white" strokeWidth="1.5" />
              </svg>
            </FloatIcon>
            <FloatingBadge text="Personal Branding" delay={0.45} />
          </div>
          <div className="flex items-center gap-3">
            <FloatingBadge text="Social Media Management" delay={0.55} />
            <GlowArrow delay={0.65} />
          </div>
        </div>

        {/* Headline */}
        <div className="relative pt-24 sm:pt-28 md:pt-32">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center text-[7.5vw] leading-[1.15] font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[56px]"
          >
            Tired of boring video content that
            <br className="hidden sm:block" />
            don’t stand out? It’s time to upgrade
            <br className="hidden sm:block" />
            <span className="text-yellow-200">the game with us!</span>
          </motion.h2>

          {/* Shine */}
          <motion.div
            aria-hidden
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ x: "120%", opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="pointer-events-none absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 h-24 sm:h-28 w-1/3 rotate-2"
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl" />
          </motion.div>
        </div>

        {/* Metrics */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <Metric big={200} unit="%" title="More Engagement" subtitle="Viral Edits" index={0} />
          <Metric big={5} unit="X" title="More Reach" subtitle="Strategic Distribution" index={1} />
          <Metric big={50} unit="%" title="More Leads" subtitle="Automated Systems" index={2} />
        </div>

        {/* Bottom Gradient Line */}
        <div className="mt-10 sm:mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}

/* ---------- Components ---------- */
function FloatingBadge({ text, delay = 0, small = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, rotate: -6, scale: 0.98 }}
      animate={{ opacity: 1, y: [0, -6, 0], rotate: [-6, -2, -6], scale: 1 }}
      transition={{ delay, duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.45)] bg-yellow-300 px-3 sm:px-4 ${small ? "py-1" : "py-1.5"}  text-black text-[12px] sm:text-sm font-semibold whitespace-nowrap`}
      style={{ filter: "drop-shadow(0 8px 20px rgba(255, 233, 2, 0.35))" }}
    >
      {text}
    </motion.div>
  );
}

function GlowArrow({ delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1.05, 0.9] }}
      transition={{ delay, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      className="w-6 h-6 rounded-full bg-yellow-200 blur-[2px]"
      style={{ boxShadow: "0 0 30px rgba(99,102,241,0.6)" }}
    />
  );
}

function FloatIcon({ children, label, delay = 0 }) {
  return (
    <motion.div
      aria-label={label}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 0.9, y: [-2, 2, -2] }}
      transition={{ delay, duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="text-white"
    >
      {children}
    </motion.div>
  );
}

function Metric({ big, unit, title, subtitle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, delay: 0.15 + index * 0.12, ease: "easeOut" }}
      className="flex flex-col items-center text-center gap-2 py-10"
    >
      <div className="flex items-baseline gap-2">
        <span className="text-5xl sm:text-6xl font-extrabold tracking-tight">{big}</span>
        {unit && <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">{unit}</span>}
      </div>
      <p className="text-lg sm:text-xl text-white/95 font-semibold">{title}</p>
      <p className="text-sm sm:text-base text-white/50">{subtitle}</p>
    </motion.div>
  );
}
