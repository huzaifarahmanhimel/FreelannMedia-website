import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl flex items-center justify-between py-4 px-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center bg-white text-black font-bold rounded-lg w-8 h-8">M</div>
        <span className="font-semibold text-lg tracking-tight">MZ MEDIA</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-gray-200">
        <a href="#review" className="hover:text-white transition font-medium">Review</a>
        <a href="#work" className="hover:text-white transition font-medium">Work</a>
        <a href="#case-study" className="hover:text-white transition font-medium">Case Study</a>
        <a href="#process" className="hover:text-white transition font-medium">Process</a>
      </div>

      {/* Button */}
      <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl font-semibold shadow-md">
        Book A Call
      </button>
    </nav>
  )
}
