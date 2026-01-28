import { useEffect, useState, useRef } from "react";
import img1 from "../assets/images/about/img1.jpg";
import img2 from "../assets/images/about/img2.jpg";
import img3 from "../assets/images/about/img3.jpg";
import img4 from "../assets/images/about/img4.jpg";

const images = [img1, img2, img3, img4];

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
          } else setCount(Math.ceil(start));
        }, 30);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setActive((p) => (p + 1) % images.length),
      2800
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section id="about" className="bg-[#0B1C2D] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGES */}
        <div className="relative h-[420px] sm:h-[520px] flex justify-center">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute w-[220px] sm:w-[280px] rounded-2xl shadow-2xl transition-all duration-700
                ${i === active ? "opacity-100 scale-100 z-20" : "opacity-0 scale-90 z-0"}
              `}
            />
          ))}
        </div>

        {/* CONTENT */}
        <div>
          <span className="text-[#D4AF37] uppercase tracking-widest text-sm">
            Legacy You Can Count On
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-6">
            Excellence That <span className="text-[#D4AF37]">Endures</span>
          </h2>

          <p className="text-gray-300 mb-10 max-w-xl">
            For over three decades, <strong>Kunal Group</strong> has shaped
            Pune’s skyline with timeless luxury developments.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <Stat value={<><Counter end={35} />+</>} label="Years" />
            <Stat value={<><Counter end={6} />M+</>} label="Sq. Ft." />
            <Stat value={<><Counter end={5500} />+</>} label="Homes" />
            <Stat value={<Counter end={100} />} label="Trust" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="bg-[#0B1C2D]/80 border border-white/10 rounded-xl p-5 text-center">
    <h3 className="text-3xl font-bold text-[#D4AF37]">{value}</h3>
    <p className="text-sm text-gray-300">{label}</p>
  </div>
);

export default About;
