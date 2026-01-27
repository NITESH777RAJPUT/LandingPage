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

  useEffect(() => {
    const handler = () => onClose();
    document.addEventListener("close-enquiry", handler);
    return () => document.removeEventListener("close-enquiry", handler);
  }, [onClose]);

  if (!open) return null;

  const submitHandler = async () => {
    // ✅ basic validation
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://landingbakcend.onrender.com/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("EOI Submitted Successfully!");
        setForm({ name: "", email: "", phone: "" });
        onClose();
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (err) {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full rounded-xl shadow-xl relative">

        {/* HEADER */}
        <div className="bg-[#C9A24D] text-black px-6 py-4 flex justify-between items-center rounded-t-xl">
          <h3 className="font-semibold">EOI Registration</h3>
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
            className="w-full border p-3 rounded"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <div className="flex gap-3">
            <input className="w-1/3 border p-3 rounded" value="+91" disabled />
            <input
              className="w-2/3 border p-3 rounded"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
          </div>

          <p className="text-xs text-gray-500">
            For early access & site visits:
            <strong> Soumya – 8080861276</strong>
          </p>

          <button
            onClick={submitHandler}
            disabled={loading}
            className="w-full bg-[#C9A24D] text-black py-3 rounded font-semibold"
          >
            {loading ? "Submitting..." : "Submit EOI"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
