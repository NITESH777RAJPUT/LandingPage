import { X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const EnquiryModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // BODY SCROLL FIX (VERY IMPORTANT)
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  if (!open) return null;

  const submitHandler = async () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://landingbakcend.onrender.com/api/lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("EOI Submitted Successfully!");
        setForm({ name: "", email: "", phone: "" });
        onClose();
      } else {
        alert(data.message || "Submission failed");
      }
    } catch {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl relative overflow-hidden">

        {/* HEADER */}
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

          <p className="text-xs text-gray-500">
            For early access & site visits:
            <strong> 8080861276</strong>
          </p>

          <button
            onClick={submitHandler}
            disabled={loading}
            className="w-full bg-[#C9A24D] py-3 rounded-full font-semibold hover:bg-[#D4AF37] disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit EOI"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
