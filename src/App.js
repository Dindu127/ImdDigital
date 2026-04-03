import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Internship from "./components/Internship";
import Verify from "./components/Verify";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import RegisterCTA from "./components/RegisterCTA";
import About from "./components/About";

function App() {
  const [loading, setLoading] = useState(false); // 🔥 disable loader

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50,
      });
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Internship />
      <Verify />
      <Reviews />
      <About />  
      <Contact />
      {/* <RegisterCTA /> */}
      <Footer />

        {/* WhatsApp Floating */}
        <a
          href="https://wa.me/919176702352?text=Hi%20IMD%20Digital%20Solutions%2C%20I%20am%20interested%20in%20your%20internship%20program."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 group"
        >

          {/* 🔥 PULSE */}
          <span className="absolute inset-0 rounded-full bg-white-500 opacity-70 animate-ping"></span>

          {/* 💬 BUTTON */}
          <div className="relative bg-white-500 p-4 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.7)] hover:scale-110 transition">

            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="whatsapp"
              className="w-6 h-6"
            />

            {/* 🔴 NOTIFICATION */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>

            {/* 🟢 ONLINE DOT */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>

          </div>

          {/* 💡 TOOLTIP */}
          <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            Chat with us
          </div>

        </a>
    </div>
  );
}

export default App;