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
      className="bg-[#0B1C2D] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">
          WORLD CLASS{" "}
          <span className="text-[#D4AF37]">AMENITIES</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="
                bg-[#0B1C2D]/80
                border border-white/10
                rounded-xl
                p-6
                text-center
                hover:border-[#D4AF37]
                hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
                transition
              "
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 object-contain"
              />
              <p className="text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
