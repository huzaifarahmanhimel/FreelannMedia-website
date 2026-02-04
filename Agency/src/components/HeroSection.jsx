import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function HeroSection() {
  // Framer Motion for subtle background parallax in the video card
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Autoplay video only when visible
  const videoBoxRef = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(videoBoxRef, { amount: 0.6 });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView]);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* spacing so content doesn't hide behind fixed navbar */}
        <div className="pt-28 sm:pt-32 md:pt-36" />

        {/* Decorative gradient glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(80%_50%_at_50%_0%,rgba(88,28,135,0.25),transparent_60%)]" />

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* Headline */}
          <h1 className="text-center font-extrabold leading-tight tracking-tight">
            <span className="block text-[9vw] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">Turn <span className="text-yellow-200">Your Content</span></span>
            <span className="block text-[9vw] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Into <span className="text-white">a Revenue Engine</span>
            </span>
          </h1>

          {/* Subcopy */}
          <p className="mt-4 sm:mt-5 text-center text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            We help entrepreneurs and businesses with Done-For-You organic content systems that generate leads on autopilot.
          </p>

          {/* Social proof */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <div className="flex -space-x-3">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Client 1" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-black" />
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Client 2" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-black" />
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Client 3" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-black" />
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Client 4" className="hidden sm:block w-10 h-10 rounded-full border-2 border-black" />
            </div>
            <div className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              Loved by <span className="text-white font-semibold">250+ Businesses</span> worldwide
              <span className="block text-xs sm:text-sm">Our clients speak for us</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-black shadow-lg hover:bg-yellow-500 transition"
            >
              Book A Call
            </a>
          </div>
        </div>
      </section>

      {/* ===== VIDEO SECTION (Merged) ===== */}
      <section id="video" className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden py-20">
        <motion.div
          style={{ y }}
          ref={videoBoxRef}
          className="relative w-[90%] max-w-4xl rounded-3xl bg-gradient-to-b from-[#5B21B6]/40 to-[#1E1B4B]/40 p-[2px] shadow-2xl backdrop-blur-2xl"
        >
          <div className="bg-gradient-to-b from-[#1E1B4B]/80 to-[#0B0B0F]/80 rounded-3xl overflow-hidden">
            {/* Video Preview */}
            <div className="relative mx-auto w-full max-w-3xl px-6 sm:px-10 py-10">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                className="rounded-2xl border border-white/10 shadow-lg w-full"
              >
                <source src="https://www.youtube.com/watch?v=jJQTsmrGhqc" type="video/mp4" />
              </video>

              {/* Overlay Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-black/20 to-black/40"
              >
                <div className="bg-purple-700/80 p-4 rounded-full backdrop-blur-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
