import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({});

  return (
    <section id="contact" className="bg-[#0B1C2D] py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Book a <span className="text-[#D4AF37]">Site Visit</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Get complete project details instantly.
          </p>
        </div>

        <form className="bg-[#0B1C2D]/80 border border-white/10 rounded-xl p-6 space-y-4">
          {["Name", "Phone", "Email"].map((p) => (
            <input
              key={p}
              placeholder={p}
              className="w-full bg-transparent border border-white/20 p-3 rounded text-white"
            />
          ))}
          <textarea
            placeholder="Message"
            className="w-full bg-transparent border border-white/20 p-3 rounded text-white"
          />
          <button className="w-full bg-[#D4AF37] text-[#0B1C2D] py-3 rounded font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
