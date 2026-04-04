import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function Verify() {
  const [certNo, setCertNo] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState("");
  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS1GHRKCxEhf4xoW5z7rZsuXcXAN_W2FM7JuBTfcm0yiAlW3XWR16M6YE8AZVf8MA/pub?output=csv";

    const handleVerify = async () => {
      if (!certNo || !dob) {
        alert("Please enter Certificate No & DOB");
        return;
      }

      setLoading(true);
      setResult(null);

      try {
        const res = await fetch(SHEET_URL);
        const data = await res.text();

        const rows = data.split("\n").slice(1);
        // ✅ STEP 1: Check certificate exists
          const certMatch = rows.find((row) => {
            const cols = row.split(",");
            return cols[0]?.trim().toLowerCase() === certNo.toLowerCase().trim();
          });

          if (!certMatch) {
            setResult("INVALID_CERT");
            setLoading(false);
            return;
          }

              // ✅ STEP 2: Check DOB match
            const cols = certMatch.split(",");
            const sheetDOB = cols[4]?.trim();

            if (sheetDOB !== dob.trim()) {
              setResult("INVALID_DOB");
              setLoading(false);
              return;
            }

            // ✅ SUCCESS
            setResult({
              cert: cols[0],
              name: cols[1],
              course: cols[2],
              duration: cols[3],
              dob: cols[4],
              status: "SUCCESS",
            });

          } catch (err) {
            console.error(err);
          }

          setLoading(false);
        };

      return (
      <section
        id="verify"
        className="relative py-28 text-center overflow-hidden"
      >
        {/* 🌌 BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900 to-purple-900"></div>

        {/* ✨ GLOW EFFECT */}
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          
          {/* 🔥 TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-wide">
            Verify Certificate
          </h2>

          {/* INPUT + BUTTON */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 px-4">
            
            <input
              type="text"
              placeholder="Enter Certificate Number"
              value={certNo}
              onChange={(e) => setCertNo(e.target.value)}
              className="w-full md:w-[350px] px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="relative w-full md:w-[250px]">
                <label className="absolute -top-5 left-2 text-xs text-gray-300 bg-[#2d1b69] px-2">
                  Date of Birth
                </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full md:w-[250px] px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={handleVerify}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:scale-105 transition"
            >
              Verify
            </button>

          </div>

          {/* RESULT */}
            <div className="mt-12">

              {loading && (
                <p className="text-white animate-pulse">Checking...</p>
              )}

              {/* ✅ SUCCESS */}
              {result && result.status === "SUCCESS" && (
                <div className="bg-white/10 backdrop-blur-xl text-white p-6 rounded-2xl shadow-xl inline-block text-left border border-white/20">
                  
                  <p className="text-lg">
                    <span className="text-blue-400 font-semibold">Name:</span> {result.name}
                  </p>

                  <p className="text-lg">
                    <span className="text-blue-400 font-semibold">Course:</span> {result.course}
                  </p>

                  <p className="text-lg">
                    <span className="text-blue-400 font-semibold">Duration:</span> {result.duration}
                  </p>

                  <p className="text-lg">
                    <span className="text-blue-400 font-semibold">DOB:</span> {result.dob}
                  </p>

                  <p className="text-lg">
                    <span className="text-blue-400 font-semibold">Certificate No:</span> {result.cert}
                  </p>

                  <div className="mt-4 text-green-400 font-semibold">
                    ✔ Verified Certificate
                  </div>
                </div>
              )}

              {/* ❌ INVALID CERT */}
              {result === "INVALID_CERT" && (
                <p className="text-red-400 mt-6 text-lg">
                  ❌ Invalid Certificate Number
                </p>
              )}

              {/* ❌ INVALID DOB */}
              {result === "INVALID_DOB" && (
                <p className="text-yellow-400 mt-6 text-lg">
                  ⚠ Incorrect Date of Birth
                </p>
              )}

            </div>
        </div>
      </section>
    );
}

