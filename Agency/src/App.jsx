import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      {/* Add more sections here like CaseStudy, Work, Process */}
    </div>
  );
}

export default App;
