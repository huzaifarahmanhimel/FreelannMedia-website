import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* spacing so content doesn't hide behind fixed navbar */}
      <div className="pt-28 sm:pt-32 md:pt-36" />

      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(80%_50%_at_50%_0%,rgba(88,28,135,0.25),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Headline */}
        <h1 className="text-center font-extrabold leading-tight tracking-tight">
          <span className="block text-[9vw] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">Get <span className="text-gray-300">More Leads</span></span>
          <span className="block text-[9vw] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Using <span className="text-white">Quality Video Content</span>
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
            Loved by <span className="text-white font-semibold">500+ Businesses</span> worldwide
            <span className="block text-xs sm:text-sm">Our clients speak for us</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition"
          >
            Book A Call
          </a>
        </div>
      </div>

      {/* Ask box */}
      <div className="relative mt-14 sm:mt-20 mb-16 sm:mb-24 flex justify-center px-5">
        <div className="w-full max-w-xl sm:max-w-2xl bg-gradient-to-r from-purple-700 to-indigo-700 p-[2px] rounded-2xl">
          <div className="flex items-center gap-3 rounded-2xl bg-[#0b0b0f] px-4 sm:px-6 py-2.5 sm:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17.25 10.5a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z" />
            </svg>
            <input
              type="text"
              placeholder="How do you do it?"
              className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500 text-sm sm:text-base"
            />
            <button className="shrink-0 rounded-lg bg-blue-600 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-blue-700 transition">
              Ask
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
