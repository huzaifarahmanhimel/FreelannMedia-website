import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsReelsSection() {
  const items = [
    {
      src: "/mnt/data/WhatsApp Video 2025-10-06 at 7.37.15 PM.mp4",
      quote: "Honestly, they are the best in the game, and I highly recommend.",
      author: "Nick Barner",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      src: "/videos/video-2.mp4",
      quote: "Our reach and conversions jumped fast — the system just works.",
      author: "Chloe Andrews",
      role: "Founder, Glow Co.",
      avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
      src: "/videos/video-3.mp4",
      quote: "Editing quality is top notch. Zero hassle, great communication.",
      author: "Marcus Lin",
      role: "YouTuber & Coach",
      avatar: "https://i.pravatar.cc/80?img=45",
    },
    {
      src: "/videos/video-4.mp4",
      quote: "The content engine saves us hours weekly — huge win.",
      author: "Aisha Patel",
      role: "CMO, Nimbus",
      avatar: "https://i.pravatar.cc/80?img=18",
    },
    {
      src: "/videos/video-5.mp4",
      quote: "From scripts to posting — they handle everything flawlessly.",
      author: "Tom Reyes",
      role: "Agency Owner",
      avatar: "https://i.pravatar.cc/80?img=5",
    },
  ];

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const dirRef = useRef(0);

  const clamp = (n) => (n + items.length) % items.length;
  const goTo = (n) => {
    const target = clamp(n);
    dirRef.current = target > index ? 1 : -1;
    setIndex(target);
    setPlaying(true);
  };
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const touch = useRef({ x: 0, y: 0 });
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (Math.abs(dx) > 40) {
      dx > 0 ? prev() : next();
    }
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <p className="text-center text-xs tracking-[0.18em] text-white/60">CLIENT TESTIMONIALS</p>
        <h2 className="mt-2 text-center font-extrabold tracking-tight leading-tight text-[7vw] sm:text-3xl md:text-4xl">
          <span className="text-white/80">Hear What They’re</span>
          <br className="hidden sm:block" />
          <span className="text-white">Saying About Us</span>
        </h2>

        <div className="relative mt-10 sm:mt-14 flex items-center justify-center">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 sm:left-6 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 sm:right-6 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div
            className="relative w-[70vw] max-w-[280px] sm:max-w-[340px] md:max-w-[380px] aspect-[9/16] rounded-2xl p-[1px] bg-white/10 shadow-xl overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 pointer-events-none" />
            <div className="h-full w-full rounded-2xl overflow-hidden bg-black/60">
              <AnimatePresence initial={false} custom={dirRef.current}>
                <Slide
                  key={index}
                  direction={dirRef.current}
                  src={items[index].src}
                  playing={playing}
                  onTogglePlay={() => setPlaying((p) => !p)}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mt-6 sm:mt-8 max-w-3xl text-center text-xl sm:text-2xl md:text-3xl font-semibold text-white"
        >
          “{items[index].quote}”
        </motion.blockquote>

        <motion.div
          key={`author-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className="mt-4 flex items-center justify-center gap-3 text-left"
        >
          <img src={items[index].avatar} alt={items[index].author} className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="text-white text-base font-semibold">{items[index].author}</p>
            <p className="text-white/60 text-xs sm:text-sm">{items[index].role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Slide({ src, direction, playing, onTogglePlay }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.play().catch(() => {});
    else videoRef.current.pause();
  }, [playing, src]);

  const variants = {
    enter: (dir) => ({ x: dir === 1 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir === 1 ? -120 : 120, opacity: 0 }),
  };

  return (
    <motion.div
      className="absolute inset-0"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 300, damping: 35 }}
    >
      <video ref={videoRef} src={src} className="h-full w-full object-cover" playsInline loop muted />

      <button
        onClick={onTogglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-purple-700/90 hover:bg-purple-700 px-4 py-3 shadow-lg"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          {playing ? <path d="M10 8h2v8h-2zM14 8h2v8h-2z" fill="white" /> : <path d="M8 5v14l11-7-11-7z" fill="white" />}
        </svg>
      </button>
    </motion.div>
  );
}
