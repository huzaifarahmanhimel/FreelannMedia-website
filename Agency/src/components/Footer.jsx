import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white pt-16 pb-10 px-4 sm:px-6 lg:px-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center">
            {/* replace with your logo image/svg */}
            <span className="text-black text-2xl font-bold">M</span>
          </div>
          <span className="text-xl sm:text-2xl font-semibold tracking-wide">
            MZ MEDIA
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2 text-zinc-300 text-sm sm:text-base">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition">
            Refund Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </nav>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 mb-8" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm text-zinc-400">
          © 2025 mzmedia | all rights reserved by mzmedia
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {/* LinkedIn */}
          <a href="#" className="hover:opacity-80 transition">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 6V24h-4v-8.3c0-2 0-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8.5z" />
            </svg>
          </a>

          {/* X */}
          <a href="#" className="hover:opacity-80 transition">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M18 0h3l-7 8 8 10h-6l-5-6-5 6H0l8-10L1 0h6l4 5 4-5z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="hover:opacity-80 transition">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h10.7v-8.7H9.7v-3.4h3V9.3c0-3 1.8-4.7 4.6-4.7 1.3 0 2.6.1 2.9.1v3.2h-2c-1.6 0-2 .8-2 2v2.6h4l-.6 3.4h-3.4V24H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
