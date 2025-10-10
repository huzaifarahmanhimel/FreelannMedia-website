import React from 'react'


export default function Navbar() {
return (
<nav className="fixed top-0 left-0 w-full flex items-center justify-between py-6 px-8 bg-black/60 backdrop-blur-md z-50">
<div className="flex items-center space-x-2">
<div className="bg-white text-black font-bold rounded-md px-2 py-1 text-sm">MZ</div>
<span className="font-semibold text-lg tracking-tight">MEDIA</span>
</div>
<div className="hidden md:flex space-x-8 text-gray-300">
<a href="#review" className="hover:text-white transition">Review</a>
<a href="#work" className="hover:text-white transition">Work</a>
<a href="#case-study" className="hover:text-white transition">Case Study</a>
<a href="#process" className="hover:text-white transition">Process</a>
</div>
<button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg font-semibold">
Book A Call
</button>
</nav>
)
}