import { useState } from "react";
import plan1 from "../assets/floorplans/plan1.jpg";
import plan2 from "../assets/floorplans/plan2.jpg";
import EnquiryModal from "./EnquiryModal";

const FloorPlans = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#0B1C2D] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-14">
          Floor <span className="text-[#D4AF37]">Plans</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {[plan1, plan2].map((img, i) => (
            <div key={i} className="bg-[#0B1C2D]/80 rounded-xl overflow-hidden">
              <img src={img} className="h-60 w-full object-cover" />
              <div className="p-6 text-center">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#D4AF37] text-[#0B1C2D] px-6 py-2 rounded-full font-semibold"
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
