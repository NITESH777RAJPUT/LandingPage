import { useState } from "react";
import { Phone } from "lucide-react";

// 🔥 SAME GOOGLE SHEET WEB APP URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxPjiKJqPfztgto9UD2IrdoOTKu9I-WWWPw0c4SMYkWTGHPX4uFPDpJ0o-Ia5XPZ5CPDQ/exec";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔥 SAFE CALL HANDLER
  const handleCallClick = () => {
    document.dispatchEvent(new Event("close-enquiry"));
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  };

  // ✅ SUBMIT TO GOOGLE SHEET
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          source: "Contact Form",
          timestamp: new Date().toLocaleString(),
        }),
      });

      alert("Thank you! We will contact you shortly.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid gap-10 md:grid-cols-2 items-start">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Book a <span className="text-[#D4AF37]">Site Visit</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
            Get complete project details instantly. Our team will get in touch
            with you shortly.
          </p>

          {/* CALL + WHATSAPP */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-4">

            <a
              href="tel:+919022721434"
              onClick={handleCallClick}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
            >
              <Phone size={16} />
              9022721434
            </a>

            <a
              href="https://wa.me/919022721434"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#25D366"
              >
                <path d="M12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.9.5 3.76 1.45 5.39L2 22l4.82-1.26c1.57.86 3.35 1.32 5.22 1.32h.01c5.49 0 9.96-4.47 9.96-9.96 0-2.66-1.03-5.16-2.91-7.04A9.9 9.9 0 0 0 12.04 2z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={submitHandler}
          className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 lg:p-8 space-y-4 shadow-sm"
        >
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#D4AF37]"
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#D4AF37]"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#D4AF37]"
          />

          <textarea
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#D4AF37]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4AF37] py-3 rounded-full font-semibold hover:bg-[#E6C75A] disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
