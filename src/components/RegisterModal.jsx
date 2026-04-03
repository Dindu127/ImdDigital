import { useState } from "react";

export default function RegisterModal({ open, setOpen }) {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleOpenForm = () => {
    setLoading(true);

    // 🔥 TRACK CLICK
    let count = localStorage.getItem("registerClicks") || 0;
    localStorage.setItem("registerClicks", ++count);

    // simulate loading
    setTimeout(() => {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSeGv_7W4XLleXlTZwWMC7yIxOaVkQ7jwcp-xV5NsO6HC-IShw/viewform",
        "_blank"
      );
      setLoading(false);
      setOpen(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

      {/* MODAL */}
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl relative">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Register for Internship 🚀
        </h2>

        <p className="text-gray-600 mb-6">
          Secure your seat now. Limited seats available!
        </p>

        {/* LOADER OR BUTTON */}
        {loading ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500">Redirecting...</p>
          </div>
        ) : (
          <button
            onClick={handleOpenForm}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Continue to Register
          </button>
        )}
      </div>
    </div>
  );
}