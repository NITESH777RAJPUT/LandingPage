import { useEffect, useState } from "react";
import plan1 from "../assets/floorplans/plan1.jpg";
import plan2 from "../assets/floorplans/plan2.jpg";
import plan3 from "../assets/floorplans/plan3.jpg"; // 👈 NEW
import plan4 from "../assets/floorplans/plan4.jpg"; // 👈 NEW
import EnquiryModal from "./EnquiryModal";

const FloorPlans = () => {
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // 🔁 SLIDER IMAGES (ONLY FOR 2nd CARD)
  const sliderImages = [plan2, plan3, plan4];

  // 🔁 AUTO SLIDE EFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2500); // slide speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-14 text-gray-900">
          Master <span className="text-[#D4AF37]">Plans</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {/* ================= CARD 1 (SINGLE IMAGE) ================= */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src={plan1}
                alt="Floor Plan 1"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="p-6 text-center">
              <button
                onClick={() => setOpen(true)}
                className="bg-[#D4AF37] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-[#c9a634] transition"
              >
                View Plan
              </button>
            </div>
          </div>

          {/* ================= CARD 2 (AUTO SLIDER) ================= */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition relative">
            <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center relative overflow-hidden">
              {sliderImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Floor Plan ${index + 2}`}
                  className={`
                    absolute
                    max-w-full max-h-full
                    object-contain
                    transition-opacity duration-700 ease-in-out
                    ${index === activeSlide ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}
            </div>

            {/* SLIDE DOTS */}
            <div className="flex justify-center gap-2 mt-3">
              {sliderImages.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === activeSlide
                      ? "bg-[#D4AF37]"
                      : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <div className="p-6 text-center">
              <button
                onClick={() => setOpen(true)}
                className="bg-[#D4AF37] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-[#c9a634] transition"
              >
                View Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default FloorPlans;
