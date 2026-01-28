import { motion } from "framer-motion";

// ===== AMENITIES ICON IMPORTS =====
import clubhouse from "../assets/amenities/clubhouse.png";
import gym from "../assets/amenities/gym.png";
import swimming from "../assets/amenities/swimming.png";
import jogging from "../assets/amenities/jogging.png";
import yoga from "../assets/amenities/yoga.png";
import parking from "../assets/amenities/parking.png";

import indoor from "../assets/amenities/indoor.png";
import kids from "../assets/amenities/kids.png";
import hall from "../assets/amenities/hall.png";
import rooftop from "../assets/amenities/rooftop.png";
import reflexology from "../assets/amenities/reflexology.png";
import infinity from "../assets/amenities/infinity.png";

// ===== DATA =====
const amenities = [
  { icon: clubhouse, label: "Club House" },
  { icon: gym, label: "Gymnasium" },
  { icon: swimming, label: "Swimming Pool" },
  { icon: jogging, label: "Jogging Track" },
  { icon: yoga, label: "Yoga Lawn" },
  { icon: parking, label: "Parking" },

  { icon: indoor, label: "Indoor Games" },
  { icon: kids, label: "Kids Play Area" },
  { icon: hall, label: "Multipurpose Hall" },
  { icon: rooftop, label: "Rooftop Lounge" },
  { icon: reflexology, label: "Reflexology Path" },
  { icon: infinity, label: "Infinity Pool" },
];

// ===== COMPONENT =====
const Amenities = () => {
  return (
    <section
      id="amenities"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 lg:mb-16 text-gray-900">
          WORLD CLASS{" "}
          <span className="text-[#D4AF37]">AMENITIES</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white
                border border-gray-200
                rounded-xl
                p-4 sm:p-5 lg:p-6
                text-center
                hover:border-[#D4AF37]
                hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
                transition
              "
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4 object-contain"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-700">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
