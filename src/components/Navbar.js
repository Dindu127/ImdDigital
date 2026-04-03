import { useState, useEffect, useRef  } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 SCROLL EFFECT + SCROLL SPY
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "services", "verify", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

      useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);


        useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target)
        ) {
          setMenuOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">

      <div
        className={`w-full px-4 mt-3 rounded-2xl flex justify-between items-center transition-all duration-300
        
        ${
          scrolled
            ? "px-6 py-2 bg-white/90 backdrop-blur-lg shadow-xl border border-gray-200"
            : "px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20"
        }
        `}
      >

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className={`rounded-full transition-all ${
              scrolled ? "h-10 w-10" : "h-12 w-12"
            } shadow-[0_0_12px_rgba(255,215,0,0.6)]`}
          />

          <div className="leading-tight">
            <h1
              className={`font-semibold transition ${
                scrolled ? "text-black text-base" : "text-white text-lg"
              }`}
            >
              IMD <span className="text-blue-500">Digital</span> Solutions
            </h1>

            <p
              className={`text-xs tracking-widest transition ${
                scrolled ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Innovate • Build • Scale
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <a
            href="#home"
            className={`transition ${
              active === "home" ? "text-blue-500 font-semibold" : ""
            }`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`transition ${
              active === "services" ? "text-blue-500 font-semibold" : ""
            }`}
          >
            About
          </a>

          <a
            href="#contact"
            className={`transition ${
              active === "contact" ? "text-blue-500 font-semibold" : ""
            }`}
          >
            Contact
          </a>

          {/* DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              
              {/* BUTTON */}
              <button
                onClick={() => setOpen(!open)}
                className={`px-5 py-2 rounded-full transition-all duration-300
                  ${
                    scrolled
                      ? "bg-gray-100 text-black hover:bg-gray-200"
                      : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  }
                `}
              >
                Internships ▾
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 mt-3 w-56 bg-white text-black rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                  
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeGv_7W4XLleXlTZwWMC7yIxOaVkQ7jwcp-xV5NsO6HC-IShw/viewform"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Register
                  </a>

                  <a
                    href="#verify"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Verify Certificate
                  </a>

                </div>
              )}
            </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            ☰
          </button>
        </div>
      </div>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

      {/* MOBILE MENU */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="fixed top-20 left-4 right-4 z-[999] rounded-2xl bg-white shadow-2xl p-6 flex flex-col gap-5 md:hidden border border-gray-200 animate-fadeIn"
          >
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-gray-800"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-gray-800"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-gray-800"
            >
              Contact
            </a>

            <hr />

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeGv_7W4XLleXlTZwWMC7yIxOaVkQ7jwcp-xV5NsO6HC-IShw/viewform"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg"
            >
              Register
            </a>

            <a
              href="#verify"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-gray-800"
            >
              Verify Certificate
            </a>
          </div>
        )}
    </nav>
  );
}