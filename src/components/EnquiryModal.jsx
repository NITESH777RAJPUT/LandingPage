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

  /* 🔒 Disable background scroll when modal open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* ⎋ Close on ESC key */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

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
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl relative overflow-hidden animate-fadeIn">

        {/* HEADER */}
        <div className="bg-[#C9A24D] text-black px-5 sm:px-6 py-4 flex justify-between items-center">
          <h3 className="font-semibold text-base sm:text-lg">
            EOI Registration
          </h3>
          <button onClick={onClose} aria-label="Close">
            <X />
          </button>
        </div>

        {/* BODY */}
        <div className="p-5 sm:p-6 space-y-4">
          <img
            src={logo}
            alt="Project Logo"
            className="h-9 sm:h-10 mx-auto"
          />

          <p className="text-center text-xs sm:text-sm text-gray-600">
            Secure your <strong>priority allotment</strong> in Balewadi’s
            next iconic address.
          </p>

          <input
            className="w-full border border-gray-300 p-3 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full border border-gray-300 p-3 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <div className="flex gap-3">
            <input
              className="w-1/3 border border-gray-300 p-3 rounded-md text-sm bg-gray-100"
              value="+91"
              disabled
            />
            <input
              className="w-2/3 border border-gray-300 p-3 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
          </div>

          <p className="text-xs text-gray-500 text-center">
            For early access & site visits:
            <strong> 9022721434</strong>
          </p>

          <button
            onClick={submitHandler}
            disabled={loading}
            className="w-full bg-[#C9A24D] text-black py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#D4AF37] transition disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit EOI"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
