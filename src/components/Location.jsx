const Location = () => {
  return (
    <section
      id="location"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
          Prime <span className="text-[#D4AF37]">Location</span>
        </h2>

        {/* MAP CONTAINER */}
        <div
          className="
            relative w-full
            h-[260px]
            sm:h-[360px]
            lg:h-[420px]
            rounded-xl
            overflow-hidden
            border border-gray-200
            shadow-sm
          "
        >
          <iframe
            title="Balewadi Location"
            src="https://www.google.com/maps?q=Balewadi,Pune,Maharashtra&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default Location;
