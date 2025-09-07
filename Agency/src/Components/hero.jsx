import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// React JS version (no TypeScript) of the hero with scroll-animated video
export default function MZMediaHero() {
  const navLinks = [
    { label: "Review", href: "#review" },
    { label: "Work", href: "#work" },
    { label: "Case Study", href: "#case" },
    { label: "Process", href: "#process" },
  ];

  // Scroll animation for the video section
  const videoWrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoWrapRef,
    // animation starts when the section hits the bottom of viewport and ends when it reaches center
    offset: ["start 90%", "center 50%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <div className="relative isolate overflow-hidden bg-[#0b0b0f] text-white">
      <GradientBlobs />

      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="font-semibold tracking-wide text-white/90">MZ MEDIA</span>
            </div>
            <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#2848ff] px-4 py-2 text-sm font-semibold shadow-[0_8px_30px_rgb(40,72,255,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Book A Call
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero copy */}
      <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <h1 className="text-balance font-semibold leading-[1.05] tracking-tight">
            <span className="block text-4xl text-white/90 sm:text-5xl md:text-6xl">Get More Leads</span>
            <span className="mt-3 block text-3xl sm:text-5xl md:text-[52px]">
              Using {" "}
              <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">Quality Video Content</span>
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            We help entrepreneurs and businesses with Done-For-You organic content systems that generate leads on autopilot.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <AvatarStack count={5} />
            <div className="text-left">
              <div className="text-sm text-white/90">Loved by 500+ Businesses worldwide.</div>
              <div className="text-xs text-white/50">Our Clients Speak for Us</div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#2848ff] px-6 py-3 text-base font-semibold shadow-[0_12px_40px_rgb(40,72,255,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Book A Call
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Video Section with Scroll Animation */}
        <motion.div
          ref={videoWrapRef}
          style={{ scale, opacity, y }}
          className="relative mx-auto mt-20 max-w-5xl will-change-transform"
        >
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(88,104,255,0.12)] bg-gradient-to-b from-white/5 to-white/[0.03]">
            <video
              controls
              className="w-full h-auto"
              poster="/video-thumbnail.png"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* bottom soft gradient echo */}
          <div className="pointer-events-none absolute -bottom-6 left-1/2 h-24 w-[120%] -translate-x-1/2 rounded-[999px] bg-gradient-to-r from-indigo-600/20 via-fuchsia-500/10 to-cyan-400/20 blur-2xl" />
        </motion.div>
      </section>
    </div>
  );
}

function LogoMark() {
  return (
    <div className="grid size-9 place-items-center rounded-lg bg-white text-black shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17L10 7l2 3 2-3 6 10" />
      </svg>
    </div>
  );
}

function AvatarStack({ count = 5 }) {
  const avatars = useMemo(() => Array.from({ length: count }), [count]);
  return (
    <div className="flex -space-x-3">
      {avatars.map((_, i) => (
        <div
          key={i}
          className="relative inline-grid size-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-white/20 to-white/10 text-xs text-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
            <path d="M20 20a8 8 0 1 0-16 0" />
          </svg>
          <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent mix-blend-overlay" />
        </div>
      ))}
    </div>
  );
}

function GradientBlobs() {
  return (
    <>
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(69,87,255,0.28),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute top-40 left-10 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(181,104,255,0.18),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute top-52 right-10 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(80,212,255,0.16),transparent_70%)] blur-2xl" />
    </>
  );
}
