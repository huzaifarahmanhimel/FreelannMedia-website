import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  // Close menu on resize to md+ or on route hash change
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    const onHash = () => setOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[94%] sm:w-[92%] md:w-[85%] max-w-5xl z-50">
      {/* Glass container */}
      <div className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <div className="flex items-center justify-center bg-yellow-400 text-black font-bold rounded-md w-7 h-7 text-sm">F</div>
          <span className="font-medium text-base tracking-tight text-yellow-400">FREELANN MEDIA</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-7 text-gray-200">
          <a href="#review" className="hover:text-white transition font-medium">Review</a>
          <a href="#work" className="hover:text-white transition font-medium">Work</a>
          <a href="#case-study" className="hover:text-white transition font-medium">Case Study</a>
          <a href="#process" className="hover:text-white transition font-medium">Process</a>
        </div>

        {/* CTA (desktop) */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 transition text-black px-4 py-1.5 rounded-lg font-semibold text-sm shadow-md"
          >
            Book A Call
          </a>
        </div>

        {/* Hamburger (mobile & tablet) */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          onClick={() => setOpen((s) => !s)}
        >
          <div className="relative w-5 h-5">
            <span
              className={`absolute left-0 top-[4px] h-[2px] w-full bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[9px] h-[2px] w-full bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-full bg-white transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${open ? "max-h-96 opacity-100 translate-y-2" : "max-h-0 opacity-0 -translate-y-1"}`}
      >
        <div className="mt-2 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg px-5 py-4">
          <div className="flex flex-col space-y-3 text-gray-200">
            <a href="#review" className="py-2 px-2 rounded-md hover:bg-white/10" onClick={() => setOpen(false)}>Review</a>
            <a href="#work" className="py-2 px-2 rounded-md hover:bg-white/10" onClick={() => setOpen(false)}>Work</a>
            <a href="#case-study" className="py-2 px-2 rounded-md hover:bg-white/10" onClick={() => setOpen(false)}>Case Study</a>
            <a href="#process" className="py-2 px-2 rounded-md hover:bg-white/10" onClick={() => setOpen(false)}>Process</a>
          </div>
          <a
            href="#book"
            className="mt-4 inline-flex w-full items-center justify-center bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md"
            onClick={() => setOpen(false)}
          >
            Book A Call
          </a>
        </div>
      </div>
    </nav>
  );
}
