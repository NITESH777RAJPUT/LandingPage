import { useState } from "react";

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
