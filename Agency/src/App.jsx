import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";



export default function App() {
return (
<div className="bg-black text-white min-h-screen scroll-smooth">
{/* Global gradient backdrop (subtle) */}
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-x-0 bottom-[-20%] h-[60vh] bg-gradient-to-t from-indigo-900/30 via-purple-800/20 to-transparent blur-[80px]" />
</div>


{/* Navbar lives on top across pages */}
<Navbar/>



{/* HERO */}
<HeroSection />
</div>
 );
}