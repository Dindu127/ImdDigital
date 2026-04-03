export default function Footer() {
  return (
    
    <footer data-aos="fade-up" className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-3">IMD Digital Solutions</h2>
          <p className="text-gray-400">
           Innovate. Build. Scale.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#verify">Verify</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-400">Chennai, India</p>
          <p className="text-gray-400">imddigitalsolutions@gmail.com</p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-6">
        © 2026 IMD Digital Solutions. All rights reserved.
      </p>
    </footer>
  );
}