import { useEffect, useState, useRef } from "react";
import img1 from "../assets/images/about/img1.jpg";
import img2 from "../assets/images/about/img2.jpg";
import img3 from "../assets/images/about/img3.jpg";
import img4 from "../assets/images/about/img4.jpg";
import img5 from "../assets/images/about/img5.jpg";
import img6 from "../assets/images/about/img6.jpg";
import img7 from "../assets/images/about/img7.jpg";
import img8 from "../assets/images/about/img8.jpg";
import img9 from "../assets/images/about/img9.jpg";

// 👉 Total 9 images
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

// ================= COUNTER =================
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const inc = end / 60;

        const i = setInterval(() => {
          start += inc;
          if (start >= end) {
            setCount(end);
            clearInterval(i);
          } else {
            setCount(Math.ceil(start));
          }
        }, 30);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
};

// ================= STAT =================
const Stat = ({ value, label }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-center shadow-sm">
    <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
      {value}
    </h3>
    <p className="text-xs sm:text-sm text-gray-500 mt-1">
      {label}
    </p>
  </div>
);

// ================= ABOUT =================
const About = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((p) => (p + 1) % images.length);
    }, 4000); // smooth for 9 images

    return () => clearInterval(i);
  }, []);

  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* IMAGE SHOWCASE */}
        <div className="relative h-[300px] sm:h-[420px] lg:h-[520px] flex items-center justify-center">
          {images.map((img, i) => {
            const total = images.length;
            const prev = (active - 1 + total) % total;
            const next = (active + 1) % total;

            let position = "opacity-0 scale-90 z-0";

            if (i === active) {
              position = "z-30 scale-100 opacity-100";
            } else if (i === next) {
              position =
                "z-20 scale-95 opacity-70 translate-x-20 sm:translate-x-24";
            } else if (i === prev) {
              position =
                "z-10 scale-95 opacity-70 -translate-x-20 sm:-translate-x-24";
            }

            return (
              <img
                key={i}
                src={img}
                alt={`About ${i + 1}`}
                className={`
    absolute
    w-[230px] sm:w-[300px] lg:w-[360px]
    rounded-2xl
    shadow-2xl
    transition-all duration-700 ease-in-out
    ${position}
  `}
              />

            );
          })}
        </div>

        {/* CONTENT */}
        <div className="text-center lg:text-left">
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs sm:text-sm">
            Legacy You Can Count On
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mt-4 mb-6 text-gray-900">
            Excellence That{" "}
            <span className="text-[#D4AF37]">Endures</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            For over three decades, <strong>Kunal Group</strong> has shaped
            Pune’s skyline with timeless luxury developments.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Stat value={<><Counter end={35} />+</>} label="Years" />
            <Stat value={<><Counter end={6} />M+</>} label="Sq. Ft." />
            <Stat value={<><Counter end={5500} />+</>} label="Homes" />
            <Stat value={<Counter end={100} />} label="Trust %" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
