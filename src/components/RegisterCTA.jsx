export default function RegisterCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white text-center relative overflow-hidden">

      {/* ✨ Glow background */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Internship Registration
        </h2>

        <p className="text-gray-300 mb-12">
          Scan the QR code or contact us directly to secure your seat 🚀
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 📌 QR CODE */}
          <div className="flex flex-col items-center">
            
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <img
                src="/qr.png"   // 👈 place your QR inside public folder
                alt="QR Code"
                className="w-48 h-48 object-contain"
              />
            </div>

            <p className="mt-4 text-sm text-gray-300">
              Scan to Register
            </p>
          </div>

          {/* 📞 WHATSAPP CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            
            <h3 className="text-2xl font-semibold mb-4">
              Need Help?
            </h3>

            <p className="text-gray-300 mb-6">
              Chat with us directly on WhatsApp for instant support and details.
            </p>

            <a
              href="https://wa.me/919176702352?text=Hi%20IMD%20Team,%20I%20am%20interested%20in%20Internship%20Program"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-green-500 rounded-full text-white shadow-lg hover:scale-105 transition"
            >
              💬 Chat on WhatsApp
            </a>

            <p className="mt-4 text-sm text-gray-400">
              +91 9176702352
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}