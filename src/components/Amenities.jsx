import { motion } from "framer-motion";

import clubhouse from "../assets/amenities/clubhouse.png";
import jogging from "../assets/amenities/jogging.png";
import gym from "../assets/amenities/gym.png";
import rooftop from "../assets/amenities/rooftop.png";
import swimming from "../assets/amenities/swimming.png";
import hall from "../assets/amenities/hall.png";
import indoor from "../assets/amenities/indoor.png";
import yoga from "../assets/amenities/yoga.png";
import reflexology from "../assets/amenities/reflexology.png";
import kids from "../assets/amenities/kids.png";
import infinity from "../assets/amenities/infinity.png";
import parking from "../assets/amenities/parking.png";

const amenities = [
  { icon: clubhouse, label: "Club House" },
  { icon: jogging, label: "Jogging Track" },
  { icon: gym, label: "Gymnasium" },
  { icon: rooftop, label: "Rooftop Amenities" },
  { icon: swimming, label: "Swimming Pool" },
  { icon: hall, label: "Multipurpose Hall" },
  { icon: indoor, label: "Indoor Game Room" },
  { icon: yoga, label: "Yoga Lawn" },
  { icon: reflexology, label: "Reflexology Pool" },
  { icon: kids, label: "Kid's Play Area" },
  { icon: infinity, label: "Infinity Pool" },
  { icon: parking, label: "Parking" },
];

/* 🔥 CONTAINER STAGGER */
const containerAnim = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* 🔹 ITEM ENTRY */
const itemAnim = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Amenities = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold mb-20 tracking-wide"
        >
          WORLD CLASS{" "}
          <span className="text-[#C9A24D]">AMENITIES</span>
        </motion.h2>

        {/* GRID */}
        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              variants={itemAnim}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: -5,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="
                group
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  w-20 h-20 mx-auto mb-6
                  rounded-full
                  border border-gray-300
                  flex items-center justify-center
                  relative
                "
              >
                {/* GLOW */}
                <div className="absolute inset-0 rounded-full bg-[#C9A24D]/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-10 h-10 object-contain relative z-10"
                />
              </motion.div>

              {/* LABEL */}
              <p className="text-sm font-semibold text-gray-700 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
