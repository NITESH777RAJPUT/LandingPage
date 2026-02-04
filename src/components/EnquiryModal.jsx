import { X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

// 🔥 GOOGLE SHEET WEB APP URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyt8jVdkgqikZdLPrEAZ6hXLvP4ljmy0m8EUJA2VFtBTv34d3_NiTx3Pf5zwRFaNEOp/exec";

// 🔥 BROCHURE FILE (public folder)
const BROCHURE_URL = "/brochure.pdf";

const EnquiryModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔒 BODY SCROLL LOCK
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

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

  // ✅ SUBMIT HANDLER
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

      /* 🔥 GTM EVENT PUSH (IMPORTANT) */
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_submit",
        lead_type: window.__DOWNLOAD_BROCHURE__
          ? "brochure_download"
          : "enquiry",
      });

      alert(
        window.__DOWNLOAD_BROCHURE__
          ? "Details submitted! Downloading brochure…"
          : "EOI Submitted Successfully!"
      );

      // 🔥 DOWNLOAD ONLY FOR BROCHURE FLOW
      if (window.__DOWNLOAD_BROCHURE__) {
        setTimeout(() => {
          downloadBrochure();
          window.__DOWNLOAD_BROCHURE__ = false;
        }, 300);
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

        {/* HEADER */}
        <div className="bg-[#C9A24D] px-5 py-4 flex justify-between items-center">
          <h3 className="font-semibold text-lg">
            {window.__DOWNLOAD_BROCHURE__
              ? "Download Brochure"
              : "EOI Registration"}
          </h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* 🔥 BROCHURE BADGE */}
        {window.__DOWNLOAD_BROCHURE__ && (
          <div className="bg-[#FFF4D1] text-[#9C7A24] text-xs font-semibold px-4 py-2 flex items-center justify-center gap-2">
            <Download size={14} />
            You’ll receive the official project brochure after submission
          </div>
        )}

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

          <p className="text-xs text-gray-500">
            For early access & site visits:
            <strong> 9022721434</strong>
          </p>

          <button
            onClick={submitHandler}
            disabled={loading}
            className="w-full bg-[#C9A24D] py-3 rounded-full font-semibold hover:bg-[#D4AF37] disabled:opacity-70"
          >
            {loading
              ? "Submitting..."
              : window.__DOWNLOAD_BROCHURE__
                ? "Submit & Download"
                : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
