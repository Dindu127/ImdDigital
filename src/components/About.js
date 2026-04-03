export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 text-center overflow-hidden scroll-mt-28"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900 to-purple-900"></div>

      {/* ✨ GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wide">
          About IMD Digital Solutions
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          IMD Ventures is a dynamic and forward-thinking company built to deliver innovative, reliable, 
          and scalable business solutions across multiple domains.
        </p>

        {/* MAIN CONTENT */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 text-left">

          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">
            <p className="text-gray-200 leading-relaxed">
              With a strong focus on technology and digital transformation, we bring together a group of 
              specialized sub-companies that cater to diverse industry needs under one unified vision.
              Our ecosystem includes expertise in IT Services, Digital Solutions, Technical Support, 
              and Cloud Integration.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">
            <p className="text-gray-200 leading-relaxed">
              At IMD Digital Solutions, we combine innovation with practicality. Our team works closely with clients 
              to understand their challenges and deliver future-ready solutions. From startups to enterprises, 
              we empower businesses to grow and thrive in a rapidly evolving digital world.
            </p>
          </div>

        </div>

        {/* 🔥 STATS SECTION */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-white">1000+</h3>
            <p className="text-gray-300 mt-2">Students Trained</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-white">50+</h3>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-gray-300 mt-2">Technologies Covered</p>
          </div>

        </div>

        {/* 💎 FEATURES */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:scale-105 transition">
            <h3 className="text-white font-bold text-lg">🚀 Innovation Driven</h3>
            <p className="text-gray-300 mt-2">
              Delivering cutting-edge solutions across modern technologies.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:scale-105 transition">
            <h3 className="text-white font-bold text-lg">🤝 Client Focused</h3>
            <p className="text-gray-300 mt-2">
              Tailored solutions built around real business needs.
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:scale-105 transition">
            <h3 className="text-white font-bold text-lg">🌐 Future Ready</h3>
            <p className="text-gray-300 mt-2">
              Helping businesses adapt and grow in the digital era.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}