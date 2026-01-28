import locationMap from "../assets/images/location-map.jpg";

const Location = () => {
  return (
    <section id="location" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
          Prime <span className="text-[#D4AF37]">Location</span>
        </h2>

        {/* STATIC MAP IMAGE */}
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

        <p className="mt-4 text-sm text-gray-600">
          Click the map to view directions and nearby landmarks.
        </p>

      </div>
    </section>
  );
};

export default Location;
