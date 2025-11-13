import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UpgradeStatsSectionFinal from "./components/UpgradeStatsSectionFinal";
import TestimonialsReelsSection from "./components/TestimonialsReelsSection";
import Work from "./components/Work";
import CaseStudies from "./components/CaseStudies";
import CoreServicesWithSliders from "./components/CoreServicesWithSliders";
import ClientFeedbackSlider from "./components/ClientFeedbackSlider";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";




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

{/* UPGRADE STATS */}
<UpgradeStatsSectionFinal />
{/* TESTIMONIALS REELS */}
{ <TestimonialsReelsSection/> }

{/* WORK */}
<Work />

{/* CASE STUDIES */}
<CaseStudies />
{/* CORE SERVICES WITH SLIDERS */}
<CoreServicesWithSliders />
{/* CLIENT FEEDBACK SLIDER */}
<ClientFeedbackSlider/>
{/* FAQ SECTION */}
<FAQSection/>
{/* FOOTER */}
<Footer/>



</div>
 );
}