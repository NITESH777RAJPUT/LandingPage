import { useState } from "react";
import { Phone } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({});

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

          {/* CALL + WHATSAPP (LEFT SIDE) */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-4">

            {/* CALL */}
            <a
              href="tel:+918080861276"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
              aria-label="Call Now"
            >
              <Phone size={16} />
              8080861276
            </a>

            {/* WHATSAPP ICON ONLY */}
            <a
              href="https://wa.me/918080861276"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="#25D366"
              >
                <path d="M12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.9.5 3.76 1.45 5.39L2 22l4.82-1.26c1.57.86 3.35 1.32 5.22 1.32h.01c5.49 0 9.96-4.47 9.96-9.96 0-2.66-1.03-5.16-2.91-7.04A9.9 9.9 0 0 0 12.04 2z" />
              </svg>
            </a>

          </div>
        </div>

        {/* FORM */}
        <form className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 lg:p-8 space-y-4 shadow-sm">
          {["Name", "Phone", "Email"].map((p) => (
            <input
              key={p}
              placeholder={p}
              className="
                w-full
                border border-gray-300
                p-3
                rounded-md
                text-sm sm:text-base
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-[#D4AF37]
              "
            />
          ))}

          <textarea
            placeholder="Message"
            rows={4}
            className="
              w-full
              border border-gray-300
              p-3
              rounded-md
              text-sm sm:text-base
              text-gray-900
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-[#D4AF37]
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-[#D4AF37]
              text-gray-900
              py-3
              rounded-full
              font-semibold
              text-sm sm:text-base
              hover:bg-[#E6C75A]
              transition
            "
          >
            Submit
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactForm;
