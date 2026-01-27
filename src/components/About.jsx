import { useEffect, useState, useRef } from "react";

import img1 from "../assets/images/about/img1.jpg";
import img2 from "../assets/images/about/img2.jpg";
import img3 from "../assets/images/about/img3.jpg";
import img4 from "../assets/images/about/img4.jpg";

const images = [img1, img2, img3, img4];

/* 🔢 COUNTER */
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = end / 60;

          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(Math.ceil(start));
            }
          }, 30);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="bg-white py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – IMAGE STACK */}
        <div className="relative h-[560px] flex items-center justify-center perspective-[1200px]">
          {images.map((img, i) => {
            const isActive = i === active;
            const isPrev =
              i === (active - 1 + images.length) % images.length;

            return (
              <div
                key={i}
                className={`
                  absolute transition-all duration-700 ease-out
                  ${isActive ? "z-30 opacity-100 scale-100 rotate-y-0" : ""}
                  ${isPrev ? "z-20 opacity-60 scale-95 -translate-x-10 rotate-y-[-15deg]" : ""}
                  ${!isActive && !isPrev
                    ? "z-0 opacity-0 scale-90 translate-x-20 rotate-y-[20deg]"
                    : ""}
                `}
              >
                <div className="w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-white">
                  <img
                    src={img}
                    alt="Kunal Group Project"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="text-[#C9A24D] uppercase tracking-[0.3em] text-sm font-semibold">
            Legacy You Can Count On
          </span>

          <h2 className="text-5xl font-extrabold mt-5 mb-8 leading-tight text-black">
            Excellence That <br />
            <span className="text-[#C9A24D]">Endures</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-14 max-w-xl">
            For over three decades, <strong>Kunal Group</strong> has shaped
            Pune’s skyline with landmark developments rooted in quality,
            precision and timeless design. Every project reflects a commitment
            to privacy, prestige and enduring value.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-8">
            <Stat value={<><Counter end={35} />+</>} label="Years of Legacy" />
            <Stat value={<><Counter end={6} />M+</>} label="Sq. Ft. Delivered" />
            <Stat value={<><Counter end={5500} />+</>} label="Homes Built" />
            <Stat value={<Counter end={100} />} label="Trust & Transparency" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
    <h3 className="text-4xl font-extrabold text-black mb-1 group-hover:text-[#C9A24D] transition">
      {value}
    </h3>
    <p className="text-sm tracking-wide text-gray-600">
      {label}
    </p>
  </div>
);

export default About;
