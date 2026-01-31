import locationMap from "../assets/images/location-map.jpg";
import { MapPin } from "lucide-react";

const Location = () => {
  const connectivity = [
    ["Mumbai–Pune Expressway", "1.5 km"],
    ["Nearby 3 Metro Stations", "1 km"],
    ["Balewadi High Street", "1.2 km"],
    ["D-Mart", "2.5 km"],
    ["Schools & Colleges", "1.5 km"],
    ["Phoenix Mall", "4.5 km"],
    ["Rajiv Gandhi Infotech Park, Hinjewadi", "5.8 km"],
    ["Pune Airport", "18 km"],
  ];

  return (
    <section id="location" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-gray-900">
          Prime <span className="text-[#D4AF37]">Location</span>
        </h2>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — STATIC MAP */}
          <a
            href="https://www.google.com/maps?q=Balewadi,Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg group"
          >
            <img
              src={locationMap}
              alt="Balewadi Pune Location"
              className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

            {/* CTA */}
            <div className="absolute bottom-4 right-4 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
              Open in Google Maps →
            </div>
          </a>

          {/* RIGHT — CONNECTIVITY */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
              Excellent <span className="text-[#D4AF37]">Connectivity</span>
            </h3>

            <ul className="space-y-4">
              {connectivity.map(([title, distance], i) => (
                <li key={i} className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#D4AF37] mt-1" />
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>{title}</strong> – {distance}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* FOOT NOTE */}
        <p className="mt-6 text-sm text-gray-600">
          Click the map to view directions and nearby landmarks.
        </p>

      </div>
    </section>
  );
};

export default Location;
