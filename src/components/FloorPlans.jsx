import { useState } from "react";
import plan1 from "../assets/floorplans/plan1.jpg";
import plan2 from "../assets/floorplans/plan2.jpg";
import EnquiryModal from "./EnquiryModal";

const FloorPlans = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-14 text-gray-900">
          Master <span className="text-[#D4AF37]">Plans</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {[plan1, plan2].map((img, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={img}
                alt={`Floor Plan ${i + 1}`}
                className="h-60 w-full object-cover"
              />

              <div className="p-6 text-center">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#D4AF37] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-[#c9a634] transition"
                >
                  View Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default FloorPlans;
