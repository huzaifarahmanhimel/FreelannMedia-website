import React, { useState } from "react";

export default function Work() {
  const [active, setActive] = useState("saas");

  const sections = {
    youtube: [
      { src: "/videos/youtube1.mp4" },
      { src: "/videos/youtube2.mp4" },
      { src: "/videos/youtube3.mp4" },
      { src: "/videos/youtube4.mp4" },
    ],
    shorts: [
      { src: "/videos/shorts1.mp4" },
      { src: "/videos/shorts2.mp4" },
      { src: "/videos/shorts3.mp4" },
    ],
    saas: [
      { src: "/videos/saas1.mp4" },
      { src: "/videos/saas2.mp4" },
      { src: "/videos/saas3.mp4" },
      { src: "/videos/saas4.mp4" },
    ],
    ads: [
      { src: "/videos/ad1.mp4" },
      { src: "/videos/ad2.mp4" },
      { src: "/videos/ad3.mp4" },
      { src: "/videos/ad4.mp4" },
    ],
  };

  const isShorts = active === "shorts";

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.15em] text-sm text-white/60">Our Work</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-3">
          <span className="text-white/70">Some Of Our</span>
          <br />
          <span className="text-white">Featured Projects</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            { key: "youtube", label: "Youtube Videos" },
            { key: "shorts", label: "Shorts" },
            { key: "saas", label: "SAAS Videos" },
            { key: "ads", label: "Ad Creatives & VSL" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                active === tab.key
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid: 2 columns for landscape sections, 3 for Shorts */}
        <div className={`mt-14 grid gap-8 ${isShorts ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
          {sections[active].map((video, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-lg group"
            >
              {/* Video: portrait style only for Shorts; others 16:9 */}
              <video
                src={video.src}
                className={`${
                  isShorts
                    ? "w-full aspect-[9/16] object-cover"
                    : "w-full aspect-[16/9] object-cover"
                }`}
                controls
                preload="metadata"
              />

              {/* Hover play visual */}
              <button className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all">
                <div className={`${isShorts ? "w-14 h-14" : "w-14 h-14"} bg-purple-700/90 rounded-xl flex items-center justify-center`}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7-11-7z" fill="white" />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
