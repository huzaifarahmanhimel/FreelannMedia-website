import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function VideoSection() {
  // Refs
  const sectionRef = useRef(null); // whole section
  const boxRef = useRef(null); // animated card (video box)
  const videoRef = useRef(null);

  // Play/pause video based on visibility of the video box
  const inView = useInView(boxRef, { amount: 0.6 });
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView]);

  // Scroll progress ONLY for the video box area
  // The animation maps to when the user scrolls over the box (enter -> leave)
  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start 80%", "end 20%"],
  });

  // Map progress to subtle transforms
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.98]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.55, 0.25]);
  const shineX = useTransform(scrollYProgress, [0, 1], ["-30%", "130%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden py-20">
      {/* Video Card with local scroll-driven motion */}
      <motion.div
        ref={boxRef}
        style={{ y, scale, rotate }}
        className="relative w-[90%] max-w-4xl rounded-3xl p-[2px] shadow-2xl"
      >
        {/* Outer gradient frame (reacts to glow) */}
        <motion.div
          style={{ boxShadow: glow.to((g) => `0 20px 50px rgba(139,92,246,${g})`) }}
          className="rounded-3xl bg-gradient-to-b from-[#5B21B6]/40 to-[#1E1B4B]/40 backdrop-blur-xl"
        >
          {/* Inner surface */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E1B4B]/80 to-[#0B0B0F]/80">
            {/* Video */}
            <div className="relative mx-auto w-full max-w-3xl px-6 sm:px-10 py-10">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                className="rounded-2xl border border-white/10 shadow-lg w-full"
              >
                <source src="/your-video.mp4" type="video/mp4" />
              </video>

              {/* Play icon pulse on first view */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-purple-700/70 p-4 rounded-full backdrop-blur-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
                  </svg>
                </div>
              </motion.div>

              {/* Glass shine that sweeps across with scroll */}
              <motion.div
                aria-hidden
                style={{ left: shineX }}
                className="pointer-events-none absolute top-0 h-full w-1/3 max-w-[240px] opacity-20"
              >
                <div className="h-full w-full rotate-6 bg-gradient-to-r from-transparent via-white to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
