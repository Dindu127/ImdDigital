export default function Internship() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] to-[#020617] text-white">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Internship Program 2026
        </h2>
        <p className="text-gray-400 mt-4">
          Empowering Future Professionals 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

        {/* LEFT SIDE - DOMAINS */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
          
          <h3 className="text-2xl font-bold mb-6 text-blue-400">
            Internship Domains
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li>🐍 Python Programming for Developers</li>
            <li>💻 Full Stack (.NET Development)</li>
            <li>⚛️ React + API Integration</li>
            <li>☁️ Cloud Deployment (Google Cloud)</li>
            <li>🌐 Real-Time Web Application Development</li>
            <li>🤖 AI Tools for Developers</li>

          </ul>

          {/* ADVANCED SKILLS */}
          <h3 className="text-2xl font-bold mt-8 mb-4 text-yellow-400">
            Advanced Skills
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Real-Time Industry Project</li>
            <li>✔ Internship Completion Certificate</li>
            <li>✔ Project Completion Certificate</li>
            <li>✔ Letter of Recommendation (LOR)</li>
            <li>✔ Resume Building Support</li>
            <li>✔ Mock Interview Preparation</li>
            <li>✔ GR Verified Certificate</li>
          </ul>

        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
          
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">
            Program Details
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>⏱ Duration: 15 – 30 Days</li>
            <li>💻 Mode: Online Live Training</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-blue-400">
            Eligibility
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>🎓 BE / BTech / BCA / MCA</li>
            <li>🎓 Any Degree Students</li>
          </ul>

          {/* PRICE BOX */}
          <div className="mt-8 bg-yellow-500 text-black text-center py-4 rounded-xl font-bold text-xl shadow-lg">
            ₹ 2,999/- Only
          </div>

          <p className="text-center text-gray-400 mt-3">
            Limited Seats – Only 50 Students
          </p>

          {/* CTA + QR COMBINED */}
          <div className="mt-10 flex flex-col items-center">

            {/* REGISTER BUTTON */}
            <a
              href="https://forms.gle/WYyfWHF8hXwMG8Gu7"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Apply for Internship 🚀
            </a>

            {/* QR CARD */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl flex flex-col items-center">

              {/* QR IMAGE */}
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img
                  src="/qr.png"
                  alt="QR Code"
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* TEXT */}
              <p className="mt-4 text-sm text-gray-200 tracking-wide">
                    Scan to Register
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}