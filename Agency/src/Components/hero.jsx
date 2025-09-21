function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 bg-gradient-to-b from-black to-purple-900">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Get More Leads <br />
        <span className="text-white">Using <span className="text-gray-200">Quality Video Content</span></span>
      </h1>

      <p className="mt-6 text-gray-300 max-w-2xl">
        We help entrepreneurs and businesses with Done-For-You organic
        content systems that generate leads on autopilot.
      </p>

      {/* Testimonials */}
      <div className="flex items-center mt-6 space-x-3">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="client"
          className="w-10 h-10 rounded-full border border-white"
        />
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="client"
          className="w-10 h-10 rounded-full border border-white"
        />
        <img
          src="https://randomuser.me/api/portraits/men/56.jpg"
          alt="client"
          className="w-10 h-10 rounded-full border border-white"
        />
        <span className="text-gray-400 text-sm">
          Loved by 500+ Businesses worldwide
        </span>
      </div>

      {/* CTA Button */}
      <a
        href="#call"
        className="mt-8 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
      >
        Book A Call
      </a>
    </section>
  );
}

export default Hero;
