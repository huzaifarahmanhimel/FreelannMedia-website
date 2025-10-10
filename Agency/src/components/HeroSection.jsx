import React from 'react'


export default function HeroSection() {
return (
<section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 pt-28">
<div className="text-center">
<h1 className="text-4xl md:text-6xl font-bold mb-4">
Get <span className="text-gray-400">More Leads</span><br />
Using <span className="text-white">Quality Video Content</span>
</h1>
<p className="text-gray-400 max-w-xl mx-auto mt-4">
We help entrepreneurs and businesses with Done-For-You organic content systems that generate leads on autopilot.
</p>


{/* Client Avatars */}
<div className="flex items-center justify-center mt-6 space-x-3">
<div className="flex -space-x-3">
<img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Client 1" className="w-10 h-10 rounded-full border-2 border-black" />
<img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Client 2" className="w-10 h-10 rounded-full border-2 border-black" />
<img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Client 3" className="w-10 h-10 rounded-full border-2 border-black" />
</div>
<div className="text-gray-400 text-sm">
Loved by <span className="text-white font-semibold">500+ Businesses</span> worldwide.<br />
<span className="text-xs">Our Clients Speak for Us</span>
</div>
</div>


{/* CTA Button */}
<div className="mt-8">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
Book A Call
</button>
</div>
</div>


{/* Floating Ask Box */}
<div className="absolute bottom-12 w-full flex justify-center">
<div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-1 rounded-2xl">
<div className="bg-[#0b0b0f] px-6 py-3 rounded-2xl flex items-center space-x-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17.25 10.5a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z" />
</svg>
<input
type="text"
placeholder="How do you do it?"
className="bg-transparent outline-none text-gray-200 placeholder-gray-500 w-48 md:w-64"
/>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg font-medium transition">
Ask
</button>
</div>
</div>
</div>
</section>
)
}