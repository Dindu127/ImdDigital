export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 🖼️ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        }}
      ></div>

      {/* 🎨 DARK + GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* ✨ GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-purple-100 opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-100 opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* 🌌 FLOATING PARTICLES */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              top: Math.random() * 90 + "%",
              left: Math.random() * 90 + "%",
              animationDuration: 2 + Math.random() * 3 + "s",
            }}
          ></span>
        ))}
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Innovate. Build. Grow.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
          Join IMD Ventures Internship Program & build real-world projects
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
          
          {/* APPLY BUTTON (UNCHANGED) */}
          <a
            href="https://forms.gle/WYyfWHF8hXwMG8Gu7"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:scale-105 transition"
          >
            Apply Now
          </a>

          {/* 🔥 FIXED EXPLORE BUTTON */}
          <a
            href="#about"
            className="px-8 py-3 rounded-xl text-white 
                       bg-white/10 backdrop-blur-lg 
                       border border-white/40 
                       shadow-[0_0_20px_rgba(255,255,255,0.15)]
                       hover:bg-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                       transition duration-300"
          >
            Explore
          </a>

        </div>
      </div>

    </section>
  );
}