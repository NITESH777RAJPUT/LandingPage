import { X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

// 🔥 GOOGLE SHEET WEB APP URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxPjiKJqPfztgto9UD2IrdoOTKu9I-WWWPw0c4SMYkWTGHPX4uFPDpJ0o-Ia5XPZ5CPDQ/exec";

// 🔥 BROCHURE FILE PATH (public folder)
const BROCHURE_URL = "/brochure.pdf";

const EnquiryModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔒 BODY SCROLL LOCK (PEHLE JAISE)
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  if (!open) return null;

  // 🔽 BROCHURE DOWNLOAD
  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = BROCHURE_URL;
    link.download = "The-Canary-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ SUBMIT HANDLER (SAFE + FULL INFO)
  const submitHandler = async () => {
    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          source: window.__DOWNLOAD_BROCHURE__
            ? "Brochure Download"
            : "EOI Popup",
          date: new Date().toLocaleString(),
        }),
      });

      alert("EOI Submitted Successfully!");

      // 🔥 BROCHURE DOWNLOAD ONLY IF CTA USED
      if (window.__DOWNLOAD_BROCHURE__) {
        downloadBrochure();
        window.__DOWNLOAD_BROCHURE__ = false;
      }

      setForm({ name: "", email: "", phone: "" });
      onClose();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl relative overflow-hidden">

        {/* HEADER (UNCHANGED) */}
        <div className="bg-[#C9A24D] px-5 py-4 flex justify-between items-center">
          <h3 className="font-semibold text-lg">EOI Registration</h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-4">
          <img src={logo} alt="Project Logo" className="h-10 mx-auto" />

          <p className="text-center text-sm text-gray-600">
            Secure your <strong>priority allotment</strong> in Balewadi’s
            next iconic address.
          </p>

          <input
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#D4AF37]"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#D4AF37]"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <div className="flex gap-3">
            <input
              className="w-1/3 border p-3 rounded-md bg-gray-100"
              value="+91"
              disabled
            />
            <input
              className="w-2/3 border p-3 rounded-md focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          {/* 🔒 PEHLE JAISE CONTACT INFO */}
          <p className="text-xs text-gray-500">
            For early access & site visits:
            <strong> 9022721434</strong>
          </p>

          <button
            onClick={submitHandler}
            disabled={loading}
            className="w-full bg-[#C9A24D] py-3 rounded-full font-semibold hover:bg-[#D4AF37] disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
