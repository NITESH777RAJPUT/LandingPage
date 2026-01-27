import { useState } from "react";
import { API } from "../services/api";

const ContactForm = () => {
  const [form, setForm] = useState({ name:"", phone:"", email:"", message:"" });

  const submitHandler = async (e) => {
    e.preventDefault();
    await API.post("/lead", form);
    alert("Thank you! Our team will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Book a <span className="text-[#C9A24D]">Site Visit</span>
          </h2>
          <p className="mt-6 text-gray-400">
            Fill the form & get complete project details.
          </p>
        </div>

        <form onSubmit={submitHandler} className="bg-white rounded-xl p-8 space-y-4">
          <input className="w-full border p-3 rounded" placeholder="Full Name" onChange={e=>setForm({...form,name:e.target.value})}/>
          <input className="w-full border p-3 rounded" placeholder="Phone Number" onChange={e=>setForm({...form,phone:e.target.value})}/>
          <input className="w-full border p-3 rounded" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
          <textarea className="w-full border p-3 rounded" placeholder="Message" onChange={e=>setForm({...form,message:e.target.value})}/>
          <button className="w-full bg-[#C9A24D] text-black py-3 rounded font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
