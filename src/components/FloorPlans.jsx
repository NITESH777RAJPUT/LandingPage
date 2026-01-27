import { useState } from "react";
import plan1 from "../assets/floorplans/plan1.jpg";
import plan2 from "../assets/floorplans/plan2.jpg";
import EnquiryModal from "./EnquiryModal";

const FloorPlans = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-16">
            Floor <span className="text-[#C9A24D]">Plans</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Master Plan */}
            <div className="bg-white rounded-xl shadow overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src={plan1}
                alt="Master Plan"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-4">Master Plan</h3>
                <button
                  onClick={() => setOpenEnquiry(true)}
                  className="px-6 py-2 bg-[#C9A24D] text-white rounded-full hover:bg-black transition"
                >
                  Show Master Plan
                </button>
              </div>
            </div>

            {/* Unit Plan */}
            <div className="bg-white rounded-xl shadow overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src={plan2}
                alt="Unit Plan"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-4">Unit Plan</h3>
                <button
                  onClick={() => setOpenEnquiry(true)}
                  className="px-6 py-2 bg-[#C9A24D] text-white rounded-full hover:bg-black transition"
                >
                  Show Unit Plan
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        open={openEnquiry}
        onClose={() => setOpenEnquiry(false)}
      />
    </>
  );
};

export default FloorPlans;
